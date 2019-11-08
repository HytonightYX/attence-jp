import React from 'react'
import { Icon, Form, Input, Button, Divider, message } from 'antd'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import './index.less'
import { computed } from 'mobx'

@inject('userStore')
@observer
class Login extends React.Component {
	@computed
	get currUser() {
		return this.props.userStore.currUser
	}

	doLogin = () => {
		this.props.form.validateFields(async (err, values) => {
			if (err) {
				return
			}

			this.props.userStore.login(values)
				.then(r => {
					if (r && r.code === 200) {
						message.success(r.msg)
					} else if (r && r.code === 301) {
						message.error(r.msg)
					}
				})
		})
	}

	render() {
		const {getFieldDecorator} = this.props.form
		return (
				<div className='g-login'>
					{this.currUser && <Redirect to='/'/>}

					<div className="m-tri">
						<div className='m-title'>勤怠管理</div>
					</div>

					<div className='m-login'>
						<Form>
							<Form.Item>
								{getFieldDecorator('email', {
									rules: [{required: true, message: '请输入E-mail！'}],
									initialValue: ''
								})(
									<Input
										icon="search"
										size='large'
										className="input-pwd input-center"
										placeholder="E-mail"
										allowClear
										prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
									/>)}
							</Form.Item>
							<Form.Item>
								{getFieldDecorator('pwd', {
									rules: [{required: true, message: '请输入密码！'}],
								})(
									<Input.Password
										size='large'
										className="input-pwd input-center"
										placeholder="パスワード"
										prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
									/>)}
							</Form.Item>

							<Form.Item className='no-bottom'>
								<Button
									type="primary"
									className="input-btn"
									onClick={this.doLogin}
									block
								>
									ログイン
								</Button>
							</Form.Item>

							<Divider orientation='center'>or</Divider>

							<Form.Item className='no-bottom'>
								<Link to='/register'>
									<Button
										className="input-btn"
										block
									>
										新規登録
									</Button>
								</Link>
							</Form.Item>
						</Form>
					</div>
				</div>
		)
	}
}

export default Form.create()(Login)
