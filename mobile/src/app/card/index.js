import React,{ Suspense, lazy }  from 'react'
import { inject, observer } from 'mobx-react'
import { Icon, Form, Tag, Input, Drawer, Switch, Button, TimePicker, DatePicker  } from 'antd'

import * as DT from 'util/date'
import './index.less'

import moment from 'moment'

const { TextArea } = Input;
const format = 'HH:mm';
const dateFormat = 'YYYY/MM/DD';
const now = moment(new Date(), dateFormat)


class Card extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
			auto: false,
			repl: false,
			showDatePicker: false,
		}
	}

	doAuto=(checked)=>{
		this.setState({auto:checked})
	}

	showRepl=()=>{
		this.setState({ repl: true });
	}
	closeRepl=()=>{
		this.setState({ repl: false });
	}

	openDatePicker = () => {
		this.setState({
			showDatePicker: true
		})
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
					<div className="m-tl m-start">
						<div className="m-mark"></div>
						<div className="m-line"></div>
						<div className="m-title-s">始业打卡</div>
						<div className="m-time-s"><Icon type="clock-circle" />09:13</div>
						<div className="m-addr-s"><Icon type="environment" />东京新宿三丁目xxx大厦19-4-443</div>
					</div>
					<div className="m-tl m-end">
						<div className="m-mark"></div>
						<div className="m-title-s">终业打卡</div>
						<div className="m-time-s"><Icon type="clock-circle" />18:00</div>
						<div className="m-addr-s"><Icon type="environment" />东京新宿三丁目xxx大厦19-4-443</div>
					</div>
				</div>

				<div className="m-ft">
					<div className="m-tl m-rest">
						<span className="m-title-s">休憩時間</span>
						<Tag color="red">1小时</Tag>
					</div>
					<div className="m-tl m-company">
						<span className="m-title-s">お客様名</span>
						<Tag color="red">Nexs株式会社有限公司</Tag>
					</div>
				</div>

				<div className="m-fun">
					<div className="m-slide" onClick={this.showRepl}>补卡</div>
					<span>自動</span>
					<Switch onChange={this.doAuto}/>
				</div>
				
				{!this.state.auto && <Button type="primary" size="large"  block>下班打卡</Button>}
				{this.state.auto && <Button type="primary" size="large" disabled block>下班打卡</Button>}

				<Drawer
					className="g-drawer"
	        title="补卡申请单"
	        placement="top"
	        closable={false}
	        onClose={this.closeRepl}
	        visible={this.state.repl}
	        height={540}
	        headerStyle={{background:'#3d74aa'}}
	      >
	        <div className="m-repl-wrap">
						<div className="m-repl-title">
							<DatePicker defaultValue={now} format={dateFormat} />
						</div>
						<div className="m-repl-row">
							<TimePicker className="m-time" defaultValue={now} format={format} block/>
							<span className="m-bk">-</span>
							<TimePicker className="m-time" defaultValue={now} format={format} block/>
						</div>
						<div className="m-repl-rowc">
							<label>上班地点</label>
							<Input suffix={ <Icon type="environment"  style={{ color: '#bbb' }} /> }/>
						</div>
						<div className="m-repl-rowc">
							<label>下班地点</label>
							<Input suffix={ <Icon type="environment"  style={{ color: '#bbb' }} /> }/>
						</div>
						<div className="m-repl-rowc">
							<label>补卡原因</label>
							<TextArea rows={4} />
						</div>
						<div className="m-repl-fun">
							<Button type="primary" size="large"  block>补卡</Button>
						</div>
						
	        </div>
	      </Drawer>


			</div>
		)
	}
}


export default Card
