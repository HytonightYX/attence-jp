const express = require('express')
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

// 添加申请加梯请求
app.post('/Register', async function (req, res) {
	let sql = `CALL PROC_REGISTER(?)`
	let params = req.body

	console.log(params)

	// callProc(sql, params, res, (r) => {
	// 	res.status(200).json({code: 200, data: r})
	// })
})

app.listen(port, () => console.log(`> Running on localhost:${port}`))
