# SPlayer

🍭A simple box music player (Netease cloud music analysis)

## Example

<iframe src="/0.2.x/example.html"></iframe>

## Thank
 
 - [@metowolf](https://github.com/metowolf)
 
 - [@ohmyga233](https://github.com/ohmyga233)

 - [@xb2016](https://github.com/xb2016)
 
## Join in the discussion

 - QQ Group: [1040225813](https://shang.qq.com/wpa/qunwpa?idkey=fb30524582f88ffc33bcb0da8734a91c877694984794f6cb7f87a3d1269eaecf)

## Copyright

Copyright © 2020 [SatoSouta](https://713.moe/) & [SPlayer](https://splayer.js.org/), under MIT License

## Attention

!> There may be some imperfections at present. Welcome to GitHub for pull request.

# Guide

## Setup

jsDelivr:

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/SatoSouta/SPlayer@0.2.3/dist/SPlayer.min.css" />
<script src="//cdn.jsdelivr.net/gh/SatoSouta/SPlayer@0.2.3/dist/SPlayer.min.js"></script>
```

9jojo:
```html
<link rel="stylesheet" href="//cdn.9jojo.cn/0.2.3/SPlayer.min.css" />
<script src="//cdn.9jojo.cn/0.2.3/SPlayer.min.js"></script>
```

unpkg:
```html
<link rel="stylesheet" href="//unpkg.com/squplayer@0.2.3/dist/SPlayer.min.css" />
<script src="//unpkg.com/squplayer@0.2.3/dist/SPlayer.min.js"></script>
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
server|1|Get music server（Meting`1` / O'sAPI`2` / Shota'sAPI`3` / Dog'sAPI`4`）
autoplay|false|Whether to turn on autoplay（`true` or `false`）

## FAQs

### Why can't I use autoplay?

There is no problem with your settings, but autoplay is disabled by default in some browsers, so autoplay cannot be performed.
