var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var sess = req.session;
  sess.name = req.body.name;
  sess.save();
  res.render('users', {title: "Connected users", name: sess.name});

});

module.exports = router;