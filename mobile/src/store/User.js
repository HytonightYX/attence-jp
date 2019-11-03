import { observable, action } from 'mobx';
import axios from 'axios'


class User {
	@observable
	currUser = {
		username: 'hytonightyx',
	}

	@action
	async register(user) {
		const r = await axios.get('')
	}
}

export default new User();
