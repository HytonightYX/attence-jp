import React,{ Suspense, lazy }  from 'react'
import { inject, observer } from 'mobx-react'
import MDatePicker from 'react-mobile-datepicker'
import * as DT from '@util/date'
import './index.less'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'
// import Dashboard from 'component/'
import moment from 'moment'


class Conf extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
		}
	}

	render() {
		return (
			<div className='g-main'>

			  <div className="m-hd">
			  	<div className="m-face">
						<img src="" alt=""/>
			  	</div>
			  	<div className="m-hd-info">
						<span className="m-name">胡思源</span>
						<span className="m-desc">开发二部 / 营业部长</span>
			  	</div>
			  </div>
				
				<div className="m-bd">
					<div className="m-info">
						<div className="m-title">
							<span>本月</span>
						</div>
						<div className="m-row">
							<div className="m-col">
								<label>勤務/残業</label>
								<div className="m-val-wrap">
                  <span className="m-mul-hd">129</span>
                  <span className="m-mul-sep">/</span>
                  <span className="m-mul-mid">12</span>
                  <span className="m-mul-unit">時</span>
								</div>
							</div>
							<div className="m-col">
								<label>残業手当</label>
								<div className="m-val-wrap">
                  <span className="m-mul-bd">3,981</span>
                  <span className="m-mul-unit">円</span>
								</div>
							</div>
						</div>
            <div className="m-row">
              <div className="m-col">
                <label>遅刻/早退</label>
                <div className="m-val-wrap">
                  <span className="m-mul-hd">1</span>
                  <span className="m-mul-sep">/</span>
                  <span className="m-mul-mid">0</span>
                  <span className="m-mul-unit">次</span>
                </div>
              </div>
              <div className="m-col">
                <label>休暇</label>
                <div className="m-val-wrap">
                  <span className="m-mul-bd">2</span>
                  <span className="m-mul-unit">次</span>
                </div>
              </div>
            </div>
					</div>

          <div className="m-info">
            <div className="m-title">
              <span>本年</span>
            </div>
            <div className="m-row">
              <div className="m-col">
                <label>勤務/残業</label>
                <div className="m-val-wrap">
                  <span className="m-mul-hd">723</span>
                  <span className="m-mul-sep">/</span>
                  <span className="m-mul-mid">43</span>
                  <span className="m-mul-unit">時</span>
                </div>
              </div>
              <div className="m-col">
                <label>残業手当</label>
                <div className="m-val-wrap">
                  <span className="m-mul-bd">24,984</span>
                  <span className="m-mul-unit">円</span>
                </div>
              </div>
            </div>
            <div className="m-row">
              <div className="m-col">
                <label>年次休暇</label>
                <div className="m-val-wrap">
                  <span className="m-mul-bd">12</span>
                  <span className="m-mul-unit">日</span>
                </div>
              </div>
              <div className="m-col">
                <label>今年休暇数</label>
                <div className="m-val-wrap">
                  <span className="m-mul-bd">5</span>
                  <span className="m-mul-unit">日</span>
                </div>
              </div>
            </div>
          </div>
				</div>
        
        <div className="m-group">
          <div className="m-menu">个人情报设置</div>
        </div>

        <div className="m-group">
          <div className="m-menu">打卡默认设置</div>
          <div className="m-menu">请假记录一览</div>
        </div>

        <div className="m-group m-last">
          <div className="m-menu">ログアウト</div>
        </div>


        


			</div>
		)
	}
}


export default Conf
