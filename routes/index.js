var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', hello:'Hello World!' });
});

router.get('/test', function (req, res, next) {

  var props = {data: {}};

  res.render('demo', {title: 'Express', props:JSON.stringify(props)});
});

module.exports = router;
