var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/meal', function (req, res, next) {
  let array = ['Chicken Mozzarella', 'Bimbimbap', 'Nasi Lemak', 'Nasi goreng', 'Rica Rica Rice', 'Bakmie GM']
  res.json({menu: array})
})

module.exports = router
