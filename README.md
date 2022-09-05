# micro_web_test
#### 目录结构
- main 主应用
- react15 子应用
- react16 子应用
- vue2 子应用
- vue3 子应用
- service 服务端
- platform 发布平台

#### 子项目分类
> 我的。计算器，关注度排行，上市新车 react16

> 本地车市、首页、搜索、选车、经销商、新能源、车型   vue2

> 车系、对比、询价页、金融购车、降价频道  vue3

> 资讯、视频  react15

1.主应用
注册子应用
加载、渲染子应用
路由匹配(activeWhen,rules-由框架判断)
获取数据（公共依赖，通过数据做鉴权处理）
通信（父子通信，子父的通信）
2.子应用的功能
渲染
监听通信（主应用传递过来的数据，）
3.微前端框架
子应用的注册
有开始内容（应用加载完成，）
路由更新判断
匹配对应的子应用
加载子应用的内容
完成所有依赖项的执行
将子应用渲染在園定的容器内
公共事件的管理
异常的捕获和报错
全局的状态管理的内容
沙箱的隔离
通信机制
4.服务端的功能
提供数据服务
5.发布平台
主子应用的打包和发布

![image-20220823010752590](http://image.zhuyuanzheng1.top/image-20220823010752590.png)



koa-generator   supervisor    express  express-generator
koa -V
koa2 service
## 主应用(vue3)
http://localhost:8080/react16#/login

## 子应用
http://localhost:9002/#/information  (react15)
http://localhost:9003/#/rank  (react16)
http://localhost:9004/#/energy  (vue2)
http://localhost:9005/#/index  (vue3)

## 服务端
http://localhost:3000

## 发布平台
http://localhost:3001

npm run dev  启动主应用 4个子应用  服务端
发布平台要单独启动 在platform目录下