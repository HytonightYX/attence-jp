var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
const callProc = require('../util').callProc


router.post('/userlist', (req, res) => {
  let sql = `CALL PROC_ADMIN_USERLIST(?)`
	let params = req.body

	console.log(params)

	callProc(sql, params, res, (r) => {
		res.status(200).json({code: 200, data: r, msg: '取出用户列表'})
	})
})



module.exports = router
// export default router;