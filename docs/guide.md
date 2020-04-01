# 指南

## 安装

jsDelivr：

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/SatoSouta/SPlayer@0.2.1/dist/SPlayer.min.css" />
<script src="//cdn.jsdelivr.net/gh/SatoSouta/SPlayer@0.2.1/dist/SPlayer.min.js"></script>
```

unpkg：
```html
<link rel="stylesheet" href="//unpkg.com/squplayer@0.2.1/dist/SPlayer.min.css" />
<script src="//unpkg.com/squplayer@0.2.1/dist/SPlayer.min.js"></script>
```

## 使用

在需要使用播放器的地方插入代码：

```html
<div id="splayer" server="1" netease="网易云音乐ID"></div>
```

## 参数

以下参数需要自行更改

名称 | 默认值 | 描述
----|-------|----
server|1|获取音乐的服务器（Meting`1` / O'sAPI`2`）
netease|null|网易云音乐ID