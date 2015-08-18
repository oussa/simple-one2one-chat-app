var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var sess = req.session;
  if (!sess.name)
    res.render('welcome', {title: "Simple One-to-one chat app | Welcome"});
  else res.render('users', {title: "Connected users", name: sess.name});
});

module.exports = router;