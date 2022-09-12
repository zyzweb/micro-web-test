import { currentApp } from './util';
import { prefetch } from './htmlLoader/prefetch';
import { getList, setList } from './const/subApps'
import { rewriteRouter } from './router/rewriteRouter'
import { setMainLifecycle } from './const/mainLifecycles';

import { Custom } from './customevent';
const custom = new Custom();
custom.on('test', (data) => {
  console.log('test', data)
})
window.custom = custom


// 包装路由跳转事件，增加拦截功能 todo 相当重要，子应用跳转都依赖此方法。
rewriteRouter()

// 注册子应用列表
export const registerMicroApps = (apps, mainLifecycle) => {
  // apps.forEach(app => window.appList.push(app));
  // 注册子应用
  console.log("%c 🍤 apps", "color:#465975", apps);
  setList(apps)

  // 保留主应用的生命周期
  setMainLifecycle(mainLifecycle)
}

export const start = async () =>  {
  // 获取子应用列表
  const appList = getList()

  if (!appList.length) {
    throw Error('子应用列表为空，请查看是否正确注册');
  } else {

    // 跳转到第一个子应用
    const app = currentApp();

    if (app) {
      const { pathname, hash } = window.location
      const url = pathname + hash

      window.history.pushState(url, app.name, url || app.activeRule)
    }

    // 将当前子应用做标记
    window.__CURRENT_SUB_APP__ = app.activeRule;

    // 预加载
    await prefetch();
  }
}
