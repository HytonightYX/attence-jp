import React from 'react'
import { inject, observer } from 'mobx-react'
import { Icon, Tag, message, Input, Modal, Slider, Drawer, Button, TimePicker, DatePicker, Spin } from 'antd'
import { computed, toJS } from 'mobx'
import { Redirect } from 'react-router-dom'
import 'react-html5-camera-photo/build/css/index.css'

import getPosition from '@util/pos'
import * as DT from '@util/date'
import EXIF from '@util/small-exif'
import fileToBlobScaled from '@util/fileToBlobScaled'
import { CLOCK_STATUS as clock_status, cardMinute } from '@constant/data'

import * as urls from '@constant/urls'
import './index.less'

var _timeHandle
const {TextArea} = Input
const {confirm} = Modal

@inject('userStore', 'clockStore', 'confStore')
@observer
class Card extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
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

			clockInImg: null,
			clockOutImg: null
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

	async componentDidMount() {
		this.setState({loading: true})

		if (this.currUser) {

			await this.props.clockStore.setInfo(this.currUser.id)
			let sche = await this.props.confStore.loadCardSche({uid: this.currUser.id})
			console.log('========sche==========', sche)
			this.setState({...sche})

			if (sche.uid !== 0) {
				this.doTimer()
			} else {
				const history = this.props.history
				Modal.warning({
					title: '请先进行默认打卡设置',
					content: '进入"设置"，"打卡默认设置"即可',
					onOk() {
						console.log(history.push('/cset'))
					},
				})
			}
		}

		if (this.clockInfo.clock_status >= clock_status.CLOCK_IN) {
			this.setState({clockInImg: urls.HOST_IMG + `upload/face/${this.clockInfo.uid}_clock_in.jpg`})
		}

		if (this.clockInfo.clock_status >= clock_status.CLOCK_OUT) {
			this.setState({clockOutImg: urls.HOST_IMG + `upload/face/${this.clockInfo.uid}_clock_out.jpg`})
		}

		getPosition().then(ret => {
			console.log('位置信息：', ret)
			this.setState({...ret})
		}).catch(err => {
			message.info(err)
		})
		// 	.finally(() => {
		// 	this.setState({loading: false})
		// })

		this.setState({loading: false})
	}

	doTimer = () => {
		_timeHandle = setTimeout(() => {
			this.setState({now: DT.newTime()})
			this.doTimer()
		}, 1000)
	}

	showRepl = () => {
		this.setState({repl: true})
	}

	closeRepl = () => {
		this.setState({repl: false})
	}

	// doUpdateRest = () => {
	// 	this.setState({updateRest: true})
	// }

	// doRest = (v) => {
	// 	this.setState({updateRest: false, rest: v})
	// }

	// doUpdateComp = () => {
	// 	this.setState({updateComp: true})
	// }

	// doComp = (v) => {
	// 	this.setState({comp: v.currentTarget.value})
	// }

	// doHideComp = (v) => {
	// 	this.setState({updateComp: false})
	// }

	doClockIn = async () => {
		let params = {
			lat: this.state.lat,
			lng: this.state.lng,
			loc: this.state.loc,
			uid: this.currUser.id,
			status: clock_status.CLOCK_IN
		}
		this.setState({loading: true})
		this.props.clockStore.clockIn(params)
			.then(r => {
				message.success(r.msg, 0.7)
			})
			.finally(() => {
				this.props.clockStore.setFaceCheckStatus('before')
				this.setState({loading: false})
			})
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
		this.setState({loading: true})
		if (this.faceCheckStatus === 'pass') {
			this.props.clockStore.clockOut(params)
				.then(r => message.success(r.msg, 0.7))
				.finally(() => this.setState({loading: false}))
		}
	}

	formatTS = (ts) => {
		let str = ts + ''
		return `${str.substring(8, 10)}:${str.substring(10, 12)}`
	}

	doUploadFace = async (e) => {
		if (e.target.files.length > 0) {
			const faceFile = e.target.files[0]
			let that = this
			let formData = new FormData()
			let filename = `${this.clockInfo.uid}`
			let orientation = -1

			if (this.clockInfo.clock_status === clock_status.CLOCK_INIT) {
				filename += '_clock_in.jpg'
			} else {
				filename += '_clock_out.jpg'
			}

			EXIF.getData(faceFile, async function () {
				orientation = await EXIF.getTag(this, 'Orientation')

				// 等比例缩放图片
				const blob = await fileToBlobScaled(faceFile, 1000, 1000, 0.7, orientation)

				// 发送现有图片文件
				formData.append('face', blob, filename)
				// 当前用户注册时的标准头像的路径
				formData.append('userFace', that.currUser.face)

				that.props.clockStore.faceCheck(formData)
					.then(ret => {
						if (ret.code === 200) {
							message.success('人脸验证成功')
							if (that.clockInfo.clock_status === clock_status.CLOCK_INIT) {
								that.setState({clockInImg: urls.HOST_IMG + ret.data.path})
							} else {
								that.setState({clockOutImg: urls.HOST_IMG + ret.data.path})
							}
						} else {
							message.error('人脸验证失败，请重试', 0.7)
						}
					})
			})
		}
	}

	render() {
		const {uid, rest, comp, clockInSche, clockOutSche} = this.state

		if (!this.currUser) {
			return <Redirect to='/login'/>
		}

		const ClockBtn = () => {

			if (this.clockInfo.clock_status === clock_status.CLOCK_OUT) {
				return <Button type="primary" size="large" disabled block>已下班</Button>
			}

			if (this.faceCheckStatus === 'pass') {
				switch (this.clockInfo.clock_status) {
					case clock_status.CLOCK_INIT:
						return <Button type="primary" size="large" onClick={this.doClockIn} block>上班打卡</Button>
					case clock_status.CLOCK_IN:
						return <Button type="primary" size="large" onClick={this.doClockOut} block>下班打卡</Button>
				}
			}

			return <Button type="primary" size="large" disabled block>尚未人脸验证</Button>
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

				<Spin
					spinning={this.state.loading || this.faceCheckStatus === 'uploading'}
					indicator={<Icon type="loading" style={{fontSize: 24}} spin/>}
				>
					<div className="m-body">
						<div className="m-tl m-start">
							<div className="m-mark"/>
							<div className="m-line"/>
							<div className="m-title-s">始业打卡</div>
							{this.clockInfo && this.clockInfo.clock_status === 0 ?
								<>
									<div className="m-time-s">
										<Icon type="clock-circle"/>{clockInSche}
										<div className="m-face">
											{this.state.clockInImg ?
												<img src={this.state.clockInImg} className="m-face-img" alt=""/> :
												<label htmlFor="clock-in-face-upload"><Icon type="camera"/></label>
											}
										</div>
										<input id="clock-in-face-upload" type="file" accept="image/*" capture="user"
										       onChange={this.doUploadFace}/>
									</div>
									<div className="m-addr-s"><Icon type="environment"/>尚未打卡</div>
								</> :
								<>
									<div className="m-time-s active"><Icon type="clock-circle"/>{this.formatTS(this.clockInfo.clock_in)}
										<div className="m-face">
											<img src={this.state.clockInImg} className="m-face-img" alt=""/>
										</div>
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
										<div className="m-face"
										     onClick={() => {
											     if (this.clockInfo.clock_status === clock_status.CLOCK_INIT)
												     message.info('请先进行上班打卡')
										     }
										     }
										>
											{this.state.clockOutImg ?
												<img src={this.state.clockOutImg} className="m-face-img" alt=""/> :
												<label htmlFor="clock-out-face-upload"><Icon type="camera"/></label>
											}
										</div>
										{
											this.clockInfo.clock_status === clock_status.CLOCK_INIT ? null :
												<input id="clock-out-face-upload" type="file" accept="image/*" capture="user"
												       onChange={this.doUploadFace}/>
										}
									</div>
									<div className="m-addr-s"><Icon type="environment"/>尚未打卡</div>
								</> :
								<>
									<div className="m-time-s active"><Icon type="clock-circle"/>{this.formatTS(this.clockInfo.clock_out)}
										<div className="m-face">
											<img src={this.state.clockOutImg} className="m-face-img" alt=""/>
										</div>
									</div>
									<div className="m-addr-s"><Icon type="environment"/>{this.clockInfo.clock_out_loc}</div>
								</>
							}
						</div>
					</div>

					<div className="m-ft">
						<div className="m-tl m-company">
							<span className="m-title-s">お客様名</span>
							<span><Tag color="red">{comp}</Tag></span>
						</div>
						<div className="m-tl m-rest">
							<span className="m-title-s">休憩時間</span>
							<span><Tag color="red">{cardMinute(rest)}</Tag></span>
						</div>
					</div>

					<div className="m-fun">
						<div className="m-slide" onClick={this.showRepl}>补卡</div>
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
			</div>
		)
	}
}

export default Card
