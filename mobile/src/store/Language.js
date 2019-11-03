import { observable, action } from 'mobx';
// import {
// 	queryAllLendsByUserId,
// 	queryReturnSelected
// } from '../services/api'

class Language {
	@observable
	locale = undefined

	_zh_CN = {

	}

	_ja_JP = {

	}

	@action
	async setLocale(uid) {
		// this.userLends = await queryAllLendsByUserId(uid);
		console.log('get all lends by user id')
	}
}

export default new Language();
