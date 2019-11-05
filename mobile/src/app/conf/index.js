import React,{ Suspense, lazy }  from 'react'
import { inject, observer } from 'mobx-react'
import MDatePicker from 'react-mobile-datepicker'
import * as DT from '@util/date'
import './index.less'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'
// import Dashboard from 'component/'
import moment from 'moment'


class Conf extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
		}
	}

	render() {
		return (
			<div className='g-main'>
			  <div className="m-info">
			   	<div className="m-tl">本月工作时间</div>
			   	<div className="m-val">129 <i>H</i></div>
			  </div>
			  <div className="m-info">
			   	<div className="m-tl">本月加班时间</div>
			   	<div className="m-val">12 <i>H</i></div>
			  </div>
			  <div className="m-info">
			   	<div className="m-tl">本月加班工资</div>
			   	<div className="m-val">3849 <i>円</i></div>
			  </div>
			  <div className="m-info">
			   	<div className="m-tl">本月请假时间</div>
			   	<div className="m-val">2 <i>D</i></div>
			  </div>
			  <div className="m-info">
			   	<div className="m-tl">本月迟到次数</div>
			   	<div className="m-val">0 <i>D</i></div>
			  </div>
			  <div className="m-info">
			   	<div className="m-tl">本月早退次数</div>
			   	<div className="m-val">0 <i>D</i></div>
			  </div>
			</div>
		)
	}
}


export default Conf
