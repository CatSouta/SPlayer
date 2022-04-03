// 重载函数 用于重载&参数检查
import { random } from "./utility";

let options = {
  autoplay: false,
  loop: false,
};
let audioOptions = {
  server: "netease",
  api: 1,
  id: Math.floor(random(100000, 1200000)),
  title: "未知歌曲",
  artist: "未知艺术家",
  cover:
    "./img/recordImg.jpeg",
};
export default function (parameter) {
  if (
    parameter.hasOwnProperty("autoplay") ||
    parameter.hasOwnProperty("loop")
  ) {
    options = {
      autoplay: parameter.autoplay || false,
      loop: parameter.loop || false,
    };
  }
  const title = parameter.title || "未知歌曲";
  const artist = parameter.artist || "未知艺术家";
  const cover = parameter.cover || "https://s1.ax1x.com/2022/04/04/qH6idO.jpg";
  if (parameter.hasOwnProperty("url")) {
    if (parameter.url === "" || typeof parameter.url !== "string") {
      throw new Error("SPlayer.js:关键参数url缺省，请检查实例化参数！");
    } else {
      audioOptions = {
        title,
        artist,
        cover,
        url: parameter.url,
      };
    }
  } else {
    audioOptions = {
      server: parameter.server || "netease",
      api: parameter.api || 1,
      id: parameter.id || Math.floor(random(100000, 1200000)),
      title,
      artist,
      cover,
    };
  }
  return { options, audioOptions };
}
