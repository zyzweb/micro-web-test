import React from 'react'
import './index.scss'

import observer from '../../../../assets/observer.png'

class VideoDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const { navList } = this.state
    return (
      <div className="video-detail-container">
        <div className="video-detail-play">
          <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5" alt=""/>
        </div>

        <div className="video-detail-title">
          思域还是昂克赛拉？老编辑来作一次“不冲动”的选择思域还是昂克赛拉？老编辑来作一次“不冲动”的选择
        </div>

        <div className="video-detail-observer">
          <img src={observer} alt=""/>
          <span>4.9w</span>
          <span>导购</span>
          <span>2020-02-02 00:00:00</span>
        </div>

        <div className="video-detail-prompt">
          谈起最能激发“肾上腺素”的十万级紧凑型轿车，就绝对绕不开思域与昂克赛拉——优雅运动的线条总能与年轻人意气相投。
        </div>
      </div>
    )
  }
}

export default VideoDetail
