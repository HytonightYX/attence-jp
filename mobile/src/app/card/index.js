import React,{ Suspense, lazy }  from 'react'
import { inject, observer } from 'mobx-react'
import { Icon, Form, Tag, message, Input,Skeleton, Slider, Drawer, Switch, Button, TimePicker, DatePicker  } from 'antd'
import getPosition from 'util/pos'
import * as DT from 'util/date'
import './index.less'

import moment from 'moment'

const { TextArea } = Input;
const format = 'HH:mm';
const dateFormat = 'YYYY/MM/DD';
const now = moment(new Date(), dateFormat)
const marks = {
  1: '1小时',
  2: '2小时',
  3: '3小时',
  4: '4小时',
};

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
		}
	}

	async UNSAFE_componentWillMount() {
    this.doTimer()
    this.setState({ loading: true })
    getPosition().then(ret => {
	    this.setState({ loading: false, loc:ret  })
    }).catch(err => {
      message.info(err)
      this.setState({ loading: false })
    })
  }

  doTimer=()=>{
  	setTimeout(()=>{
    	this.setState({now: DT.newTime()})
    	this.doTimer()
    },1000)
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
		this.setState({ showDatePicker: true })
	}

	doUpdateRest=()=>{
		this.setState({ updateRest: true })
	}

	doRest=(v)=>{
		this.setState({ updateRest: false, rest:v })
	}

	doUpdateComp=()=>{
		this.setState({ updateComp: true })
	}

	doComp=(v)=>{
		this.setState({ comp:v.currentTarget.value })
	}
	doHideComp=(v)=>{
		this.setState({ updateComp:false })
	}

	render() {
		return (
			<div className='g-card'>
				<Skeleton active loading={this.state.loading}>

				<div className="m-hd">
					<div className="m-hd-info">
						<span className="m-name">xxx</span>
						<span className="m-day">{DT.newDate()}</span>
					</div>
					<div className="m-time">{this.state.now}</div>
				</div>

				<div className="m-body">
					<div className="m-tl m-start">
						<div className="m-mark"></div>
						<div className="m-line"></div>
						<div className="m-title-s">始业打卡</div>
						<div className="m-time-s"><Icon type="clock-circle" />09:13</div>
						<div className="m-addr-s"><Icon type="environment" />{this.state.loc}</div>
					</div>
					<div className="m-tl m-end">
						<div className="m-mark"></div>
						<div className="m-title-s">终业打卡</div>
						<div className="m-time-s"><Icon type="clock-circle" />18:00</div>
						<div className="m-addr-s"><Icon type="environment" />{this.state.loc}</div>
					</div>
				</div>

				<div className="m-ft">
					<div className="m-tl m-company">
						<span className="m-title-s">お客様名</span>
						{!this.state.updateComp &&  <Tag color="red" onClick={this.doUpdateComp}>{this.state.comp}</Tag> }
						{this.state.updateComp &&  <Input defaultValue={this.state.comp} onChange={this.doComp} onBlur={this.doHideComp}></Input> }
					</div>
					<div className="m-tl m-rest">
						<span className="m-title-s">休憩時間</span>
						{!this.state.updateRest &&  <Tag color="red" onClick={this.doUpdateRest}>{this.state.rest}小时</Tag> }
						{this.state.updateRest &&  <Slider marks={marks} min={1} max={4} defaultValue={this.state.rest} onAfterChange={this.doRest}/> }
					</div>
					
				</div>

				<div className="m-fun">
					<div className="m-slide" onClick={this.showRepl}>补卡</div>
					<span>自動</span>
					<Switch onChange={this.doAuto}/>
				</div>
				
				{!this.state.auto && <Button type="primary" size="large"  block>下班打卡</Button>}
				{this.state.auto && <Button type="primary" size="large" disabled block>下班打卡</Button>}

				
				</Skeleton>
					
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
