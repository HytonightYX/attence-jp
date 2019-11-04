import React from 'react'
import { Form, Menu, DatePicker, Icon, Switch, Modal, Result, Button, Input, Steps, message, Select } from 'antd'
import { inject, observer } from 'mobx-react'
import MDatePicker from 'react-mobile-datepicker'
import * as DT from '@util/date'
import './index.less'
import moment from 'moment'

const {TextArea} = Input
const {Step} = Steps
const {Option} = Select

@inject('userStore')
@observer
class Register extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			code: null,
			loading: false,
			succ: false,
			visible: false,
			regVal: null,
			step: 1,
			showDatePicker: false
		}
	}

	handleCancel = () => {
		this.setState({
			visible: false,
		})
	}

	toNextStep = () => {
		this.props.form.validateFields(async (err, values) => {
			if (err) {
				return
			}

			this.setState({
				regVal: {...this.state.regVal, ...values},
				step: this.state.step + 1
			}, () => {
				console.log(this.state.regVal)
			})
		})
	}

	doSubmit = (e) => {
		e.preventDefault()
		this.props.form.validateFields(async (err, values) => {
			if (err) {
				return
			}

			this.setState({
				regVal: {...this.state.regVal, ...values},
				loading: true
			}, () => {
				const user = {...this.state.regVal}
				user.birthday = parseInt(user['birthday'].replace(/-/g, '') + '000000')
				user.hiredate = parseInt(user['hiredate'].replace(/-/g, '') + '000000')
				user.apdt = DT.newDateTime()
				console.log(user)
				this.props.userStore.register(user)
					.then(data => {
						console.log('data', data)
						if (data.code === 200) {
							this.setState({
								succ: true
							})
						}
					})
			})
		})
	}

	openDatePicker = () => {
		this.setState({
			showDatePicker: true
		})
	}

	closeDatePicker = () => {
		this.setState({
			showDatePicker: false
		})
	}

	handleSelect = (time) => {

		if (this.state.step === 1) {
			this.props.form.setFieldsValue({'birthday': moment(time).format('YYYY-MM-DD')})
		} else {
			this.props.form.setFieldsValue({'hiredate': moment(time).format('YYYY-MM-DD')})
		}

		this.setState({showDatePicker: false})
	}

	render() {
		const {getFieldDecorator, getFieldValue, setFieldsValue} = this.props.form
		const {succ, visible, loading, step} = this.state
		const totStep = 3
		const compList = ['bizplus']
		const deptList = ['部门1', '部门2', '部门3']
		const positionList = ['职位1', '职位2', '职位3']

		return (

			<div className='g-reg'>
				{(!succ) &&
				<div>
					<div className="m-reg-tl">用户注册</div>
					<Form className="m-reg-form">

						{step === 1 && (
							<>
								<Form.Item label="E-mail">
									{getFieldDecorator('email', {
										rules: [{required: true, message: '请输入email！'}],
										initialValue: ''
									})(<Input
										size='large'
										suffix={<Icon type="mail" style={{color: 'rgba(0,0,0,.45)'}}/>}
										placeholder="请输入email..."/>
									)}
								</Form.Item>
								<Form.Item label="生日">
									{getFieldDecorator('birthday', {
										rules: [{required: true, message: '请输入生日！'}],
										initialValue: ''
									})(
										<Input size='large' readOnly={true} placeholder='请选择日期...'
										       suffix={<Icon type="calendar" style={{color: 'rgba(0,0,0,.45)'}}/>}
										       onClick={this.openDatePicker}/>
									)}
								</Form.Item>
								<Form.Item label="密码">
									{getFieldDecorator('pwd', {
										rules: [{required: true, message: '请输入密码！'}],
										initialValue: ''
									})(<Input.Password size='large' className="input-pwd" placeholder="请输入密码..."/>)}
								</Form.Item>
								<Form.Item label="确认密码">
									{getFieldDecorator('re_pwd', {
										rules: [
											{required: true, message: '请输入确认密码！'},
											{
												validator(rule, value, callback) {
													if (!value) {
														callback()//如果还没填写，则不进行一致性验证
													}
													if (value == getFieldValue('pwd')) {
														callback()
													} else {
														callback('两次密码不一致')
													}
												}
											}
										],
										initialValue: ''
									})(<Input.Password size='large' className="input-pwd" placeholder="请输入确认密码..."/>)}
								</Form.Item>
							</>
						)}

						{step === 2 && (
							<>
								<Form.Item label="姓名">
									{getFieldDecorator('name', {
										rules: [{required: true, message: '请输入姓名！'}],
										initialValue: ''
									})(<Input className="input-text" placeholder="请输入姓名..."/>)}
								</Form.Item>
								<Form.Item label="手机">
									{getFieldDecorator('phone', {
										rules: [{required: true, message: '请输入手机号码！'}],
										initialValue: ''
									})(<Input className="input-text" placeholder="请输入手机号码..."/>)}
								</Form.Item>
								<Form.Item label="邮政编码">
									{getFieldDecorator('postcode', {
										rules: [{required: true, message: '请输入邮政编码！'}],
										initialValue: ''
									})(<Input className="input-text" placeholder="请输入邮政编码..."/>)}
								</Form.Item>
								<Form.Item label="居住地址">
									{getFieldDecorator('addr', {
										rules: [{required: true, message: '请输入居住地址！'}],
										initialValue: ''
									})(<TextArea rows={2} placeholder="请输入居住地址..."/>)}
								</Form.Item>
							</>
						)}

						{step === 3 && (
							<>
								<Form.Item label="公司">
									{getFieldDecorator('company', {
										rules: [{required: true, message: '请选择公司！'}],
										initialValue: 'bizplus'
									})(
										<Select size='large' placeholder='请选择公司...'>
											{compList.map((item) => (
												<Option value={item} key={item}>{item}</Option>
											))}
										</Select>
									)}
								</Form.Item>
								<Form.Item label="入职日期">
									{getFieldDecorator('hiredate', {
										rules: [{required: true, message: '请选择入职日期！'}],
									})(
										<Input size='large' readOnly={true} placeholder='请选择日期...'
										       suffix={<Icon type="calendar" style={{color: 'rgba(0,0,0,.45)'}}/>}
										       onClick={this.openDatePicker}/>
									)}
								</Form.Item>
								<Form.Item label="部门">
									{getFieldDecorator('dept', {
										rules: [{required: true, message: '请选择部门！'}],
										initialValue: '部门1'
									})(
										<Select size='large' placeholder='请选择部门...'>
											{deptList.map((item) => (
												<Option value={item} key={item}>{item}</Option>
											))}
										</Select>
									)}
								</Form.Item>
								<Form.Item label="职位">
									{getFieldDecorator('position', {
										rules: [{required: true, message: '请选择职位！'}],
										initialValue: '职位1'
									})(
										<Select size='large' placeholder='请选择职位...'>
											{positionList.map((item, index) => (
												<Option value={item} key={item}>{item}</Option>
											))}
										</Select>
									)}
								</Form.Item>
							</>
						)}

						<Form.Item>
							{step < totStep && (
								<Button type="primary" className="input-btn" htmlType="submit" onClick={this.toNextStep} block>
									下一步
								</Button>
							)}

							{step === totStep && (
								<Button type="primary" className="input-btn" htmlType="submit" onClick={this.doSubmit} loading={loading}
								        block>
									提 交
								</Button>
							)}
						</Form.Item>
					</Form>
				</div>}

				{succ && (
					<Result
						status="success"
						title="成功提交注册申请！"
						subTitle="请等待管理员审核"
						extra={[
							<Button className="input-btn" type="primary" key="console">
								返回登录页面
							</Button>,
						]}
					/>
				)}

				<MDatePicker
					value={new Date()}
					theme='ios'
					isOpen={this.state.showDatePicker}
					onSelect={this.handleSelect}
					onCancel={this.closeDatePicker}
				/>
			</div>
		)
	}
}


export default Form.create()(Register)
