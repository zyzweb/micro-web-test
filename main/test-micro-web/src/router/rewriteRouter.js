import { patchRouter } from '../util';
import { turnApp } from './routerHandler';

export const rewriteRouter = () => {
  // 重写history.pushState和history.replaceState patchRouter给路由打补丁注册自定义事件,事件名分别是micro_push
  // 和micro_replace,然后监听这2个事件,当触发这2个事件的时候,就会执行turnApp方法
  // 前进和后退也触发turnApp方法
  // turnApp方法就是切换子应用的方法
  window.history.pushState = patchRouter(window.history.pushState, 'micro_push');
  window.history.replaceState = patchRouter(window.history.replaceState, 'micro_replace');

  // 添加路由跳转事件监听
  window.addEventListener('micro_push', turnApp);
  window.addEventListener('micro_replace', turnApp);
  window.onpopstate = async function () {
    await turnApp()
  }
}


