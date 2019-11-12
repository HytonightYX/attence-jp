import React,{ Suspense, lazy }  from 'react'
import { inject, observer } from 'mobx-react'
import { Icon, Tag, message, Input, Skeleton, Button, TimePicker, DatePicker, Spin } from 'antd'
import './index.less'
import * as DT from '@util/date'
import { toJS } from "mobx";
import get from '@util/getValue'
import MobileSelect from 'mobile-select'
import MDatePicker from 'react-mobile-datepicker'
import moment from 'moment'

const {TextArea} = Input




@inject('userStore','leaveStore')
@observer
class Leave extends React.Component {
	constructor(props) {
		super(props)
    this.date = new Date()
		this.state = {
			loading: false,
      restType: '请选择',
      fromdate: '请选择',
      todate:   '请选择',
      durDays:  '',
      imgList: [],
      showDatePicker: false,
		}

    
    console.log(JSON.stringify(this.props.userStore.currUser))
	}

  componentDidMount() {
    var restTypeSel = new MobileSelect({
        trigger: '#day',
        title: '单项选择',
        wheels: [{data:['旷工','病假','事欠','有休','代休','其他']}],
        position:[2]
    });
  }

  openDate = (type) => {
    // let d = (type==='from')?this.state.fromdate:this.state.todate
    // console.log(d)
    // this.date = new Date(d)
    // console.log(a)
    this.setState({ showDatePicker: true, type: type })
  }

  closeDate = () => {
    this.setState({ showDatePicker: false })
  }

  selectDate = (time) => {
    if (this.state.type === 'from') {
      
      let durDays = DT.durationDays(time,time)
      this.setState({
        fromdate: moment(time).format('YYYY-MM-DD'),
        todate:   moment(time).format('YYYY-MM-DD'),
        durDays: durDays,
        showDatePicker: false,
      })
    } else {
      let durDays = DT.durationDays(this.state.fromdate,time)
      this.setState({
        todate: moment(time).format('YYYY-MM-DD'),
        durDays: durDays,
        showDatePicker: false,
      })
    }
  }

  doReason=(e)=>{
    this.setState({ reason: e.currentTarget.value })
  }

  doUploadImg = async (e)=>{
    // console.log()
    let file = e.currentTarget.files[0]
    this.setState({ loading: true})
    let r = await this.props.leaveStore.uploadFile(file)
    let { imgList } = this.state
    imgList.push(r.data.data.path)
    this.setState({ loading: false, imgList: imgList })
  }

  doDelImg =(index)=>{
    let { imgList } = this.state
    delete imgList[index]
    this.setState({ imgList: imgList })
  }



	render() {

    let {imgList} = this.state
    let prefix = 'http://localhost:8080/'

		return (
			<div className='g-leave'>
        <div className="m-group">
          <div className="m-row">
            <span>休假类型</span>
            <div className="m-info">
              <span id="day">{this.state.restType}</span>
              <Icon type="right" />
            </div>
          </div>
        </div>

        <div className="m-group m-rest-date">
          <div className="m-row"  onClick={this.openDate.bind(this,'from')}>
            <span>开始日期</span>
            <div className="m-info">
              <span id="day">{this.state.fromdate}</span>
              <Icon type="right" />
            </div>
          </div>
          <div className="m-row"  onClick={this.openDate.bind(this,'to')}>
            <span>结束日期</span>
            <div className="m-info">
              <span id="day">{this.state.todate}</span>
              <Icon type="right" />
            </div>
          </div>
          <div className="m-row">
            <span>请假时长</span>
            <div className="m-info">
              <span id="day">{this.state.durDays}</span>
            </div>
          </div>
        </div>

        <div className="m-group m-rest-reason">
          <div className="m-row m-row-reason">
            <span>请假理由</span>
            <TextArea placeholder="请输入请假事由" rows={4} onChange={this.doReason}></TextArea>
          </div>
        </div>

        <div className="m-group m-rest-img">
          <div className="m-row m-row-img">
            <span>图片</span>
            <div className="m-img-wrap">
              {imgList.map((item,index)=>
                <div className="m-img-reason" key={index}>
                  <div className="m-del" onClick={this.doDelImg.bind(this,index)}></div>
                  <img src={`${prefix}${item}`} alt=""/>
                </div>

              )}
              <div className="m-img-upload">
                <input type="file" onChange={this.doUploadImg}></input>
                <div className="m-sel"><Icon type="plus" /></div>
              </div>
            </div>
          </div>
        </div>

        <div className="m-group m-rest-audit">
          <div className="m-row m-row-audit">
            <span>审批人</span>
            <Icon type="plus-circle" />
          </div>
        </div>

        <Button type="primary" className="m-btn-rest">提 交</Button>

        <MDatePicker
          value={this.date}
          theme='ios'
          isOpen={this.state.showDatePicker}
          onSelect={this.selectDate}
          onCancel={this.closeDate}
        />
			 

			</div>
		)
	}
}


export default Leave
