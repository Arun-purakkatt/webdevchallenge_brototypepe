var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
const values=["arun","sandy","sri"]
const person={name:"arun",comments:{comment:"this is a sample comment",email:"abc@gmaial.com"}}
const admin={name:"arun",admin:true}

  // res.render('index', { title: 'Express',name:"arun" });

  // res.render('index', { values });
  // res.render('index', { person });
  // res.render('index', {admin});
  res.render('index', { person });
});

module.exports = router;
