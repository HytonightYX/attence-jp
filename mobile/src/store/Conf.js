import { observable, action, runInAction } from 'mobx'
import axios from 'axios'
import { message } from 'antd'
import * as urls from '@constant/urls'

const FAIL = '获取失败'

class Conf {

	@observable
	cardSche = {
		uid: null,
		clock_in: FAIL,
		clock_out: FAIL,
		rest: 0,
		comp: FAIL
	}

	@action
	async saveCardSche(params) {
		const r = await axios.post(urls.API_CONF_SAVE_CARDSCHE, params)
		if (r && r.status === 200) {
			console.log(r.data)
			message.info(r.data.msg)
		} else {
			message.error('网络错误')
		}
	}

	@action
	async loadCardSche(params) {
		const r = await axios.post(urls.API_CONF_LOAD_CARDSCHE, params)
		if (r && r.status === 200) {
			return r.data.data
		} else {
			message.error('网络错误')
		}
	}





}

export default new Conf()
