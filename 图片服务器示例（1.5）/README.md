# 图片服务器示例 #
## 简介 ##
利用了formidabe插件和nodejs创建服务器，实现了上传图片，并在网页上显示图片的简单功能。
## 使用 ##
1. 运行`npm install`
2. 打开网页 `127.0.0.1:8080`

项目目录

    /
	|——public 放置静态文件
	|——tmp    放置上传后的文件
	|——index.js 入口文件
	|——post.html 
	|——requestHandler.js 分发路由模块
	|——router.js 控制路由规则模块
	|——server.js 启动服务模块
	|——showHandler.js 业务模块
	|——startHanler.js 业务模块
	|——uploadHandler.js 业务模块

![http服务端编码欠图](./http.jpg)