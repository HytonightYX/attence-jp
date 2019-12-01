import React, { Suspense, lazy } from 'react'
import { inject, observer } from 'mobx-react'
import { Icon, Drawer, Tag, message, Input, Result, Modal, Skeleton, Button, TimePicker, DatePicker, Spin, Badge, Select, Divider } from 'antd'

import './index.less'

const {Option} = Select

@inject('userStore', 'leaveStore')
@observer
class Audit extends React.Component {
	constructor(props) {
		super(props)
		this.date = new Date()
		this.state = {
			visDrawer: true,
			drawerInfo: {title: '审核'}
		}

		console.log(JSON.stringify(this.props.userStore.currUser))
	}


	componentDidMount() {

	}

	showDrawer = (type) => {
		const drawerInfo = {title: type}
		this.setState({
			visDrawer: true,
			drawerInfo
		})
	}

	onClose = () => {
		this.setState({
			visDrawer: false,
		})
	}

	render() {

		return (
			<div className='g-audit'>

				<div className="m-audit-bar">
					<div>
						<span>类型</span>
						<Select defaultValue="全部" style={{width: 120}} size="small">
							<Option value="全部">全部</Option>
							<Option value="请假">请假</Option>
							<Option value="出差">出差</Option>
							<Option value="外出">外出</Option>
							<Option value="加班">加班</Option>
							<Option value="补卡">补卡</Option>
						</Select>
					</div>

					<div>
						<span>状态</span>
						<Select defaultValue="待审核" style={{width: 120}} size="small">
							<Option value="全部">全部</Option>
							<Option value="待审核">待审核</Option>
							<Option value="已审核">已审核</Option>
						</Select>
					</div>
				</div>

				<div className="m-audit-list">

					<div className="m-card-item" onClick={this.showDrawer}>
						<div className="m-card-tl m-status-0">
							<label>申请人：小胡</label>
							<span>类型：事假</span>
						</div>

						<div className="m-card-content">
							<div className="item-info">
								<div>开始时间：2019-11-30 9:00</div>
								<div>结束时间：2019-12-1 9:00</div>
								<div>时长：1天</div>
							</div>
						</div>
					</div>

					<div className="m-card-item">
						<div className="m-card-tl m-status-1">
							<label>申请人：小胡</label>
							<span>类型：事假</span>
						</div>

						<div className="m-card-content">
							<div className="item-info">
								<div>开始时间：2019-11-30 9:00</div>
								<div>结束时间：2019-12-1 9:00</div>
								<div>时长：1天</div>
							</div>
						</div>
					</div>

					<div className="m-card-item">
						<div className="m-card-tl m-status-1">
							<label>申请人：小胡</label>
							<span>类型：事假</span>
						</div>

						<div className="m-card-content">
							<div className="item-info">
								<div>开始时间：2019-11-30 9:00</div>
								<div>结束时间：2019-12-1 9:00</div>
								<div>时长：1天</div>
							</div>
						</div>
					</div>

				</div>

				<Drawer
					title="事假审核"
					placement="right"
					closable={true}
					onClose={this.onClose}
					visible={this.state.visDrawer}
					getContainer={false}
					style={{position: 'absolute'}}
					destroyOnClose={true}
					width="100vw"
					className="m-audit-drawer"
				>
					<div className="m-audit-detail">
						<div className="userinfo">
							<div className="user">
								<div className="m-face">
									<img src="https://picsum.photos/48/48" alt=""/>
								</div>
								<span className="name">小胡</span>
							</div>
							<div className="status"><Tag color="#f60">待审批</Tag></div>
						</div>

						<Divider/>

						<div className="auditinfo">
							<div><span>申请类型</span>事假</div>
							<div><span>所在部门</span>XXXXXXXXXX部门</div>
							<div><span>开始时间</span>2019-11-15</div>
							<div><span>结束时间</span>2019-12-15</div>

							<div><span>时长</span>30天</div>

							<div><span>申请理由</span></div>
							<div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum fugiat magnam nisi voluptatibus? At facilis laudantium magni nostrum obcaecati veritatis! Accusantium animi aspernatur ea eos id numquam perspiciatis vel?</p>
							</div>

							<div><span>图片</span></div>
							<div className="img-wrap">
								<img src="https://picsum.photos/255/255" alt=""/>
							</div>
						</div>

						<div className="bar">
							<Button><Icon type="close" />拒绝</Button>
							<Button type="primary"><Icon type="check" />同意</Button>
						</div>
					</div>
				</Drawer>

			</div>
		)
	}
}


export default Audit
