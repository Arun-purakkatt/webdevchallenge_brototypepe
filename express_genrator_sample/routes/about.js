var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'This is about page',name:"by arun" });
});

module.exports = router;
