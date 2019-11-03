import React from 'react'
import './index.less'
import { Menu, Icon, Switch } from 'antd'
import Form from './Form'

class Login extends React.Component {

	render() {
		return (
			<div className='g-login'>

				<div className='form-wrap'>
					用户注册
					<Form/>
				</div>

			</div>
		)
	}
}

export default Login
