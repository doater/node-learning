var startHandler=require('./startHandler');
var uploadHandler=require('./uploadHandler');
var showHandler=require('./showHandler');
var handle={};
handle['/']=startHandler.start;
handle['/upload']=uploadHandler.upload;
handle['/show']=showHandler.show;
exports.handle=handle;