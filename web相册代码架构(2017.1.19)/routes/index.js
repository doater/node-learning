module.exports=function(app){
    require('./login')(app);
    require('./home')(app);
    require('./register')(app);
    require('./upload')(app);
    require('./logout')(app);
}