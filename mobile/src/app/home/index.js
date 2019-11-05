import React from 'react'
import { Form, Menu, DatePicker, Icon, Switch, Modal, Result, Button, Input, Steps, message, Select } from 'antd'
import { inject, observer } from 'mobx-react'
import MDatePicker from 'react-mobile-datepicker'
import * as DT from '@util/date'
import './index.less'
import moment from 'moment'


class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
		}
	}



	render() {
		return (
			<div className='g-main'>
			   home
			</div>
		)
	}
}


export default Main
