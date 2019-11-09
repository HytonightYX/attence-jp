import { observable, action, runInAction } from 'mobx'
import axios from 'axios'
import { message } from 'antd'
import * as urls from '@constant/urls'
import token from 'util/token.js'

class User {
	@observable
	currUser = undefined

	@action
	async register(user) {
		const r = await axios.post(urls.API_USER_REGISTER, user)
		if (r && r.status === 200) {
			return r.data
		}
	}

	@action
	async login(params) {
		const r = await axios.post(urls.API_USER_LOGIN, params)
		if (r && r.status === 200) {
			runInAction(() => {
				token.saveUser(r.data.data)
				this.currUser = r.data.data
			})
			return r.data
		} else {
			message.error('网络错误', 0.7)
		}
	}

	@action
	logout() {
		token.removeUser()
	}
}

export default new User()
