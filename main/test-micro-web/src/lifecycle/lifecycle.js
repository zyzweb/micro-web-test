import {htmlLoader} from '../htmlLoader/htmlLoader';
import {findAppByRoute} from '../util';
import {getMainLifecycle} from '../const/mainLifecycles';

// 改变了路由，重新装载新的子应用
export const lifecycle = async () => {
  const prevApp = findAppByRoute(window.__ORIGIN_APP__); // 获取上一个子应用
  const nextApp = findAppByRoute(window.__CURRENT_SUB_APP__); // 获取跳转后的子应用

  if (!nextApp) {
    return
  }

  if (prevApp) {
    // 卸载上一个应用
    await unmount(prevApp);
  }

  // 还原 prevApp 快照。
  // prevApp.sandBox.active()
  console.log("-> nextApp", nextApp);
  await boostrap(nextApp);

  await mount(nextApp);
}

// 装载应用
export const boostrap = async (app) => {
  await runMainLifeCycle('beforeLoad', app)
  console.log("-> app111", app);

  // 获取子应用的dom结构
  await htmlLoader(app);
  app && await app.bootstrap();
}

// 渲染应用
export const mount = async (app) => {
  app && await app.mount(app);
  console.log("-> app222", app);

  await runMainLifeCycle('mounted', app)
}

// 卸载
export const unmount = async (app) => {
  app && app.unmount && await app.unmount(app);

  await runMainLifeCycle('destoryed', app)
}

// 执行主应用生命周期
export const runMainLifeCycle = async (type, app) => {
  const mainLife = getMainLifecycle();

  // 因为主应用里配置的生命周期是一个数组，所以需要执行数组中的所有内容
  await Promise.all(mainLife[type].map(item => item(app)))
}
