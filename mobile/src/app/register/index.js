import React from 'react'
import { Form, Menu, Icon, Switch, Modal, Result, Button, Input, DatePicker, Steps } from 'antd'
import { inject, observer } from 'mobx-react'
import * as DT from '@util/date'
import './index.less'

const {TextArea} = Input
const {Step} = Steps

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
			step: 1
		}
	}

	doReturn = (link) => {
		window.location.replace(`/#register`)
	}

	handleCancel = () => {
		this.setState({
			visible: false,
		})
	}

	doApply = (e) => {
		e.preventDefault()
		this.props.form.validateFields(async (err, values) => {
			if (err) {
				return
			}

			const _val = {...values}
			console.log(_val)
			// _val.birthday = parseInt(values['birthday'].format('YYYYMMDD') + '000000')
			// this.setState({visible: true, values: _val})
		})
	}

	handleOk = async () => {
		let params = {...this.state.values}
		params.opid = this.state.code
		params.apdt = DT.newDateTime()

		// alert(params)
		this.setState({loading: true})
		let r = await this.action.addApply(params)
		if (r && r.code === 200) {
			this.setState({loading: false, succ: true, visible: false})
		}
	}

	setBirth = (date, dateString) => {
		console.log(date, dateString)
	}

	toNextStep = () => {
		this.setState({step: this.state.step + 1})
	}

	render() {
		const {getFieldDecorator} = this.props.form
		const {succ, visible, loading, step} = this.state
		const totstep = 3

		return (
			<div className='g-reg'>
				<div className="m-reg-tl">用户注册</div>
				{/*<div className='steps-wrap'>*/}
				{/*	<Steps progressDot current={step - 1}>*/}
				{/*		<Step title="1"/>*/}
				{/*		<Step title="2"/>*/}
				{/*		<Step title="3"/>*/}
				{/*	</Steps>*/}
				{/*</div>*/}

				{(!succ) &&
				<div className="m-reg">
					<Form className="m-reg-form">

						{step === 1 && (
							<>
								<Form.Item label="手机">
									{getFieldDecorator('tel', {
										rules: [{required: true, message: '请输入手机号码！'}],
										initialValue: ''
									})(<Input className="input-text" placeholder="请输入手机号码..."/>)}
								</Form.Item>
								<Form.Item label="姓名">
									{getFieldDecorator('name', {
										rules: [{required: true, message: '请输入姓名！'}],
										initialValue: ''
									})(<Input className="input-text" placeholder="请输入姓名..."/>)}
								</Form.Item>
							</>
						)}

						{step === 2 && (
							<>
								<Form.Item label="邮政编码">
									{getFieldDecorator('post', {
										rules: [{required: true, message: '请输入邮政编码！'}],
										initialValue: ''
									})(<Input className="input-text" placeholder="请输入邮政编码..."/>)}
								</Form.Item>
								<Form.Item label="生日">
									{getFieldDecorator('birthday', {
										rules: [{required: true, message: '请输入生日！'}],
									})(<DatePicker size='large' className='date-picker'/>)}
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
								<Form.Item label="密码">
									{getFieldDecorator('pwd', {
										rules: [{required: true, message: '请输入密码！'}],
										initialValue: ''
									})(<Input className="input-text" placeholder="请输入密码..."/>)}
								</Form.Item>
								<Form.Item label="确认密码">
									{getFieldDecorator('confirm_pwd', {
										rules: [{required: true, message: '请输入确认密码！'}],
										initialValue: ''
									})(<Input className="input-text" placeholder="请输入确认密码..."/>)}
								</Form.Item>
							</>
						)}

						<Form.Item>
							{step < totstep && (
								<Button type="primary" className="input-btn" htmlType="submit" onClick={this.toNextStep} block>下一步</Button>
							)}

							{step === totstep && (
								<Button type="primary" className="input-btn" htmlType="submit" onClick={this.doApply} block>提 交</Button>
							)}
						</Form.Item>
					</Form>
				</div>}

				{(succ) &&
				<div className="m-ret">
					<Result
						title="您的加梯申请提交成功，请等待工作人员回复"
						extra={<Button type="primary" className="input-btn" onClick={this.doReturn} block>返 回</Button>}
					/>
				</div>}

				<Modal
					visible={visible}
					onOk={this.handleOk}
					confirmLoading={loading}
					onCancel={this.handleCancel}
				><p>确认提交加梯申请?</p></Modal>

			</div>
		)
	}
}

export default Form.create()(Register)
