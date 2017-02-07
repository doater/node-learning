# web相册 #
## 简介 ##
采用了express,bootstrap,jquery,fancybox框架,用cheerio爬取了项目需要的静态资源图片,原生js支持图片上传，利用模板在网页中展示出来。
## 使用 ##
项目目录

    /
	|——app.js 入口文件
	|——myCrawler.js 爬取脚本，爬取项目需要的静态资源（美女图片）
	|——routes/ 路由文件夹
		|——index.js 分发路由
		|——home.js	首页
		|——login.js 登录
		|——logout.js 跳出登录 
		|——register.js 注册
		|——upload.js 上传
1. 项目根目录下运行`npm install`
2. 项目根目录下运行`node myCrawler`，爬取静态图片
3. 项目下运行`node app`，并打开网页`127.0.0.1:4000`