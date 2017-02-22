var express = require('express');
var router = express.Router();

router.get('/:name', function(req, res) {
    // res.send('Hello, ' + req.params.name);
    res.render('users', {
        name: req.params.name,
        servers: ['say', 'eat', 'sleep']
    })
})

module.exports = router;
