# backendWebpack
webpack 后端应用

环境：
1、webpack 全局安装

运行：
执行 webpack 命令，自动读取配置文件 webpack.config.js

例子打包除node_modules模块的文件，并且忽略../cfg/sett 文件
需要copy打包的www.js和sett.js到express的原目录，这里是init执行


问题：
  直接运行发现读取视图view会出错，Error: Failed to lookup view "error" in views directory "\views"
没有解决，因为刚好自己做项目不用 视图引擎