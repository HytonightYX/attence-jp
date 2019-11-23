import React,{ Suspense, lazy }  from 'react'
import { inject, observer } from 'mobx-react'
import { Icon, Tag, message, Calendar, Input, Result, Modal, Skeleton, Button, TimePicker, DatePicker, Spin } from 'antd'
import './index.less'
import * as DT from '@util/date'
import { toJS } from "mobx";
import get from '@util/getValue'
import MobileSelect from 'mobile-select'
import MDatePicker from 'react-mobile-datepicker'
import moment from 'moment'
import {LEAVE_TYPE} from '@constant/data'


var caluLine =(line)=>{
  let m = moment(new Date())
  // let m = moment({ year :2019, month :2, day :5})
  let date  = m.date()
  let day   = m.day()
  let month = m.month()
  let year  = m.year()
  let mf = moment({ year :year, month :month, day :1})  // 每月第一天
  let mday = mf.day() //每月第一天是星期几
  let dd = date+mday-8 //剩余天
  if (dd%7 == 0) {
    line = dd/7 
  }else{
    line = parseInt(dd/7) + 1
  }
  return line
}

@inject('userStore','calStore')
@observer
class Cal extends React.Component {
	constructor(props) {
		super(props)
    this.date = new Date()
		this.state = {
			loading_cal: false,
      loading_del: false,
      visible: false,
      mini: false,
      cardList: [],
      card: [],
      leave: [],
      leavd: [],
		}
	}

  async componentDidMount() {
    let year  = moment(new Date()).year()
    let month = moment(new Date()).month()+1
    let date  = moment(new Date()).date()
    let from  = parseInt(`${year}${month}00000000`)
    let to    = parseInt(`${year}${month}31000000`)
    let params = {
      uid: this.props.userStore.currUser.id,
      from: from,
      to: to,
    }
    this.setState({ loading_cal: true })
    let r = await this.props.calStore.getCardByMonth(params)
    this.calcLeaveDays(r.data.data.leaveList)
    this.setState({ loading_cal: false, cardList: r.data.data.cardList, leaveList: r.data.data.leaveList})

    this.doDetail(null, date)
  }

  calcLeaveDays = (list)=>{
    list.map((item,index)=>{
      if (DT.moreThanDay(item.from,item.to)) {
        item.type = 'd'
      }else{
        item.type = 'h'
      }
      item.day=[]
      let _from = moment(item.from).date()
      let _to = moment(item.to).date()
      for(let i=_from;i<_to;i++) {
        item.day.push(i)
      }
    })
    // console.log('list..'+ list)
  }

  dateCellRender=(e)=>{
    let cur_month = moment(new Date()).month()+1
    let cur_date   = moment(new Date()).date()
    let month = e.month()+1
    if (month!==cur_month) return

    let date = e.date()
    // if (date > cur_date) return

    let {cardList, leaveList} = this.state
    if (cardList.length==0) return
    let ret, status

    if (date <= cur_date) {
      status = "miss"
      ret = <div className="m-card m-card-miss" onClick={this.doDetail.bind(this,null,e.date())}></div>
    }else{
      status = "blank"
      ret = <div className="m-card m-card-blank" onClick={this.doDetail.bind(this,null,e.date())}></div>
    }
 
    for(let i=0;i<cardList.length;i++) {
      let d = parseInt(cardList[i].clock_date.toString().substr(6, 2))
      if ((date==d)&&(cardList[i].clock_status==2)) {
        status= "ok"
        return <div className="m-card m-card-ok" onClick={this.doDetail.bind(this,cardList[i].id,e.date())}></div>
      }
    }

    for(let i=0;i<leaveList.length;i++) {
      for(let j=0;j<leaveList[i].day.length;j++) {
        if ((leaveList[i].day[j]==date)&&(leaveList[i].type=='h')) {
          // status += ' m-leave-hour'
          if (status=="miss") {
            return <div className="m-card m-card-miss m-leave-hour" onClick={this.doDetail.bind(this,cardList[i].id,e.date())}></div>
          }else{
            return <div className="m-card m-card-ok m-leave-hour" onClick={this.doDetail.bind(this,cardList[i].id,e.date())}></div>
          }
        }else if ((leaveList[i].day[j]==date)&&(leaveList[i].type=='d')) {
          return <div className="m-card m-leave-day" onClick={this.doDetail.bind(this,cardList[i].id,e.date())}></div>
        }
      }
    }

    return ret
  }

