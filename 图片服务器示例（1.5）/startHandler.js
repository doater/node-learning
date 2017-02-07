var fs=require('fs');

function start(request,response){
    var body=fs.readFileSync('./post.html');
    response.writeHead(200,{
        'content-type':'text/html'
    });
    response.write(body);
    response.end();
}

exports.start=start;