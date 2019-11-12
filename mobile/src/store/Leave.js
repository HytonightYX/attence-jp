import { observable, action, runInAction } from 'mobx'
import axios from 'axios'
import { message } from 'antd'
import * as urls from '@constant/urls'

class Leave {

	@action
  async uploadFile(file) {
    let forms = new FormData()
    forms.append('file',file)
    const r = await axios.post(urls.API_LEAVE_UPLOAD, forms)
    if (r && r.data.code === 200) {
      console.log(r.data.data.path)
    }
    return r
  }

}

export default new Leave()
