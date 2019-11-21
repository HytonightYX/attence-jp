var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
const callProc = require('../util').callProc


router.post('/userlist', (req, res) => {
  let sql = `CALL PROC_ADMIN_USERLIST(?)`
	let params = req.body
	callProc(sql, params, res, (r) => {
		res.status(200).json({code: 200, data: r, msg: '取出用户列表'})
	})
})

router.post('/userActive', (req, res) => {
  let sql = `CALL PROC_ADMIN_USERACTIVE(?)`
  let params = req.body
  callProc(sql, params, res, (r) => {
    res.status(200).json({code: 200, data: r, msg: '取出用户列表'})
  })
})


router.post('/userPos', (req, res) => {
  let sql = `CALL PROC_ADMIN_SET_USERPOS(?)`
  let params = req.body
  callProc(sql, params, res, (r) => {
    res.status(200).json({code: 200, data: r, msg: '设置用户职位'})
  })
})


module.exports = router
// export default router;