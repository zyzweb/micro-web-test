import React from 'react'
import './index.scss'

import NoPraise from '../../../../assets/no-praise.png'
import blueArrow from '../../../../assets/blue-arrow.png'

class HotVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
      ],
    }
  }

  render() {
    const { list } = this.state
    return (
      <div className="hot-video-container">
        <div className="hot-video-title">
          热门视频推荐
        </div>
        <div className="hot-video-list">
          {
            list.map(item => {
              return (
                <div className="hot-video-item">
                  <div className="hot-video-item-img">
                    <img src={item.img} alt=""/>
                  </div>
                  <div>
                    <div className="hot-video-item-title">{item.title}</div>
                    <div className="hot-video-item-operation">
                      <span>{item.type}</span>
                      <span>
                        <img src={NoPraise} alt=""/>
                        10
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className='hot-video-button'>
          展开全部10条
          <img src={blueArrow} alt=""/>
        </div>
      </div>
    )
  }
}

export default HotVideo
