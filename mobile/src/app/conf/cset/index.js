import React,{ Suspense, lazy }  from 'react'
import { inject, observer } from 'mobx-react'
import './index.less'
import { toJS } from "mobx";
import get from '@util/getValue'
import { Icon, Form, Tag, message, Input, Skeleton, Slider, Drawer, Switch, Button, TimePicker, DatePicker, Spin } from 'antd'
import * as DT from '@util/date'
import { CARD_MARK } from '@constant/data'
import moment from 'moment'


@inject('userStore','confStore')
@observer
class Cset extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
      rest: 1,
      comp: 'aaa',
      start: '9:00',
      end:'17:00',
		}
	}

  async componentWillMount() {
    let params = {
      uid:  this.props.userStore.currUser.id
    }
    this.setState({ loading: true })
    let sche = await this.props.confStore.loadCardSche(params)
    console.log(sche)
    this.setState({ loading: false, start: sche.clock_in, end:sche.clock_out, comp: sche.comp, rest:sche.rest })
  }


  doStartTime=(e)=>{
    this.setState({start: DT.formatTime(e)})
  }
  doEndTime=(e)=>{
    this.setState({end: DT.formatTime(e)})
  }
  doRest = (e) => {
    this.setState({ rest: e })
  }
  doComp = (v) => {
    this.setState({comp: v.currentTarget.value})
  }

  doReturn =()=>{
    window.location.replace(`/#conf`)
  }

  doSave = async (e) =>{
    let params = {
      start:this.state.start,
      end:  this.state.end,
      rest: this.state.rest,
      comp: this.state.comp,
      uid:  this.props.userStore.currUser.id
    }
    console.log(params)
    this.setState({ loading: true })
    await this.props.confStore.saveCardSche(params)
    this.setState({ loading: false })
  }

	render() {

		return (
			<div className='g-cset'>
        <Skeleton active loading={this.state.loading}>
          <div className="m-hd">
            <div className="m-return" onClick={this.doReturn}><Icon type="left" /></div>
            <div className="m-title">打卡默认设置</div>
          </div>
          <div className="m-bd">
            <Form>
              <div className="m-row">
                <span>出勤時間</span>
                <div className="m-wrap">
                  <TimePicker className="m-time"
                    value={DT.newTimeS(this.state.start)}
                    format={DT.TIME_FORMAT_S}
                    minuteStep={10}
                    disabledHours={() => [0,1,2,3,4,5,6]}
                    onChange={this.doStartTime}
                    block/>
                  <span className="m-bk">-</span>
                  <TimePicker className="m-time"
                    value={DT.newTimeS(this.state.end)}
                    format={DT.TIME_FORMAT_S}
                    minuteStep={10}
                    onChange={this.doEndTime}
                    disabledHours={() => [0,1,2,3,4,5,6]}
                  block/>
                </div>
              </div>

              <div className="m-row">
                <span className="m-title-s">お客様名</span>
                <Input value={this.state.comp} onChange={this.doComp}></Input>
              </div>

              <div className="m-row">
                <span className="m-title-s">休憩時間</span>
                <Slider marks={CARD_MARK} min={0} max={6} value={this.state.rest} onChange={this.doRest}/>
                
              </div>

              <div className="m-row">
                <Button type="primary" block onClick={this.doSave}>保 存</Button>
              </div>
            </Form>
          </div>
        </Skeleton>
			</div>
		)
	}
}


export default Form.create()(Cset)
