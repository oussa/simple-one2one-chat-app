var express = require('express');
var router = express.Router();

/* Enter chat room with "name" */
router.get('/:name', function(req, res, next) {
    var sess = req.session;
    var receiver = req.params.name;
    res.render('chat', {title: "Chat with " + receiver, name: sess.name, receiver: receiver});
});

module.exports = router;