  doDetail= async(id,day)=>{
    let year  = moment(new Date()).year()
    let month = moment(new Date()).month()+1
    let date  = parseInt(`${year}${month}${day}000000`)

    this.setState({ loading_del: true })
    let r = await this.props.calStore.getCardByDay({day:date, uid: this.props.userStore.currUser.id })
    // console.log(r)
    this.setState({ 
      loading_del: false, 
      card: r.data.data.card, 
      leave: r.data.data.leave,
      leavd: r.data.data.leavd,
    })
  }

  doSlide=()=>{
    this.setState({mini: !this.state.mini})
  }


	render() {
    let { mini,card,leave,leavd } = this.state

    let line = caluLine()
    let calanderCls = mini?`m-calendar m-mini m-mini-l${line}`:`m-calendar`

		return (
			<div className='g-cal'>
        <div className="m-cal">
          <Skeleton active loading={this.state.loading_cal}>
            <div className={calanderCls}>
            <Calendar fullscreen={false} dateCellRender={this.dateCellRender}/>
            <div className="m-slide" onClick={this.doSlide}>
              { mini && <Icon type="down" /> }
              { !mini && <Icon type="up" /> }
            </div>
            </div>
          </Skeleton>

          <Skeleton active loading={this.state.loading_del}>
            <div className="m-info-card">
              {card.map((item,index)=>
                <div className="m-card-item" key={index}>
                  <div className="m-card-tl">
                    <label>お客様名: {item.company}</label>
                    <span>休憩時間: {item.rest_time}</span>
                  </div>
                  <div className="m-card-time">
                    <div className="m-mark"></div>
                    <div className="m-line"></div>
                    <label>
                      <Icon type="clock-circle"/>
                      {DT.formatCardTime(item.clock_in)}
                    </label>
                    <span>
                      <Icon type="environment"/>
                      {item.clock_in_loc}
                    </span>
                  </div>
                  <div className="m-card-time">
                    <div className="m-mark"></div>
                    <label>
                      <Icon type="clock-circle"/>
                      {DT.formatCardTime(item.clock_out)}
                    </label>
                    <span>
                      <Icon type="environment"/>
                      {item.clock_out_loc}
                    </span>
                  </div>
                </div>
                )}
            </div>

            <div className="m-info-leave">
              
              {leave.map((item,index)=>
                <div className="m-leave-item" key={index}>
                  <div className={`m-leave-tl m-leave-tl${item.status}`}>
                    <div className="m-type">{LEAVE_TYPE[item.type]}</div>
                    <div className="m-time">
                      {DT.formatLeaveTime(item.from)} - {DT.formatLeaveTime(item.to)}
                    </div>
                    <div className="m-dur">
                      {item.status==0 && <Tag color="red">待审批</Tag> }
                      {item.status==1 && <Tag color="red">已通过</Tag> }
                    </div>
                  </div>
                  <div className="m-reason">
                    {item.reason}
                  </div>
                  <div className="m-img"></div>
                </div>
                )}
            </div>

            <div className="m-info-leavd">
              
              {leavd.map((item,index)=>
                <div className="m-leavd-item" key={index}>
                  <div className={`m-leavd-tl`}>
                    <div className="m-type">{LEAVE_TYPE[item.type]}</div>
                    <div className="m-time">
                      {DT.formatLeaveTime(item.from)} - {DT.formatLeaveTime(item.to)}
                    </div>
                  </div>
                </div>
                )}
            </div>
          </Skeleton>

          <div className="m-submit">
            <Button type="primary" icon="schedule" block>提交月报</Button>
          </div>
        </div>
			</div>
		)
	}
}


export default Cal
