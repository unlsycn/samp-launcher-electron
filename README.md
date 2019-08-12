# SA-MP Launcher - Elctron

[![Build status](https://ci.appveyor.com/api/projects/status/iexd78kcvwi11u8l?svg=true)](https://ci.appveyor.com/project/Hobr/samp-launcher-electron)
![imagine](https://img.shields.io/github/package-json/v/Hobr/samp-launcher-electron?style=for-the-badge)
![imagine](https://img.shields.io/github/issues/Hobr/samp-launcher-electron?style=for-the-badge)
![imagine](https://img.shields.io/github/license/Hobr/samp-launcher-electron?style=for-the-badge)

> 基于Electron-Vue的SA-MP客户端启动器。

## 特点

- 界面美观

- 定制性高

- 自动更新

## 缺点

- 只支持Windows7及以上的系统

- 文件大

- ~~只能装X~~

## 构建

``` bash
# 国内镜像加速 Windows CMD
set ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"
set SASS_BINARY_SITE="https://npm.taobao.org/mirrors/node-sass"
# 国内镜像加速 Bash
export ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"
export SASS_BINARY_SITE="https://npm.taobao.org/mirrors/node-sass"
# 安装依赖
yarn
# 热加载开发
yarn dev
# 构建成品
yarn build
# Lint
yarn lint
```

## 配置

To be continued.
