import React from 'react'
import './index.scss'
import { Link } from 'react-router'

import grayArrow from '../../../../assets/gray-arrow.png'

// 热门推荐
import InformationRecommend from '../recommended/index.jsx';

class InformationNews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  setItem() {

  }

  render() {
    return (
      <div className="information-news-container">
        {/*快速找车*/}
        <div>
          <div className="information-news-title">快速找车</div>

          <div className="information-news-wrapper">
            <div className="information-news-select">
              请选择品牌
              <img src={grayArrow} alt=""/>
            </div>
            <div className="information-news-select">
              请选择车系
              <img src={grayArrow} alt=""/>
            </div>
          </div>
          <Link to='/information-last'>
            <div className="information-news-button">
              查底价
            </div>
          </Link>
        </div>
        {/*热门推荐*/}
        <InformationRecommend />

        {/* 广告位 */}
        <div className="information-news-detail">
          <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2009-2-11%2F200902061824471888.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664815320&t=67bde57083cab9f4f2875bd0300b14e5" alt=""/>
        </div>
      </div>
    )
  }
}

export default InformationNews
