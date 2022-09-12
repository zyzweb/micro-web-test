export const isFunction = (value) => typeof value === 'function';

// 代理沙箱
export class ProxySandBox {
  constructor() {
    this.proxy = window;
    this.active();
  }
  active() {
    const proxy = window;

    const draftValue = Object.create(Object.getPrototypeOf(proxy))

    this.proxy = new Proxy(proxy, {
      get(target, propKey) {
        // 函数做特殊处理
        if (isFunction(draftValue[propKey])) {
          return draftValue[propKey].bind(proxy)
        }
        if (isFunction(target[propKey])) {
          return target[propKey].bind(proxy)
        }

        return draftValue[propKey] || target[propKey]
      },
      set(target, propKey, value) {
        draftValue[propKey] = value
        return true
      }
    })
  }
  inactive() {
    console.log('关闭沙箱');
  }
}
