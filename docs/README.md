# Home

🍭 A lovely square HTML5 music player

## Example

<iframe src="example.html"></iframe>

## Thanks for the API

[@ohmyga233](https://github.com/ohmyga233) & [@xb2016](https://github.com/xb2016) & [@metowolf](https://github.com/metowolf)

## To do list
 - [x] Local Music Load
 - [x] Music Progress
 - [x] Tencent Music Analysis
 - [x] Show multiple players in the same page
 - [x] Play only one in the same page
 - [ ] Adjust music progress
 - [ ] Adjust volum
 - [ ] Web API

## Join the discussion

 - QQ Group: [1040225813](https://shang.qq.com/wpa/qunwpa?idkey=fb30524582f88ffc33bcb0da8734a91c877694984794f6cb7f87a3d1269eaecf)

## Installation

Using npm:
```
npm install squplayer --save
```

## Quick Start

```html
<link rel="stylesheet" href="SPlayer.min.css">
<div id="splayer"></div>
<script src="SPlayer.min.js"></script>
```

```js
var sp = new SPlayer({
    container: "splayer",
    get: {
        server: "netease",
        api: 1,
        id: 443875281
    }
});
```

## Options

Name|Default|Description
----|-------|-----------
container|"splayer"|player container id name
autoplay|false|audio autoplay
loop|false|player loop play
get|{}|music analysis settings (no settings if using local music)
audio|{}|local music settings (no settings if using parsing)

### Get Options

Name|Default|Description
----|-------|-----------
server|"netease"|music analysis server, values: "netease", "tencent"
api|1|music analysis api, values: 1(Shota's API), 2(O's API), 3(Dog's API),4 (Meto's API)
id|-|music id at the platform

### Audio Options

Name|Default|Description
----|-------|-----------
title|-|music title
artist|-|music artist
cover|-|music cover link
url|-|music link

## Web API

Not currently supported.

## MSE support

It requires the library [hls.js](https://github.com/video-dev/hls.js) and it should be loaded before `SPlayer.min.js`.

```html
<link rel="stylesheet" href="SPlayer.min.css">
<div id="splayer"></div>
<script src="hls.min.js"></script>
<script src="SPlayer.min.js"></script>
```

```js
var sp = new SPlayer({
    container: "splayer",
    get: {
        server: "netease",
        api: 1,
        id: 443875281
    }
});
```

## CDN

jsdelivr:

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/SatoSouta/SPlayer@1.0.0/dist/SPlayer.min.css">
<script src="//cdn.jsdelivr.net/gh/SatoSouta/SPlayer@1.0.0/dist/SPlayer.min.js"></script>
```

9jojo:

```html
<link rel="stylesheet" href="//cdn.9jojo.cn/SPlayer/1.0.0/SPlayer.min.css">
<script src="//cdn.9jojo.cn/SPlayer/1.0.0/SPlayer.min.js"></script>
```

unpkg:

```html
<link rel="stylesheet" href="//unpkg.com/squplayer@1.0.0/dist/SPlayer.min.css">
<script src="//unpkg.com/squplayer@1.0.0/dist/SPlayer.min.js"></script>
```

## FAQ

### Why can't player autoplay in some mobile browsers?

Most mobile browsers forbid audio autoplay, you wont be able to achieve it without hacks.

## Copyright

Copyright © 2020 [SatoSouta](https://713.moe/) & [SPlayer](https://splayer.js.org/), under MIT License.

## Notice

!> There may still be imperfections, welcome to Pull Request on Github.
