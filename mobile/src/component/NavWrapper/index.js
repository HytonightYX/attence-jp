import React from 'react'
import { Affix, Button, Icon } from 'antd';
import './index.less'
import { navIconList } from 'constant/data'
import { NavLink } from 'react-router-dom'


class NavWrapper extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			active: 0,
		}
	}

	doNav=(index)=>{
		this.setState({active:index})
	}

	render() {
		return (
			<div className="g-nav">
				{this.props.children}
				<div className="m-nav">
					{navIconList.map((item,index)=>
						<NavLink to={item.url} key={index} >
							<li className="m-nav-item" onClick={this.doNav.bind(this,index)}>
								{this.state.active===index && <Icon type={item.icon} theme="filled"/> } 
								{this.state.active!==index && <Icon type={item.icon} theme="twoTone" twoToneColor="#3366cc"/> } 
								<span>{item.name}</span>
							</li>
						</NavLink>
					)}
				</div>
			</div>
		)
	}
}

export default NavWrapper
