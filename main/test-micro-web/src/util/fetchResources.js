// 获取页面资源
export const fetchUrl = url => fetch(url).then(async res => res.text())
