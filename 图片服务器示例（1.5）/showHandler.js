var fs = require('fs');

function show(request, response) {
    fs.readFile('tmp/test.png', 'binary', function(error, file) {
        if (error) {
            response.writeHead(500, {
                'content-type': 'text/plain'
            });
            console.log(error);
            response.write('500 服务器内部错误');
            response.end();
        } else {
            response.writeHead(200, {
                'content-type': 'image/png'
            });
            response.write(file, "binary");
            response.end();
        }
    })
}
exports.show = show;