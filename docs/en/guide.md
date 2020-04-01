# Guide

## Setup

jsDelivr:

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/SatoSouta/SPlayer@0.2.1/dist/SPlayer.min.css" />
<script src="//cdn.jsdelivr.net/gh/SatoSouta/SPlayer@0.2.1/dist/SPlayer.min.js"></script>
```

unpkg:
```html
<link rel="stylesheet" href="//unpkg.com/squplayer@0.2.1/dist/SPlayer.min.css" />
<script src="//unpkg.com/squplayer@0.2.1/dist/SPlayer.min.js"></script>
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
server|1|Get music server（Meting`1` / O'sAPI`2`）
netease|null|Netease cloud music ID