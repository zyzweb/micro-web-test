export class Custom {
  //事件监听
  on(name, cb) {
    window.addEventListener(name, (e) => {
      cb(e.detail)
    })
  }
    
  //事件触发
  emit(name, data) {
    const event = new CustomEvent(name, {
      // 自定义事件使用detail字段来传递数据
      detail: data
    })
    window.dispatchEvent(event)
  }
}