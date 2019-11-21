import { observable, action, runInAction } from 'mobx'
import axios from 'axios'
import { message } from 'antd'
import * as urls from '@constant/urls'

class Cal {

  @action
  async getCardByMonth(params) {
    const r = await axios.post(urls.API_CAL_GET_CARD_BY_MONTH, params)
    return r
  }

  @action
  async getCardByDay(params) {
    const r = await axios.post(urls.API_CAL_GET_CARD_BY_DAY, params)
    return r
  }

}

export default new Cal()
