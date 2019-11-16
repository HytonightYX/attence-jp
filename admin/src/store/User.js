import { observable, action, runInAction } from 'mobx'
import axios from 'axios'
import { message } from 'antd'
import * as urls from '@constant/urls'
import token from 'util/token.js'

class User {
	@observable
	currUser = undefined

	@action
	async getUserList() {
		const r = await axios.post(urls.API_USER_LIST)
		if (r && r.status === 200) {
			return r.data
		}
	}

  @action
  async setUserActive(params,status) {
    const r = await axios.post(urls.API_USER_ACTIVE,{id: params.key, status: status})
    if (r && r.status === 200) {
      return r.data
    }
  }

  @action
  async setUserPos(params) {
    const r = await axios.post(urls.API_USER_POS,params)
    if (r && r.status === 200) {
      return r.data
    }
  }


  

}

export default new User()
