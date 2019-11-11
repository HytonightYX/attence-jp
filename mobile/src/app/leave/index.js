import React,{ Suspense, lazy }  from 'react'
import { inject, observer } from 'mobx-react'
import './index.less'
import { toJS } from "mobx";
import get from '@util/getValue'

@inject('userStore')
@observer
class Leave extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
		}
    console.log(JSON.stringify(this.props.userStore.currUser))
	}



	render() {

		return (
			<div className='g-leave'>

			 

			</div>
		)
	}
}


export default Leave
