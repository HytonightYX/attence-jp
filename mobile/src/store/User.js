import { observable, action } from 'mobx'
import axios from 'axios'
import * as urls from '@constant/urls'

class User {
	@observable
	currUser = {
		username: 'hytonightyx',
	}

	@action
	async register(user) {
		const r = await axios.post(urls.API_USER_REGISTER, user)
		console.log(r)
		if ( r && r.status === 200) {
			return r.data
		}
	}
}

export default new User()
