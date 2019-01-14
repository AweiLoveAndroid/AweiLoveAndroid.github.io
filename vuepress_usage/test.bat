test.bat------
set curdir=%~dp0
cd /d %curdir%
@echo off
echo >>package.json
set var="ECHO is off."
findstr /v %var% "package.json"
echo {"name": "替换成你的工程名字","version": "1.0.0","main": "index.js","license": "MIT","scripts": {"docs:dev": "vuepress dev docs","docs:build": "vuepress build docs"},"dependencies": {"vuepress": "^0.14.8"}} > package.json
md docs
md docs\.vuepress
echo >>docs\.vuepress\config.js
echo module.exports = {title: '个人文档',description: '练习文档'} > docs\.vuepress\config.js
md docs\.vuepress\public
echo >>docs\README.md
echo # 第一个VuePress页面 > docs\README.md
md docs\guide
echo >>docs\guide\README.md
echo # 这是导航文件 > docs\guide\README.md
echo >>docs\config.md
echo # 这是config文件 > docs\config.md
pause