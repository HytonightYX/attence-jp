import React from 'react'
import { Layout, Row, Col,Drawer, Dropdown, Icon, Menu, Avatar, BackTop,Button } from 'antd'
import './index.less'
import { navIconList } from 'constant/data'
import { NavLink } from 'react-router-dom'
const { Header, Sider, Content } = Layout;
import { MENU_MAIN }  from 'constant/data'


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
    let { menu } = this.state

    return (
      <Layout className="g-menu">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="m-logo">勤怠后台管理系统</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            {MENU_MAIN.map((item,j)=>
                <Menu.Item key={j}>
                  <NavLink to={item.path} >
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                  </NavLink>
                </Menu.Item>
            )}
          </Menu>
        </Sider>
        <Layout className="g-content">
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default NavWrapper
