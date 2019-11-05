import React from 'react'
import { Affix, Button, Icon } from 'antd';
import './index.less'


const navIconList = [{
	name:'打卡',
	icon:'clock-circle'
},{
	name:'请假',
	icon:'frown'
},{
	name:'月报',
	icon:'calendar'
},{
	name:'设置',
	icon:'setting'}]

class NavWrapper extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			active: 0,
		}
	}

	render() {
		return (
			<div className="g-nav">
				{this.props.children}
				<div className="m-nav">
					{navIconList.map((item,index)=>
						<li className="m-nav-item" key={index}>
							{this.state.active===index && <Icon type={item.icon} theme="filled"/> } 
							{this.state.active!==index && <Icon type={item.icon} theme="twoTone" twoToneColor="#3366cc"/> } 
							<span>{item.name}</span>
						</li>

						)}
				</div>
			</div>
		)
	}
}

export default NavWrapper
