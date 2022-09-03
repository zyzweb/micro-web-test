const router = require('koa-router')()

router.prefix('/vue2')

router.get('/new/list', function (ctx, next) {
  ctx.body = [
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      title: '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      title: '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      title: '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      title: '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      title: '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      title: '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      title: '爱在大草原 吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      title: '爱在大草原 吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      title: '爱在大草原 吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      title: '爱在大草原 吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true
    },
  ]
})
router.get('/rank/list', function (ctx, next) {
  ctx.body = [
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
  ]
})
router.get('/car/list', function (ctx, next) {
  ctx.body = [
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      name: '沃尔沃'
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      name: '沃尔沃'
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      name: '沃尔沃'
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      name: '沃尔沃'
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      name: '沃尔沃'
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      name: '沃尔沃'
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      name: '沃尔沃'
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      name: '沃尔沃'
    },
  ]
})

module.exports = router
