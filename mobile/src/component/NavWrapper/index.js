import React from 'react'
import { Affix, Button } from 'antd';
import './index.less'

class NavWrapper extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				{this.props.children}
				<Affix offsetTop={this.state.top}>
					div
				</Affix>
			</div>
		)
	}
}

export default NavWrapper
