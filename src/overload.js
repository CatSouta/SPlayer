// 重载函数 用于重载&参数检查
import { random, neglect } from "./utility";

let options = {
  autoplay: false,
  loop: false,
};
const recordImg = require("./img/recordImg.jpeg");
let audioOptions = {
  server: "netease",
  api: 1,
  id: Math.floor(random(100000, 1200000)),
  title: "未知歌曲",
  artist: "未知",
  cover: recordImg.default,
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
  const artist = parameter.artist || "未知";
  const cover = parameter.cover || recordImg.default;
  if (parameter.hasOwnProperty("url")) {
    if (parameter.url === "" || typeof parameter.url !== "string") {
      throw new Error("SPlayer.js:关键参数url缺省，请检查实例化参数！");
    } else {
      audioOptions = {
        title,
        artist: neglect(artist, 3),
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
      artist: neglect(artist, 3),
      cover,
    };
  }
  return { options, audioOptions };
}
