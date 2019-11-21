var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
const newDateTime = require('../util').newDateTime
const callProc = require('../util').callProc
const db = require('../db/db')

router.post('/getCardByMonth', (req, res) => {
  let sql = `CALL PROC_CAL_GET_CARD_MONTH(?)`
	let params = req.body
	callProc(sql, params, res, (r) => {
		res.status(200).json({code: 200, data: r, msg: '获取本月打卡成功！'})
	})
})

router.post('/getCardByDay', (req, res) => {
  let sqlc = `CALL PROC_CAL_GET_CARD_DAYC(?)`
  let sqll = `CALL PROC_CAL_GET_CARD_DAYL(?)`
  let params = req.body
  let card, leave
  
  db.procedureSQL(sqlc, JSON.stringify(params), (err, r1) => {
    if (err) {
      res.status(500).json({code:-1, msg:'提交请求失败!'})
    } else {
      params.to = parseInt(params.day.toString().substr(0, 8) + '240000')
      params.from = params.day
      db.procedureSQL(sqll, JSON.stringify(params), (err, r2) => {
        if (err) {
          res.status(500).json({code:-1, msg:'提交请求失败!'})
        } else {
          res.status(200).json({code: 200, data: {card: r1, leave: r2}, msg: '本日数据获取成功！'})
        }
      })
    }
  })
})



module.exports = router