# 指南

## 安装

jsDelivr：

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/SatoSouta/SPlayer@0.2.3/dist/SPlayer.min.css" />
<script src="//cdn.jsdelivr.net/gh/SatoSouta/SPlayer@0.2.3/dist/SPlayer.min.js"></script>
```

unpkg：
```html
<link rel="stylesheet" href="//unpkg.com/squplayer@0.2.3/dist/SPlayer.min.css" />
<script src="//unpkg.com/squplayer@0.2.3/dist/SPlayer.min.js"></script>
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
netease|null|网易云音乐ID
server|1|获取音乐的服务器（Meting`1` / O'sAPI`2` / Shota'sAPI`3` / 犬'sAPI`4`）
autoplay|false|是否开启自动播放（`true` or `false`）

## 常见问题

#### 我设置了自动播放为什么不能使用？

您的设置没有任何问题，但部分浏览器默认禁止了自动播放，所以导致无法进行自动播放。
