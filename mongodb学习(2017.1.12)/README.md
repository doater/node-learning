# mongodb学习示例 #
## 简介 ##
通过爬虫cheerio爬取小说，图片，将信息存储在数据库中。
## 使用 ##
项目目录

    /
	|——images/ 
	|——crawler.js 爬虫脚本，爬取小说
	|——index.js 数据库的增删改查
	|——myCrawler.js 爬虫脚本，抓取美女图片与小说
	|——getqidian.js 通过myCrawler爬取保存信息来查询，并下载图片
	|——package.json

1. 项目根目录下运行`npm install`
2. 运行`node myCrawler`保存信息
3. 运行`node getqidian`下载图片
4. 查看`index.js`了解数据库的增删改查
