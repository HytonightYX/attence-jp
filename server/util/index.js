const moment = require('moment')
const db = require('../db/db')

/**
 * 转换 整形时间戳（YYYYMMDDhhmmss） to YYYY/MM/DD or YYYY/MM/DD HH/MM/SS
 * hms 是否需要 HH/MM/SS
 */
const formatTS = (d, hms = true) => {
	const year = d.toString().substr(0, 4)
	const month = d.toString().substr(4, 2)
	const day = d.toString().substr(6, 2)
	const hour = d.toString().substr(8, 2)
	const min = d.toString().substr(10, 2)
	const sec = d.toString().substr(12, 2)

	if (hms) {
		return `${year}-${month}-${day} ${hour}:${min}:${sec}`
	} else {
		return `${year}-${month}-${day}`
	}
}

const newDateTime = (format='YYYYMMDDhhmmss') => {
	return moment(new Date()).format(format)
}

const callProc = (sql, params, res, cb)=>{
	db.procedureSQL(sql, JSON.stringify(params), (err, ret) => {
		if (err) {
			res.status(500).json({code: -1, msg: '提交请求失败，请联系管理员！', data: null})
		} else {
			cb(ret)
		}
	})
}

module.exports = {
	formatTS,
	newDateTime,
	callProc,
}
