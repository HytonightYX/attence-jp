import { observable, action, runInAction } from 'mobx'
import axios from 'axios'
import { message } from 'antd'
import * as urls from '@constant/urls'

class User {
	@observable
	currUser = undefined

	@action
	async register(user) {
		const r = await axios.post(urls.API_USER_LOGIN, user)
		if (r && r.status === 200) {
			return r.data
		}
	}

	@action
	async login(params) {
		const r = await axios.post(urls.API_USER_LOGIN, params)
		if (r && r.status === 200) {
			runInAction(() => {
				this.currUser = r.data.data
			})
			return r.data
		} else {
			message.error('网络错误', 0.7)
		}
	}
}

export default new User()
