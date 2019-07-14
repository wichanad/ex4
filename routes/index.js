var express = require('express');
var router = express.Router();

router.get("/play/:num1/:num2", function(req, res, next) {
  //console.log(req.params)
  var num1 = req.params.num1;
  var num2 = req.params.num2;
  var sum = parseInt(num1) + parseInt(num2);
  res.send("ผลรวมของตัวเลข 2 จำนวนคือ " + sum);
 });
 




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;
