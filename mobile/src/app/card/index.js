import React,{ Suspense, lazy }  from 'react'
import { inject, observer } from 'mobx-react'
import * as DT from 'util/date'
import './index.less'

import moment from 'moment'


class Card extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
		}
	}

	render() {
		return (
			<div className='g-card'>
				card
			</div>
		)
	}
}


export default Card
