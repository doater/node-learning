var http = require('http');
// var requestHandler=require('./requestHandler.js');
var router=require('./router.js');

function start(){
    function onRequest(request,response){
        router.route(request,response);
    }

    http.createServer(function(request,response){
        onRequest(request,response);
    }).listen(8080,function(){
        console.log('server start on port 8080');
    });
}

exports.start=start;