var requestHandler = require('./requestHandler.js');
var url = require('url');
var handle = requestHandler.handle;

function route(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (typeof(handle[pathname]) === 'function') {
        console.log('recieve a handle ' + pathname);
        handle[pathname](request, response);
    } else {
        response.writeHead(404, {
            'content-type': 'text/plain'
        });
        response.write('Not Found');
        response.end();
    }
}
exports.route = route;