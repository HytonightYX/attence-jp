var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
const newDateTime = require('../util').newDateTime
const callProc = require('../util').callProc


router.post('/ApplyLeave', (req, res) => {
  let sql = `CALL PROC_LEAVE_APPLYLEAVE(?)`
	let params = req.body
  params.create_at = newDateTime()
	callProc(sql, params, res, (r) => {
		res.status(200).json({code: 200, msg: '申请请假成功！'})
	})
})



module.exports = router