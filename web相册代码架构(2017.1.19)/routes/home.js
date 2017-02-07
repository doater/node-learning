module.exports = function(app) {
    app.get('/home', function(req, res) {
        if (req.session.user) {
            var Picture = global.dbHelper.getModel('picture');
            Picture.find({}, function(error, docs) {
                res.render('home', {
                    Pictures: docs
                });
            })
        } else {
            req.session.error = '请先登陆';
            res.redirect('/login');
        }
    })
}