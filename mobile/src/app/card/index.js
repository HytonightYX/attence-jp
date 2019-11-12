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
import 'react-html5-camera-photo/build/css/index.css'
import WebCamera from '../../component/WebCamera'
import axios from 'axios'
import * as urls from '@constant/urls'

var _timeHandle
const {TextArea} = Input
const timeformat = 'HH:mm'
const dateFormat = 'YYYY/MM/DD'

const clock_status = {
	CLOCK_INIT: 0,
	CLOCK_IN: 1,
	CLOCK_OUT: 2,
	CLOCK_DONE: 3
}

@inject('userStore', 'clockStore', 'confStore')
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

			rest: 0,
			comp: '',

			restSche: 1,
			compSche: 'aaa',
			clockInSche: '9:00',
			clockOutSche: '17:00',

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

	@computed
	get faceCheckStatus() {
		return this.props.clockStore.faceCheckStatus
	}

	async UNSAFE_componentWillMount() {
		this.doTimer()
		this.setState({loading: true})
	}

	async componentDidMount() {
		if (this.currUser) {
			await this.props.clockStore.setInfo(this.currUser.id)
			this.props.confStore.loadCardSche(this.currUser.id)
				.then(ret => {
					console.log('ret', ret)
					this.setState({...ret})
				})
		}

		getPosition().then(ret => {
			console.log('ret', ret)
			this.setState({...ret})
		}).catch(err => {
			message.info(err)
		})

		this.setState({loading: false})
	}

	doTimer = () => {
		_timeHandle = setTimeout(() => {
			this.setState({now: DT.newTime()})
			this.doTimer()
		}, 1000)
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

	showFaceCheck = () => {
		this.setState({showFaceCheck: true})
	}

	closeFaceCheck = () => {
		this.props.clockStore.setFaceCheckStatus('false')
		this.setState({showFaceCheck: false})
	}

	beforeClock = async () => {
		this.props.clockStore.setFaceCheckStatus('capturing')
	}

	doClockIn = async () => {
		let params = {
			lat: this.state.lat,
			lng: this.state.lng,
			loc: this.state.loc,
			uid: this.currUser.id,
			status: clock_status.CLOCK_IN
		}
		this.props.clockStore.clockIn(params)
			.then(r => console.log(r.msg))
	}

	doClockOut = async () => {
		let params = {
			lat: this.state.lat,
			lng: this.state.lng,
			loc: this.state.loc,
			uid: this.currUser.id,
			status: clock_status.CLOCK_OUT,
			rest_time: this.state.rest,
			company: this.state.comp
		}

		if (this.faceCheckStatus === 'pass') {
			this.props.clockStore.clockOut(params)
				.then(r => console.log(r.msg))
		}

		message.success('下班打卡')
	}

	formatTS = (ts) => {
		let str = ts + ''
		return `${str.substring(8, 10)}:${str.substring(10, 12)}`
	}

	onTakePhoto = (dataUri) => {
		// Do stuff with the dataUri photo...
		console.log('takePhoto', dataUri)
	}

	render() {
		const {rest, comp, clockInSche, clockOutSche} = this.state

		if (!this.currUser) {
			return <Redirect to='/login'/>
		}

		const uploadFace = async file => {

			this.props.clockStore.setFaceCheckStatus('uploading')

			const r = await axios.post(urls.API_USER_FACE_CHECK)
			if (r && r.status === 200 && r.data.code === 200) {
				console.log(r.data)
				this.props.clockStore.setFaceCheckStatus('pass')
				if (this.clockInfo.clock_status === 0) {
					// 进行上班打卡
					this.doClockIn()
				} else if (this.clockInfo.clock_status === 1) {
					// 进行下班打卡
					this.doClockOut()
				}
			}
		}

		const ClockBtn = () => {
			if (this.state.auto) {
				return <Button type="primary" size="large" disabled block>自动打卡中...</Button>
			} else {
				switch (this.clockInfo.clock_status) {
					case clock_status.CLOCK_OUT:
						return <Button type="primary" size="large" disabled block>已下班</Button>
					default:
						return <Button type="primary" size="large" onClick={this.beforeClock} loading={this.clockLoading}
						               block>打卡验证</Button>
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
							<div className="m-mark"/>
							<div className="m-line"/>
							<div className="m-title-s">始业打卡</div>
							{this.clockInfo && this.clockInfo.clock_status === 0 ?
								<>
									<div className="m-time-s">
										<Icon type="clock-circle"/>{clockInSche}
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
							<div className="m-mark"/>
							<div className="m-title-s">终业打卡</div>
							{this.clockInfo && this.clockInfo.clock_status < 2 ?
								<>
									<div className="m-time-s">
										<Icon type="clock-circle"/>{clockOutSche}
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
							{!this.state.updateComp && <Tag color="red" onClick={this.doUpdateComp}>{comp}</Tag>}
							{this.state.updateComp &&
							<Input defaultValue={comp} onChange={this.doComp} onBlur={this.doHideComp}/>}
						</div>
						<div className="m-tl m-rest">
							<span className="m-title-s">休憩時間</span>
							{!this.state.updateRest && <Tag color="red" onClick={this.doUpdateRest}>{rest} 小时</Tag>}
							{this.state.updateRest &&
							<Slider marks={CARD_MARK} min={0} max={7} defaultValue={rest} onAfterChange={this.doRest}/>}
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
					destroyOnClose={true}
				>
					<div className="m-repl-wrap">
						<div className="m-repl-title">
							<DatePicker defaultValue={DT.now()} format={DT.DATE_FORMAT}/>
						</div>
						<div className="m-repl-row">
							<TimePicker className="m-time" defaultValue={DT.now()} format={DT.TIME_FORMAT_S} block/>
							<span className="m-bk">-</span>
							<TimePicker className="m-time" defaultValue={DT.now()} format={DT.TIME_FORMAT_S} block/>
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

				<Drawer
					className="g-drawer face-drawer"
					title="人脸验证"
					placement="top"
					closable={false}
					onClose={this.closeFaceCheck}
					visible={this.faceCheckStatus !== 'false' && this.faceCheckStatus !== 'pass'}
					height={600}
					headerStyle={{background: '#3d74aa'}}
					destroyOnClose={true}
				>
					<Spin
						spinning={
							this.faceCheckStatus === 'checking' ||
							this.faceCheckStatus === 'uploading'
						}
					>
						<WebCamera sendFile={uploadFace} btnContent={this.clockInfo.clock_status === 0 ? '上班打卡' : '下班打卡'}/>
					</Spin>
				</Drawer>
			</div>
		)
	}
}


export default Card
