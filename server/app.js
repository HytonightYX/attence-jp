const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const axios = require('axios')
const formidable = require('formidable')
const moment = require('moment')
const compression = require('compression')
const https = require('https')

const db = require('./db/db')
const utils = require('./util')
const face = require('./util/face')


const api = require('./routes/api');
const leave = require('./routes/leave');
const cal   = require('./routes/cal');
const admin = require('./routes/admin');

const app = express()
const port = 8080

app.use(compression())
app.use(cors())
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(express.static(__dirname + '/'))

app.get('*.js', function (req, res, next) {
	req.url = req.url + '.gz'
	res.set('Content-Encoding', 'gzip')
	next()
})


app.use('/api',   api)
app.use('/leave', leave)
app.use('/cal',   cal)
app.use('/admin', admin)


function callProc(sql, params, res, cb) {
	db.procedureSQL(sql, JSON.stringify(params), (err, ret) => {
		if (err) {
			res.status(500).json({code: -1, msg: '提交请求失败，请联系管理员！', data: null})
		} else {
			cb(ret)
		}
	})
}


/**
 * 取所有用户信息
 */
app.get('/UserList', async function (req, res) {
	let sql = `CALL PROC_USER_LIST`

	callProc(sql, {}, res, (r) => {
		res.status(200).json({code: 200, data: r})
	})
})

/**
 * 注册接口
 */
app.post('/Register', async function (req, res) {
	let sql = `CALL PROC_USER_REGISTER(?)`
	let params = req.body

	console.log(params)

	callProc(sql, params, res, (r) => {
		res.status(200).json({code: 200, data: r, msg: '注册成功'})
	})
})

/**
 * 登录接口
 */
app.post('/Login', async function (req, res) {
	let sql = `CALL PROC_USER_LOGIN(?)`
	let params = req.body

	callProc(sql, params, res, (users) => {
		if ((users.length > 0)&&(users[0].status===1)) {
			res.status(200).json({code: 200, data: users[0], msg: '登录成功'})
		} else if ((users.length > 0)&&(users[0].status===0)){
			res.status(200).json({code: 301, data: null, msg: '请等待管理员审核'})
		} else {
			res.status(200).json({code: 301, data: null, msg: '用户名或密码错误'})
		}
	})
})

/**
 * 打卡接口
 */
app.post('/Clock', async function (req, res) {
	let params = req.body

	let procs = [
		'PROC_USER_CLOCK_INFO',
		'PROC_USER_CLOCK_IN',
		'PROC_USER_CLOCK_OUT'
	]

	let status = params.status
	let sql = `CALL ${procs[status]}(?)`

	params.clock_date = utils.newDateTime('YYYYMMDD000000')
	params.clock_time = utils.newDateTime('YYYYMMDDhhmm00')

	callProc(sql, params, res, (r) => {
		console.log(r)
		res.status(200).json({code: 200, data: r, msg: '打卡成功'})
	})
})

/**
 * 获取打卡信息
 * 用户每次进入打卡页面都会调取
 */
app.post('/ClockInfo', async function (req, res) {
	let sql = `CALL PROC_USER_CLOCK_INFO(?)`
	let params = req.body
	params.apdt = utils.newDateTime()
	params.clock_date = utils.newDateTime('YYYYMMDD000000')

	callProc(sql, params, res, (r) => {
		console.log(r)
		res.status(200).json({code: 200, data: r, msg: '获取成功'})
	})
})

app.post('/SaveCardSche', async function (req, res) {
	let sql = `CALL PROC_CONF_SAVE_CARDSCHE(?)`
	let params = req.body

	callProc(sql, params, res, (r) => {
		// console.log(r)
		res.status(200).json({code: 200,  msg: r[0].err_msg})
	})
})

app.post('/LoadCardSche', async function (req, res) {
	let sql = `CALL PROC_CONF_LOAD_CARDSCHE(?)`
	let params = req.body
	console.log(params)
	callProc(sql, params, res, (r) => {
		// console.log(r)
		res.status(200).json({code: 200, data:r[0], msg: '获取打卡设置成功'})
	})
})

/**
 * 返回图片服务器存储路径
 */
app.post('/UploadFile', async function (req, res) {
	const form = new formidable.IncomingForm()
	form.parse(req)

	form.on('fileBegin', function (name, file) {
		let type = file.name.split('.').slice(-1)
		console.log(file)
		file.path = 'upload/' + `Leave_${moment(new Date()).format('YYYYMMDDhhmmss')}.${type}`
	})

	form.on('file', (name, file) => {
		res.status(200).json({
			code: 200,
			msg: '上传照片成功',
			data: {path: file.path}
		})
	})
})


/**
 * 用户注册上传头像
 * 返回头像服务器存储路径
 */
app.post('/FaceUpload', async function (req, res) {
	const form = new formidable.IncomingForm()
	form.parse(req)

	form.on('fileBegin', function (name, file) {
		file.path = 'upload/' + `Face_${moment(new Date()).format('YYYYMMDDhhmmss')}.jpg`
	})

	form.on('file', (name, file) => {
		console.log(file)
		res.status(200).json({
			code: 200,
			msg: '上传照片成功',
			data: {path: file.path}
		})
	})
})

// 人脸识别接口
app.post('/FaceCheck', async function (req, res) {
	// const REF_IMG = './img/ref.jpg'
	// const QRY_IMG = './img/04.jpg'
	let REF_IMG = ''

	const form = new formidable.IncomingForm()
	form.parse(req)

	form.on('field', function(name, value) {
		if (name === 'userFace') {
			REF_IMG = value
		}
	});

	form.on('fileBegin', function (name, file) {
		// let type = file.name.split('.').slice(-1)
		console.log(file)
		file.path = 'upload/face/' + file.name
	})

	form.on('file', async (name, file) => {
		console.log(REF_IMG)
		console.log(file.path)
		const ret = await face.faceDetect(REF_IMG, file.path)
		// const ret = ['true']
		if (ret[0]) {
			res.status(200).json({code: 200, data: {ret: ret[0], path: file.path}})
		} else {
			res.status(200).json({code: 401, data: ret})
		}
	})
})

/**
 * 取公司部门信息
 */
app.get('/CompDeptList', async function (req, res) {
	let sql = `CALL PROC_COMP_DEPT_LIST`

	callProc(sql, {}, res, (r) => {
		res.status(200).json({code: 200, data: r})
	})
})

/**
 * 取公司职位信息
 */
app.get('/CompPosList', async function (req, res) {
	let sql = `CALL PROC_COMP_POS_LIST`

	callProc(sql, {}, res, (r) => {
		res.status(200).json({code: 200, data: r})
	})
})

app.listen(port, () => console.log(`> Running on localhost:${port}`))

// var options = {
//   key:fs.readFileSync('/usr/local/key/1897739_manqc.site.key'),
//   cert:fs.readFileSync('/usr/local/key/1897739_manqc.site.pem')
// }
// https.createServer(options,app).listen(443)
