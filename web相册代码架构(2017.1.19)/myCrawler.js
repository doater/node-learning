/*
 *   one:
 *  目标站点:动脑论坛
 *  目标数据:会员名
 *   two:
 *  目标站点:起点小说
 *  目标数据:玄幻小说
 *  three: 
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
mongoose.connect('mongodb://127.0.0.1:27017/webpictures');

var Schema = mongoose.Schema;
var imageSchema = new Schema({
    name: String,
    description: String,
    imgSrc: String
})
var Pictrue = mongoose.model('picture', imageSchema);

var index = 0;

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
                    download(src, './public/images', index);
                    Pictrue.create({
                        name: '第' + index + "张图片",
                        description: '美女' + index,
                        imgSrc: index
                    })
                    console.log('成功下载' + index + '到images文件夹中');
                    index++;
                }
            })
            if (isNaN($next.text())&&index<=200) {
                getImages(nextUrl, base);
            } else {
                console.log('抓取完毕');
            }
        }
    })
}


function download(url, dir, filename) {
    request.head(url, function(err, res, body) {
        request(url).pipe(fs.createWriteStream(dir + '/' + filename));
    })
}

getImages('http://www.mm131.com/qingchun/', 'http://www.mm131.com/qingchun/');