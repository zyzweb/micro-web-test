import {fetchUrl} from '../util/fetchResources';
import {sandbox} from '../sandbox/sandbox';
import {findAppByName} from '../util';

const cache = {};

// 解析html
export const parseHtml = async (url, appName) => {
  if (cache[appName]) {
    return cache[appName];
  }
  const div = document.createElement('div');
  div.classList.add('ss')
  let scriptsArray = [];

  div.innerHTML = await fetchUrl(url);

  const [scriptUrls, scripts, elements] = getResources(div, findAppByName(appName));
  const fetchedScript = await Promise.all(scriptUrls.map(url => fetchUrl(url)));

  scriptsArray = scripts.concat(fetchedScript);
  cache[appName] = [elements, scriptsArray];

  return [elements, scriptsArray];
}

// 解析 js 内容
export const getResources = (root, app) => {
  const scriptUrls = [];
  const scripts = [];

  function deepParse(element) {
    const children = element.children;
    const parent = element.parentNode;

    // 处理位于 script 标签中的 js 文件
    if (element.nodeName.toLowerCase() === 'script') {
      const src = element.getAttribute('src');
      if (!src) {
        // 直接在 script 标签中书写的内容
        let script = element.outerHTML;
        scripts.push(script);
      } else {
        if (src.startsWith('http')) {
          scriptUrls.push(src);
        } else {
          // fetch 时 添加 publicPath
          scriptUrls.push(`http:${app.entry}/${src}`);
        }
      }

      if (parent) {
        let comment = document.createComment('此 js 文件已被微前端替换');
        // 在 dom 结构中删除此文件引用
        parent.replaceChild(comment, element);
      }
    }
    // 处理位于 link 标签中的 js 文件
    if (element.nodeName.toLowerCase() === 'link') {
      const href = element.getAttribute('href');
      if (href.endsWith('.js')) {
        if (href.startsWith('http')) {
          scriptUrls.push(href);
        } else {
          // fetch 时 添加 publicPath
          scriptUrls.push(`http:${app.entry}/${href}`);
        }
      }
    }
    for (let i = 0; i < children.length; i++) {
      deepParse(children[i]);
    }
  }
  deepParse(root);

  return [scriptUrls, scripts, root.outerHTML];
}

// 加载和渲染html
export const htmlLoader = async (app) => {
  const {
    container: cantainerName, entry, name
  } = app
  let [dom, scriptsArray] = await parseHtml(entry, name);

  let container = document.querySelector(cantainerName);
  if (!container) {
    throw Error(` ${name} 的容器不存在，请查看是否正确指定`);
  }

  container.innerHTML = dom;
  scriptsArray.map((item) => {
    sandbox(item, name);
  });
}
