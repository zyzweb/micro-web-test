import { getList } from '../const/subApps';

// 改变全局事件状态
export const patchRouter = (event, ListerName) => {
  return function () {
    // 创建一个自定义事件
    const e = new Event(ListerName);
    // 让event来代替本函数执行
    event.apply(this, arguments);
    // 通过dispatchEvent来触发自定义事件
    window.dispatchEvent(e);
  };
};

// 查看当前路由是否有变化
export const isTurnChild = () => {
  const { pathname, hash } = window.location
  const url = pathname + hash

  // 当前路由无改变。
  const currentPrefix = url.match(/(\/\w+)/g)

  if (
    currentPrefix &&
    (currentPrefix[0] === window.__CURRENT_SUB_APP__) &&
    hash === window.__CURRENT_HASH__
  ) {
    return false;
  }

  window.__ORIGIN_APP__ = window.__CURRENT_SUB_APP__;

  const currentSubApp = window.location.pathname.match(/(\/\w+)/)

  if (!currentSubApp) {
    return false
  }
  // 当前路由以改变，修改当前路由
  window.__CURRENT_SUB_APP__ = currentSubApp[0];

  // 判断当前hash值是否改变
  window.__CURRENT_HASH__ = hash

  return true;
};

// 获取当前应用
export const currentApp = () => {
  const currentRouter = window.location.pathname.match(/(\/\w+)/)[0];

  return filterApp('activeRule', currentRouter);
};

// 根据 路由 查找子应用
export const findAppByRoute = (router) => {
  return filterApp('activeRule', router);
};

// 根据 name 查找子应用
export const findAppByName = (name) => {
  return filterApp('name', name);
};

export const filterApp = (key, rule) => {
  const currentApp = getList().filter(app => app[key] === rule);

  return currentApp.length ? currentApp[0] : false;
};


