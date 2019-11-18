import React,{ Suspense, lazy }  from 'react'
import { inject, observer } from 'mobx-react'
import { Icon, Tag, message, Input, Result, Modal, Skeleton, Button, TimePicker, DatePicker, Spin } from 'antd'
import './index.less'
import * as DT from '@util/date'
import { toJS } from "mobx";
import get from '@util/getValue'
import MobileSelect from 'mobile-select'
import MDatePicker from 'react-mobile-datepicker'
import moment from 'moment'
import { LEAVE_TYPE, leaveIndex } from '@constant/data'

const {TextArea} = Input
const dateConfig = {
    'year': {
        format: 'YYYY',
        caption: 'Year',
        step: 1,
    },
    'month': {
        format: 'MM',
        caption: 'Mon',
        step: 1,
    },
    'date': {
        format: 'DD',
        caption: 'Day',
        step: 1,
    },
    'hour': {
        format: 'hh',
        caption: 'Hour',
        step: 1,
    },
    'minute': {
        format: 'mm',
        caption: 'Min',
        step: 30,
    }
}



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
      reason: '',
      imgList: [],
      showDatePicker: false,
      visible: false,
      succ: false,
		}

    
    console.log(JSON.stringify(this.props.userStore.currUser))
	}

  componentDidMount() {
    var restTypeSel = new MobileSelect({
        trigger: '#day',
        title: '单项选择',
        wheels: [{data: LEAVE_TYPE}],
        position:[2],
        callback:(indexArr, data)=>{ this.setState({ restType: data[0] }) }
    });
  }


  openDate = (type) => {
    this.setState({ showDatePicker: true, type: type })
  }

  closeDate = () => {
    this.setState({ showDatePicker: false })
  }

  selectDate = (time) => {
    if (this.state.type === 'from') {
      
      let durDays = DT.durationDays(time,time)
      this.setState({
        fromdate: moment(time).format('YYYY-MM-DD HH:mm'),
        todate:   moment(time).format('YYYY-MM-DD HH:mm'),
        durDays: durDays,
        showDatePicker: false,
      })
    } else {
      let durDays = DT.durationDays(this.state.fromdate,time)
      this.setState({
        todate: moment(time).format('YYYY-MM-DD HH:mm'),
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

  doLeave = ()=>{
    this.setState({ visible: true });
  }

  handleOk = async () => {
    let params = {
      type: leaveIndex(this.state.restType),
      from: this.state.fromdate,
      to:   this.state.todate,
      durDays: this.state.durDays,
      reason:  this.state.reason,
      imgList: this.state.imgList,
      uid: this.props.userStore.currUser.id
    }
    this.setState({ loading: true })
    let r = await this.props.leaveStore.applyLeave(params)
    if (r && r.data.code === 200) {
      this.setState({ loading: false, visible: false, succ: true, })
    }else{
      this.setState({ loading: false, visible: false })
    }
    
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  doReturn = ()=>{
    this.setState({
      loading: false,
      restType: '请选择',
      fromdate: '请选择',
      todate:   '请选择',
      durDays:  '',
      reason: '',
      imgList: [],
      showDatePicker: false,
      visible: false,
      succ: false,
    });
  }


	render() {

    const {imgList,succ,visible, loading} = this.state
    let prefix = 'http://localhost:8080/'

		return (
			<div className='g-leave'>

      {(!succ)&&
        <div className="m-leave">
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
              <span>时长</span>
              <div className="m-info">
                <span id="day">{this.state.durDays}</span>
              </div>
            </div>
          </div>
          <div className="m-group m-rest-reason">
            <div className="m-row m-row-reason">
              <span>理由</span>
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
          <Button type="primary" className="m-btn-rest" onClick={this.doLeave} >提 交</Button>
        </div>}

        {(succ)&&
        <div className="m-ret">
          <Result
            title="您的请假申请提交成功，请等待部长审批"
            extra={ <Button type="primary" className="input-btn" onClick={this.doReturn} block>返 回</Button> }
          />
        </div>}

        <MDatePicker
          dateConfig={dateConfig}
          value={this.date}
          theme='ios'
          isOpen={this.state.showDatePicker}
          onSelect={this.selectDate}
          onCancel={this.closeDate}
        />

        <Modal
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={loading}
          onCancel={this.handleCancel} 
        >
          <p>确认提交请假申请?</p>
        </Modal>
			 

			</div>
		)
	}
}


export default Leave
