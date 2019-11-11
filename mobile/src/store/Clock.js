import { observable, action, runInAction } from 'mobx'
import axios from 'axios'
import { message } from 'antd'
import * as urls from '@constant/urls'

class Clock {
	@observable
	clockInfo = {}

	@observable
	loading = false

	@observable
	faceCheckStatus = 'false' // 'false' => 'capturing' => uploading => 'pass' or 'fail'

	@action
	async setInfo(uid) {
		console.log('setInfo')
		const r = await axios.post(urls.API_USER_CLOCK_INFO, {uid})
		if (r && r.status === 200) {
			runInAction(() => {
				console.log('setInfo', r.data)
				this.clockInfo = r.data.data[0]
			})
		}
	}
	
	@action
	async clockIn(params) {
		this.loading = true

		const r = await axios.post(urls.API_USER_CLOCK, params)
		if (r && r.status === 200) {
			runInAction(() => {
				console.log('clockIn', r.data)
				this.clockInfo = r.data.data[0]
				this.loading = false
				return r.data
			})
		}
	}

	@action
	async clockOut(params) {
		this.loading = true

		const r = await axios.post(urls.API_USER_CLOCK, params)
		if (r && r.status === 200) {
			runInAction(() => {
				console.log('clockOut', r.data)
				this.clockInfo = r.data.data[0]
				this.loading = false
				return r.data
			})
		}
	}

	@action
	async faceCheck(params) {
		this.faceCheckStatus = 'uploading'

		const r = await axios.post(urls.API_USER_FACE_CHECK, params)
		if (r && r.status === 200) {
			runInAction(() => {
				this.faceCheckStatus = r.data.code === 200 ? 'pass' : 'fail'
			})
		}
	}

	@action
	setFaceCheckStatus(newStatus) {
		this.faceCheckStatus = newStatus
	}


}

export default new Clock()
