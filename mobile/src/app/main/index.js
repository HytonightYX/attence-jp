import React,{ Suspense, lazy }  from 'react'
import { inject, observer } from 'mobx-react'
import MDatePicker from 'react-mobile-datepicker'
import * as DT from '@util/date'
import './index.less'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'
// import Dashboard from 'component/'
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
			   main
			</div>
		)
	}
}


export default Main
