// 执行应用的 js 内容 new Function 篇
export const performScript = (script, appName, global) => {
  const scriptText =
    `try {
       ${script}
       return window['${appName}']
      } catch (err) {
          console.error('runScript error:' + err);
      }`;

  const performer = new Function(scriptText);
  return performer.call(global, global);
}

// 执行应用中的 js 内容 eval篇
// 执行子应用的js文件才能将appName挂载到window上才能通过window.appName获取子应用的生命周期函数
export const performScriptForEval = (script, appName, global) => {
  const scriptText = `
    (() => () => {
      try {
        ${script}
        return window['${appName}']
      } catch (err) {
        console.error('runScript error:' + err);
      }
    })()
  `
  return (() => eval(scriptText))().call(global, global)
}
