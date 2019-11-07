const moment = require('moment')

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

module.exports = {
	formatTS,
	newDateTime
}
