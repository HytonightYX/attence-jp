const express = require('express')
var https = require('https')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const axios = require('axios')
const formidable = require('formidable')
const moment = require('moment')
const compression = require('compression')

const db = require('./db/db')
const utils = require('./util')

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
		if (users.length > 0) {
			res.status(200).json({code: 200, data: users[0], msg: '登录成功'})
		} else {
			res.status(200).json({code: 301, data: null, msg: '用户名或密码错误'})
		}
	})
})


// app.get('/loc', async function (req, res) {
// 	console.log('loc')
// 	let lat = req.query.lat
//   let lng = req.query.lng
// 	let host = 'https://maps.googleapis.com/maps/api/geocode'
// 	let key = 'AIzaSyBSWEVNt2h8CrDWufKNy32k-t14tnW9D9I'
// 	let url = `${host}/json?language=ja&key=${key}&latlng=${lat},${lng}`
// 	const r = await axios.get(url)
// 	if (r && r.status === 200) {
// 	  // console.log(r.data)
// 	  console.log(r.data.results[0].formatted_address)
// 	  res.status(200).json({code: 200, data: r.data.results[0].formatted_address, msg: '登录成功'})
// 	}else{
// 	  res.status(200).json({code: 200, data: '获取地址失败', msg: '登录成功'})
// 	}
	
// })


app.listen(port, () => console.log(`> Running on localhost:${port}`))

// var options = {
//   key:fs.readFileSync('/usr/local/key/1897739_manqc.site.key'),
//   cert:fs.readFileSync('/usr/local/key/1897739_manqc.site.pem')
// }
// https.createServer(options,app).listen(443)