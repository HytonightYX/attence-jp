import React,{ Suspense, lazy }  from 'react'
import { inject, observer } from 'mobx-react'
import { Icon, Tag, message, Input, Skeleton, Button, TimePicker, DatePicker, Spin } from 'antd'
import './index.less'
import { toJS } from "mobx";
import get from '@util/getValue'
import MobileSelect from 'mobile-select'

const {TextArea} = Input


@inject('userStore')
@observer
class Leave extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
      restType: '请选择',
      fromdate: '请选择',
      todate:   '请选择',
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



	render() {

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
          <div className="m-row">
            <span>开始日期</span>
            <div className="m-info">
              <span id="day">{this.state.fromdate}</span>
              <Icon type="right" />
            </div>
          </div>
          <div className="m-row">
            <span>结束日期</span>
            <div className="m-info">
              <span id="day">{this.state.todate}</span>
              <Icon type="right" />
            </div>
          </div>
          <div className="m-row">
            <span>请假时长</span>
            <div className="m-info">
              <span id="day"></span>
              <Icon type="right" />
            </div>
          </div>
        </div>

        <div className="m-group m-rest-reason">
          <div className="m-row m-row-reason">
            <span>请假理由</span>
            <TextArea placeholder="请输入请假事由" rows={4}></TextArea>
          </div>
        </div>

        <div className="m-group m-rest-img">
          <div className="m-row m-row-reason">
            <span>图片</span>
            <div className="m-img-wrap">
              <div className="m-sel"><Icon type="plus" /></div>
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
			 

			</div>
		)
	}
}


export default Leave
