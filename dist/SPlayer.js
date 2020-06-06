/**
   _____   _____    _
  / ____| |  __ \  | |
 | (___   | |__) | | |   __ _   _   _    ___   _ __
  \___ \  |  ___/  | |  / _` | | | | |  / _ \ | '__|
  ____) | | |      | | | (_| | | |_| | |  __/ | |
 |_____/  |_|      |_|  \__,_|  \__, |  \___| |_|
                                 __/ |
                                |___/
 ----------------------------------------------------
 * SPlayer's JS
 * Last Update: 2020/06/06 [1.0.0]
 * Author: 小太 (https://713.moe/)
 * GitHub: https://github.com/SatoSouta/SPlayer
 * LICENSE: MIT License
 **/
function SPlayer(data) {
    var main = document.getElementById(data.container); // 获取用户播放器储存容器
    var rand = Math.round(Math.random() * 100000); // Audio标签随机id

    /* 循环 */
    if (!data.loop || data.loop == "false") {
        var loop = "";
    } else {
        var loop = " loop=\"loop\"";
    }

    main.style.display = "inline-block"; // 允许播放器并排显示

    /* 播放器构建 */
    main.innerHTML = "<div class=\"splayer\" id=\"" + rand + "\">" +
        "<audio" + loop + " preload=\"auto\"></audio>" +
        "<div class=\"splayer-cover\" style=\"background-image: url();\"></div>" +
        "<div class=\"splayer-mask\" style=\"opacity: 1;\">" +
        "<div class=\"splayer-progress\" style=\"width: 0%;\"></div>" +
        "<div class=\"splayer-info\">" +
        "<div class=\"splayer-title\">Loading</div>" +
        "<div class=\"splayer-artist\">Loading</div></div>" +
        "<div class=\"splayer-controller\">" +
        "<div class=\"splayer-btn splayer-play\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 16 31\"><path d=\"M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z\"></path></svg></div>" +
        "</div></div></div>";
    
    /* 获取内部储存容器 */
    var div = document.getElementById(rand);
    var au = div.getElementsByTagName("audio")[0];
    var title = div.getElementsByClassName("splayer-title")[0];
    var artist = div.getElementsByClassName("splayer-artist")[0];
    var cover = div.getElementsByClassName("splayer-cover")[0];
    var progress = div.getElementsByClassName("splayer-progress")[0];

    /* 判断是否使用音乐解析 */
    if (!data.get) {
        /* 使用自定义信息 */
        title.innerHTML = data.audio.title;
        artist.innerHTML = data.audio.artist;
        if (data.audio.cover) {
            cover.style = "background-image: url(" + data.audio.cover + ");";
        }
        au.src = data.audio.url;
    } else {
        /* 使用网易云 */
        if (!data.get.server || data.get.server == "netease") {
            if (!data.get.api || data.get.api == 1) {
                /* Shota's API */
                fetch("https://api.9jojo.cn/netease/?type=song&id=" + data.get.id)
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function (json) {
                        title.innerHTML = json.title;
                        artist.innerHTML = json.artist;
                        if (json.cover) {
                            cover.style = "background-image: url(" + json.cover + ");";
                        }
                        au.src = json.url;
                    });
            } else if (data.get.api == 2) {
                /* O's API */
                fetch("https://api.ohmyga.cn/netease/?type=song&id=" + data.get.id)
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function (json) {
                        title.innerHTML = json.title;
                        artist.innerHTML = json.artist;
                        if (json.cover) {
                            cover.style = "background-image: url(" + json.cover + ");";
                        }
                        au.src = json.link;
                    });
            } else if (data.get.api == 3) {
                /* Dog's API */
                fetch("https://api.fczbl.vip/163/?type=single&id=" + data.get.id)
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function (json) {
                        title.innerHTML = json.name;
                        artist.innerHTML = json.artist;
                        if (json.cover) {
                            cover.style = "background-image: url(" + json.cover + ");";
                        }
                        au.src = json.url;
                    });
            } else if (data.get.api == 4) {
                /* Meto's API */
                fetch("https://api.i-meto.com/meting/api?server=netease&type=song&id=" + data.get.id)
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function (json) {
                        json = json[0];
                        title.innerHTML = json.title;
                        artist.innerHTML = json.author;
                        if (json.pic) {
                            cover.style = "background-image: url(" + json.pic + ");";
                        }
                        au.src = json.url;
                    });
            }
        /* 使用腾讯 */
        } else if (data.get.server == "tencent") {
            /* Meto APi */
            fetch("https://api.i-meto.com/meting/api?server=tencent&type=song&id=" + data.get.id)
                .then(function (res) {
                    return res.json();
                })
                .then(function (json) {
                    json = json[0];
                    title.innerHTML = json.title;
                    artist.innerHTML = json.author;
                    if (json.pic) {
                        cover.style = "background-image: url(" + json.pic + ");";
                    }
                    au.src = json.url;
                });
        }
    }
    var btn = div.getElementsByClassName("splayer-btn")[0]; // 控制器按钮
    var mask = div.getElementsByClassName("splayer-mask")[0]; // 封面蒙版

    /* 自动播放 */
    if (!data.autoplay || data.autoplay == false) {
        var playbtn = div.getElementsByClassName("splayer-play")[0];
        playbtn.onclick = function () {
            au.play();
        }
    } else {
        au.play();
    }

    /* 监听播放事件 */
    au.addEventListener("play", function () {
        btn.classList.remove("splayer-play");
        btn.classList.add("splayer-pause");
        mask.style = "";
        btn.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 17 32\"><path d=\"M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z\"></path></svg>";
        var pausebtn = div.getElementsByClassName("splayer-pause")[0];
        pausebtn.onclick = function () {
            au.pause();
        }
        setInterval(function () {
            var cal = au.currentTime / au.duration;
            progress.style.width = cal * 100 + '%';
        }, 100);
    }, false);

    /* 监听暂停事件 */
    au.addEventListener("pause", function () {
        btn.classList.remove("splayer-pause");
        btn.classList.add("splayer-play");
        mask.style = "opacity: 1;";
        btn.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 16 31\"><path d=\"M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z\"></path></svg>";
        var playbtn = div.getElementsByClassName("splayer-play")[0];
        playbtn.onclick = function () {
            au.play();
        }
    }, false);

    /* 监听其他音频播放事件并暂停其他音频 */
    var audios = document.getElementsByTagName("audio");
    function pauseAll() {
        var self = this;
        [].forEach.call(audios, function (i) {
            i !== self && i.pause();
        });
    }
    [].forEach.call(audios, function (i) {
        i.addEventListener("play", pauseAll.bind(i));
    });
}