const router = require('koa-router')()

router.prefix('/react15')

router.get('/information/list', (ctx, next) => {
  ctx.body = {
    list: [
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
        status: false
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: false
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: false
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: false
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: false
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: false
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: false
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: false
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: false
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: false
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: false
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: false
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: false
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: false
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: false
      },
    ],
    page: 1,
    limit: 10,
    total: 200,
  }
})

router.get('/recommended', (ctx, next) => {
  ctx.body = [
    {
      text: '比亚迪新车“汉”上市预订考虑不周，预订者利益受者利益受者利益受',
      status: false
    },
    {
      text: '比亚迪新车“汉”上市预订考虑不周，预订者利益受者利益受者利益受',
      status: false
    },
    {
      text: '比亚迪新车“汉”上市预订考虑不周，预订者利益受者利益受者利益受',
      status: false
    },
    {
      text: '比亚迪新车“汉”上市预订考虑不周，预订者利益受者利益受者利益受',
      status: false
    },
    {
      text: '比亚迪新车“汉”上市预订考虑不周，预订者利益受者利益受者利益受',
      status: false
    },
    {
      text: '比亚迪新车“汉”上市预订考虑不周，预订者利益受者利益受者利益受',
      status: false
    },
    {
      text: '比亚迪新车“汉”上市预订考虑不周，预订者利益受者利益受者利益受',
      status: false
    },
    {
      text: '比亚迪新车“汉”上市预订考虑不周，预订者利益受者利益受者利益受',
      status: false
    },
    {
      text: '比亚迪新车“汉”上市预订考虑不周，预订者利益受者利益受者利益受',
      status: false
    },
    {
      text: '比亚迪新车“汉”上市预订考虑不周，预订者利益受者利益受者利益受',
      status: false
    },
  ]
})

router.post('/comments/list', (ctx, next) => {
  ctx.body = [
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      name: '小院里的海棠树',
      content: '非常正确，人家花不到一万就买到了，我们要花好几万元。还是国外便宜啊！也不知道车子有 没有代购的哇[捂脸苦笑]想找个靠谱买车，有没有代购的呀，啥时候放开车辆代购就好了，也 不需要关税的那种，人人买车就像吃饭那样简单，期待着这一天的到来，我期盼着，我期盼着， 期盼着，我觉得不止是我一个人这样想，希望广大网友能赞成我的想法。当然不包括哪些土豪 们，她们买车也是很容易，毕竟我还不能这样做。哎，希望这一天早一点到来，希望这一天早一点到来，希望这一天早一点到来，希望这一天早一点到来',
      status: 0, // 0 未审核 1 已审核
      time: '2天前',
      praise: false,
      hover: false,
      praiseNumber: 10
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      name: '小院里的海棠树',
      content: '非常正确，人家花不到一万就买到了，我们要花好几万元。还是国外便宜啊！也不知道车子有 没有代购的哇[捂脸苦笑]想找个靠谱买车，有没有代购的呀，啥时候放开车辆代购就好了，也 不需要关税的那种，人人买车就像吃饭那样简单，期待着这一天的到来，我期盼着，我期盼着， 期盼着，我觉得不止是我一个人这样想，希望广大网友能赞成我的想法。当然不包括哪些土豪 们，她们买车也是很容易，毕竟我还不能这样做。哎，希望这一天早一点到来，希望这一天早一点到来，希望这一天早一点到来，希望这一天早一点到来',
      status: 0, // 0 未审核 1 已审核
      time: '2天前',
      praise: false,
      hover: false,
      praiseNumber: 10
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      name: '小院里的海棠树',
      content: '非常正确，人家花不到一万就买到了，我们要花好几万元。还是国外便宜啊！也不知道车子有 没有代购的哇[捂脸苦笑]想找个靠谱买车，有没有代购的呀，啥时候放开车辆代购就好了，也 不需要关税的那种，人人买车就像吃饭那样简单，期待着这一天的到来，我期盼着，我期盼着， 期盼着，我觉得不止是我一个人这样想，希望广大网友能赞成我的想法。当然不包括哪些土豪 们，她们买车也是很容易，毕竟我还不能这样做。哎，希望这一天早一点到来，希望这一天早一点到来，希望这一天早一点到来，希望这一天早一点到来',
      status: 0, // 0 未审核 1 已审核
      time: '2天前',
      praise: false,
      hover: false,
      praiseNumber: 10
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      name: '小院里的海棠树',
      content: '非常正确，人家花不到一万就买到了，我们要花好几万元。还是国外便宜啊！也不知道车子有 没有代购的哇[捂脸苦笑]想找个靠谱买车，有没有代购的呀，啥时候放开车辆代购就好了，也 不需要关税的那种，人人买车就像吃饭那样简单，期待着这一天的到来，我期盼着，我期盼着， 期盼着，我觉得不止是我一个人这样想，希望广大网友能赞成我的想法。当然不包括哪些土豪 们，她们买车也是很容易，毕竟我还不能这样做。哎，希望这一天早一点到来，希望这一天早一点到来，希望这一天早一点到来，希望这一天早一点到来',
      status: 0, // 0 未审核 1 已审核
      time: '2天前',
      praise: false,
      hover: false,
      praiseNumber: 10
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5',
      name: '小院里的海棠树',
      content: '非常正确，人家花不到一万就买到了，我们要花好几万元。还是国外便宜啊！也不知道车子有 没有代购的哇[捂脸苦笑]想找个靠谱买车，有没有代购的呀，啥时候放开车辆代购就好了，也 不需要关税的那种，人人买车就像吃饭那样简单，期待着这一天的到来，我期盼着，我期盼着， 期盼着，我觉得不止是我一个人这样想，希望广大网友能赞成我的想法。当然不包括哪些土豪 们，她们买车也是很容易，毕竟我还不能这样做。哎，希望这一天早一点到来，希望这一天早一点到来，希望这一天早一点到来，希望这一天早一点到来',
      status: 0, // 0 未审核 1 已审核
      time: '2天前',
      praise: false,
      hover: false,
      praiseNumber: 10
    },
  ]
})
module.exports = router
