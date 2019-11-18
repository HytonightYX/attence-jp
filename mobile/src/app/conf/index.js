import React,{ Suspense, lazy }  from 'react'
import { inject, observer } from 'mobx-react'
import './index.less'
import { toJS } from "mobx";
import get from '@util/getValue'

@inject('userStore')
@observer
class Conf extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
		}
    console.log(JSON.stringify(this.props.userStore.currUser))
	}

  doLogout=()=>{
    this.props.userStore.logout()
    window.location.replace(`/`)
  }

  doCardSet=()=>{
    window.location.replace(`/#cset`)
  }

	render() {

    let user = this.props.userStore.currUser
    let name = get(user,'name','')
    let dept = get(user,'dept','')
    let posi = get(user,'position','')

		return (
			<div className='g-main'>

			  <div className="m-hd">
			  	<div className="m-face">
						<img src="" alt=""/>
			  	</div>
			  	<div className="m-hd-info">
						<span className="m-name">{name}</span>
						<span className="m-desc">{dept} / {posi}</span>
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
								<label>残業次数</label>
								<div className="m-val-wrap">
                  <span className="m-mul-bd">6</span>
                  <span className="m-mul-unit">次</span>
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
                <label>残業次数</label>
                <div className="m-val-wrap">
                  <span className="m-mul-bd">24</span>
                  <span className="m-mul-unit">次</span>
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
          <div className="m-menu" onClick={this.doCardSet}>打卡默认设置</div>
          <div className="m-menu">请假记录一览</div>
        </div>

        <div className="m-group m-last">
          <div className="m-menu" onClick={this.doLogout}>ログアウト</div>
        </div>
			</div>
		)
	}
}


export default Conf
