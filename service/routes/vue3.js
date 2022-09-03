const router = require('koa-router')()

router.prefix('/vue3')

router.get('/swapper', function (ctx, next) {
  ctx.body = [
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pcauto.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fautohm%2F2202%2F16%2Fc26%2F297684197_1644992726134_830x600.png&refer=http%3A%2F%2Fimg.pcauto.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815674&t=6598da5422c337364e894546bce235c2',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic3.zhimg.com%2Fv2-39f4b0a66f4e38240b8b3aefbfd78237_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic3.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815798&t=946f3f28ab5cbe9d3d9f757830c0c768',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fx0.ifengimg.com%2Fres%2F2021%2F842DF747D4383ED7EAA17CE06882673D6BBEA7BF_size106_w680_h434.jpeg&refer=http%3A%2F%2Fx0.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815750&t=f08ee453b170fac8bcd75477ee0eec24',
  ]
})

router.get('/text', function (ctx, next) {
  ctx.body = [
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
  ]
})

module.exports = router
