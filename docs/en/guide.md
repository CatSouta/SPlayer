# Guide

## Setup

jsDelivr:

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/SatoSouta/SPlayer@0.2.2/dist/SPlayer.min.css" />
<script src="//cdn.jsdelivr.net/gh/SatoSouta/SPlayer@0.2.2/dist/SPlayer.min.js"></script>
```

unpkg:
```html
<link rel="stylesheet" href="//unpkg.com/squplayer@0.2.2/dist/SPlayer.min.css" />
<script src="//unpkg.com/squplayer@0.2.2/dist/SPlayer.min.js"></script>
```

## Use

Insert code where you need to use the player:

```html
<div id="splayer" server="1" netease="Netease cloud music ID"></div>
```

## Parameter

The following parameters need to be changed by yourself.

Name | default value | description
----|-------|----
netease|null|Netease cloud music ID
server|1|Get music server（Meting`1` / O'sAPI`2`）
autoplay|false|Whether to turn on autoplay（`true` or `false`）

## FAQs

#### Why can't I use autoplay?

There is no problem with your settings, but autoplay is disabled by default in some browsers, so autoplay cannot be performed.