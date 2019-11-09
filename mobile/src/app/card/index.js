import React, { Suspense, lazy } from 'react'
import { inject, observer } from 'mobx-react'
import { Icon, Form, Tag, message, Input, Skeleton, Slider, Drawer, Switch, Button, TimePicker, DatePicker, Spin } from 'antd'
import getPosition from '@util/pos'
import * as DT from '@util/date'
import './index.less'
import { CARD_MARK } from '@constant/data'

import moment from 'moment'
import { computed, toJS } from 'mobx'
import { Redirect } from 'react-router-dom'


var   _timeHandle 
const {TextArea} = Input
const timeformat = 'HH:mm'
const dateFormat = 'YYYY/MM/DD'

const clock_status = {
	CLOCK_INIT: 0,
	CLOCK_IN: 1,
	CLOCK_OUT: 2,
	CLOCK_DONE: 3
}

@inject('userStore', 'clockStore')
@observer
class Card extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
			auto: false,
			repl: false,
			showDatePicker: false,
			now: DT.newTime(),
			updateRest: false,
			updateComp: false,
			rest: 1,
			comp: 'Nexs株式会社有限公司',
			loc: null,
			lat: null,
			lng: null,
		}
	}

	@computed
	get clockInfo() {
		return this.props.clockStore.clockInfo
	}

	@computed
	get clockLoading() {
		return this.props.clockStore.loading
	}

	@computed
	get currUser() {
		return this.props.userStore.currUser
	}

	async UNSAFE_componentWillMount() {
		this.doTimer()
		this.setState({loading: true})
		getPosition().then(ret => {
			this.setState({...ret})
		}).catch(err => {
			message.info(err)
			this.setState({loading: false})
		})
	}

	async componentDidMount() {
		if (this.currUser) await this.props.clockStore.setInfo(this.currUser.id)
		this.setState({loading: false})
	}

	doTimer = () => {
		_timeHandle = setTimeout(() => {
			this.setState({now: DT.newTime()})
			this.doTimer()
		}, 1000)
	}

	componentWillUnmount() {
		clearTimeout(_timeHandle)
	}

	doAuto = (checked) => {
		this.setState({auto: checked})
	}

	showRepl = () => {
		this.setState({repl: true})
	}
	closeRepl = () => {
		this.setState({repl: false})
	}

	openDatePicker = () => {
		this.setState({showDatePicker: true})
	}

	doUpdateRest = () => {
		this.setState({updateRest: true})
	}

	doRest = (v) => {
		this.setState({updateRest: false, rest: v})
	}

	doUpdateComp = () => {
		this.setState({updateComp: true})
	}

	doComp = (v) => {
		this.setState({comp: v.currentTarget.value})
	}
	doHideComp = (v) => {
		this.setState({updateComp: false})
	}

	doClockIn = async () => {
		let params = {
			lat: this.state.lat,
			lng: this.state.lng,
			loc: this.state.loc,
			uid: this.currUser.id,
			status: clock_status.CLOCK_IN
		}
		await this.props.clockStore.clockIn(params)
	}

	doClockOut = async () => {
		let params = {
			lat: this.state.lat,
			lng: this.state.lng,
			loc: this.state.loc,
			uid: this.currUser.id,
			status: clock_status.CLOCK_OUT
		}
		await this.props.clockStore.clockOut(params)
	}

	formatTS = (ts) => {
		let str = ts + ''
		return `${str.substring(8, 10)}:${str.substring(10, 12)}`
	}

	render() {
		if (!this.currUser) {
			return <Redirect to='/login'/>
		}

		let ClockBtn = () => {
			if (this.state.auto) {
				return <Button type="primary" size="large" disabled block>自动打卡中...</Button>
			} else {
				switch (this.clockInfo.clock_status) {
					case clock_status.CLOCK_INIT:
						return <Button type="primary" size="large" onClick={this.doClockIn} loading={this.clockLoading}
						               block>上班打卡</Button>
					case clock_status.CLOCK_IN:
						return <Button type="primary" size="large" onClick={this.doClockOut} loading={this.clockLoading}
						               block>下班打卡</Button>
					case clock_status.CLOCK_OUT:
						return <Button type="primary" size="large" onClick={this.doClockOut} disabled block>已下班</Button>
					default:
						return <Button type="primary" size="large" onClick={this.doClockIn} loading={this.clockLoading}
						               block>上班打卡</Button>
				}
			}
		}

		return (
			<div className='g-card'>


				<div className="m-hd">
					<div className="m-hd-info">
						<span className="m-name">{this.currUser.name}</span>
						<span className="m-day">{DT.newDate()}</span>
					</div>
					<div className="m-time">{this.state.now}</div>
				</div>
				<Spin spinning={this.state.loading} indicator={<Icon type="loading" style={{fontSize: 24}} spin/>}>
					<div className="m-body">
						<div className="m-tl m-start">
							<div className="m-mark"></div>
							<div className="m-line"></div>
							<div className="m-title-s">始业打卡</div>
							{this.clockInfo && this.clockInfo.clock_status === 0 ?
								<>
									<div className="m-time-s">
										<Icon type="clock-circle"/>09:13 
										<div className="m-face"><Icon type="camera"/></div>
									</div>
									<div className="m-addr-s"><Icon type="environment"/>尚未打卡</div>

								</> :
								<>
									<div className="m-time-s active"><Icon type="clock-circle"/>{this.formatTS(this.clockInfo.clock_in)}
									</div>
									<div className="m-addr-s"><Icon type="environment"/>{this.clockInfo.clock_in_loc}</div>
								</>
							}
						</div>
						<div className="m-tl m-end">
							<div className="m-mark"></div>
							<div className="m-title-s">终业打卡</div>
							{this.clockInfo && this.clockInfo.clock_status < 2 ?
								<>
									<div className="m-time-s">
										<Icon type="clock-circle"/>18:00
										<div className="m-face"><Icon type="camera"/></div>
									</div>
									<div className="m-addr-s"><Icon type="environment"/>尚未打卡</div>
								</> :
								<>
									<div className="m-time-s active"><Icon type="clock-circle"/>{this.formatTS(this.clockInfo.clock_out)}
									</div>
									<div className="m-addr-s"><Icon type="environment"/>{this.clockInfo.clock_out_loc}</div>
								</>
							}
						</div>
					</div>

					<div className="m-ft">
						<div className="m-tl m-company">
							<span className="m-title-s">お客様名</span>
							{!this.state.updateComp && <Tag color="red" onClick={this.doUpdateComp}>{this.state.comp}</Tag>}
							{this.state.updateComp &&
							<Input defaultValue={this.state.comp} onChange={this.doComp} onBlur={this.doHideComp}></Input>}
						</div>
						<div className="m-tl m-rest">
							<span className="m-title-s">休憩時間</span>
							{!this.state.updateRest && <Tag color="red" onClick={this.doUpdateRest}>{this.state.rest}小时</Tag>}
							{this.state.updateRest &&
							<Slider marks={CARD_MARK} min={0} max={7} defaultValue={this.state.rest} onAfterChange={this.doRest}/>}
						</div>

					</div>

					<div className="m-fun">
						<div className="m-slide" onClick={this.showRepl}>补卡</div>
						<span>自動</span>
						<Switch onChange={this.doAuto}/>
					</div>

					<ClockBtn/>

				</Spin>

				<Drawer
					className="g-drawer"
					title="补卡申请单"
					placement="top"
					closable={false}
					onClose={this.closeRepl}
					visible={this.state.repl}
					height={540}
					headerStyle={{background: '#3d74aa'}}
				>
					<div className="m-repl-wrap">
						<div className="m-repl-title">
							<DatePicker defaultValue={DT.newDate()} format={DT.DATE_FORMAT}/>
						</div>
						<div className="m-repl-row">
							<TimePicker className="m-time" defaultValue={DT.newDate()} format={DT.TIME_FORMAT_S} block/>
							<span className="m-bk">-</span>
							<TimePicker className="m-time" defaultValue={DT.newDate()} format={DT.TIME_FORMAT_S} block/>
						</div>
						<div className="m-repl-rowc">
							<label>上班地点</label>
							<Input suffix={<Icon type="environment" style={{color: '#bbb'}}/>}/>
						</div>
						<div className="m-repl-rowc">
							<label>下班地点</label>
							<Input suffix={<Icon type="environment" style={{color: '#bbb'}}/>}/>
						</div>
						<div className="m-repl-rowc">
							<label>补卡原因</label>
							<TextArea rows={4}/>
						</div>
						<div className="m-repl-fun">
							<Button type="primary" size="large" block>补卡</Button>
						</div>

					</div>
				</Drawer>


			</div>
		)
	}
}


export default Card
