import { observable, action, runInAction } from 'mobx'
import axios from 'axios'
import { message } from 'antd'
import * as urls from '@constant/urls'

class Comp {

	@observable
	compInfo = {
		deptList: ['选项加载失败'],
		posList: ['选项加载失败']
	}

	@action
	loadCompInfo(params) {
		return Promise.all([
			axios.get(urls.API_COMP_DEPT_LIST, params),
			axios.get(urls.API_COMP_POS_LIST, params)
		]).then(r => {
			const resDept = r[0]
			const resPos = r[1]

			if (resDept && resPos && resDept.status === 200 && resPos.status === 200 ) {
				runInAction(() => {
					this.compInfo = {
						deptList: resDept.data.data,
						posList: resPos.data.data
					}

					console.log(this.compInfo)
				})
			}
		})
			.catch(e => {
				message.error('网络错误')
			})
	}
}

export default new Comp()
