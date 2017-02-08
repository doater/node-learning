/*
 *   one:
 *  目标站点:起点小说
 *  目标数据:玄幻小说
 *  two: 
 *  目标站点:http://www.mm131.com/
 *  目标数据:美女图片 
 *  作者:yao
 *  时间:2017.1.11
 */

var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var mkdirp = require('mkdirp')
var mongoose = require('mongoose');
var assert = require('assert');
mongoose.connect('mongodb://localhost/qidianxiaoshuo');

var Schema = mongoose.Schema;
var textSchema = new Schema({
    content: String
});
var imageSchema = new Schema({
    url: String
})
var Text = mongoose.model('Text', textSchema);
var Src = mongoose.model('Src', imageSchema);

// charpter one 抓取小说, output: xiaoshuo.txt
function getContent(url) {
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            var str = '';
            var next = $('#j_chapterNext').attr('href');
            next = 'http:' + next;
            str += $('.read-content').text();
            // fs.appendFile('xiaoshuo.txt', str);
            var text = new Text();
            text.content = str;
            text.save(function(err) {
                assert.equal(err, null);
                console.log('success save to mongodb');
            })
            getContent(next);
        } else {
            console.log('抓取完毕');
        }
    })
}
var url = 'http://read.qidian.com/chapter/OOqJX-uOLbLmkXioLmMPXw2/fwup5h1VDGlMs5iq0oQwLQ2';
getContent(url);


//创建目录
mkdirp('./images', function(err) {
    if (err) {
        console.log(err);
    }
});
// charpter two 抓取美女图片, output: images文件夹

function getImages(url, base) {
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            var items = $('.public-box dd a img');
            var $next = $('.page-en').eq(-2);
            nextUrl = base + $next.attr('href');
            items.each(function() {
                var src = $(this).attr('src');
                if (/pic/.test(src) > 0) {
                    var imagesrc=Src();
                    imagesrc.url=src;
                    imagesrc.save(function(err){
                        assert.equal(err,null);
                        console.log('成功存入src到mongodb');
                    })
                }
            })
            if (isNaN($next.text())) {
                getImages(nextUrl, base);
            } else {
                console.log('抓取完毕');
            }
        }
    })
}

getImages('http://www.mm131.com/qingchun/', 'http://www.mm131.com/qingchun/');