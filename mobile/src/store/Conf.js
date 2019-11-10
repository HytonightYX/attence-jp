import { observable, action, runInAction } from 'mobx'
import axios from 'axios'
import { message } from 'antd'
import * as urls from '@constant/urls'

class Conf {

	@action
	async saveCardSche(params) {
		const r = await axios.post(urls.API_CONF_SAVE_CARDSCHE, params)
		if (r && r.status === 200) {
			message.info(r.data.msg)
		} else {
			message.error('网络错误')
		}
	}

	@action
	async LoadCardSche(params) {
		const r = await axios.post(urls.API_CONF_LOAD_CARDSCHE, params)
		if (r && r.status === 200) {
			return r.data.data
			// message.info(r.data.msg)
		} else {
			message.error('网络错误')
		}
	}



	

}

export default new Conf()
