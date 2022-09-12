// 快照沙箱
export class SnapShotSandBox {
  constructor() {
    this.proxy = window;
    this.active();
  }
  active() {
    this.snapshot = new Map(); // 创建 window 对象的快照
    for (const key in window) {
      // eslint-disable-next-line no-prototype-builtins
      if (window.hasOwnProperty(key)) {
        // 将window上的属性进行拍照
        this.snapshot[key] = window[key];
      }
    }
  }
  inactive() {
    for (const key in window) {
      // eslint-disable-next-line no-prototype-builtins
      if (window.hasOwnProperty(key)) {
        // 将上次快照的结果和本次window属性做对比
        if (window[key] !== this.snapshot[key]) {
          // 还原window
          window[key] = this.snapshot[key];
        }
      }
    }
  }
}
