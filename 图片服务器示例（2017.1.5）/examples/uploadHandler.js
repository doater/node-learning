var formidable = require('formidable');
var fs=require('fs');

function upload(request, response) {
    var form = new formidable.IncomingForm();
    form.uploadDir='pubilc/upload/';
    form.parse(request, function(err, fields, files) {
        fs.renameSync(files.myFile.path,'tmp/test.png');
        response.writeHead(200, {
            'content-type': 'text/html'
        });
        response.write('received upload:<br/>');
        response.write('<img src="/show"/>');
        response.end();
    });
}

exports.upload = upload;