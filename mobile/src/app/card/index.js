import React,{ Suspense, lazy }  from 'react'
import { inject, observer } from 'mobx-react'
import { Icon, Form, Tag, Input, Button, Divider } from 'antd'

import * as DT from 'util/date'
import './index.less'

import moment from 'moment'


class Card extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
		}
	}

	render() {
		return (
			<div className='g-card'>
				<div className="m-hd">
					<div className="m-hd-info">
						<span className="m-name">胡思源</span>
						<span className="m-day">2019年11月05日</span>
					</div>
					<div className="m-time">09:38:21</div>
				</div>

				<div className="m-body">
					<div className="m-start">
						<div className="m-mark"></div>
						<div className="m-line"></div>
						<div className="m-title">始业打卡</div>
						<div className="m-time-s"><Icon type="clock-circle" />09:13</div>
						<div className="m-addr-s"><Icon type="environment" />东京新宿三丁目xxx大厦19-4-443</div>
					</div>
					<div className="m-end">
						<div className="m-mark"></div>
						<div className="m-title">终业打卡</div>
						<div className="m-time-s"><Icon type="clock-circle" />18:00</div>
						<div className="m-addr-s"><Icon type="environment" />东京新宿三丁目xxx大厦19-4-443</div>
					</div>
				</div>

				<div className="m-ft">
					<div className="m-rest">
						<span className="m-title">休憩時間</span>
						<Tag color="red">1小时</Tag>
					</div>
					<div className="m-company">
						<span className="m-title">お客様名</span>
						<Tag color="red">Nexs株式会社有限公司</Tag>
					</div>
				</div>

				<Button type="primary" size="large"  block>下班打卡</Button>

			</div>
		)
	}
}


export default Card
