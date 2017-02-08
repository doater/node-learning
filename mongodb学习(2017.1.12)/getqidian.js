var mongoose=require('mongoose');
var assert=require('assert');
var fs=require('fs');
var request=require('request');
mongoose.connect('mongodb://localhost/qidianxiaoshuo');
var Schema=mongoose.Schema;
var textSchema=new Schema({
    content: String
});
var imageSrc=new Schema({
    url: String
});
var Text=mongoose.model('texts',textSchema);
var Src=mongoose.model('srcs',imageSrc);

Text.find({},function(err,text){
    assert.equal(err,null);
    var str='';
    for(var i=0;i<text.length;i++){
        str+=text[i].content
    }
    fs.writeFile('dist/xiaoshuo.txt',str,function(err){
        assert.equal(err,null);
        console.log('写入dist文件夹下成功');
    })
})

Src.find({},function(err,result){
    assert.equal(err,null);
    for(var i=0;i<result.length;i++){
        var url=result[i].url;
        download(url,'./images',Math.random()*10000+'.jpg');
    }
})
function download(url, dir, filename) {
    request.head(url, function(err, res, body) {
        request(url).pipe(fs.createWriteStream(dir + '/' + filename));
    })
}