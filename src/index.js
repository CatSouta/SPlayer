// 全局入口
import "./style/main.scss";
import { random } from "./utility";

const SPlayer = class SPlayer {
  constructor(options, audioOptions) {
    // 接受参数 进行重载
    const parameterLength = arguments.length;
    switch (parameterLength) {
      case 1:
        this.overload(options);
        break;
      case 2:
        this.overload(options);
        this.overload(audioOptions);
        break;
      default:
        throw new Error(
          "SPlayer.js:SPlayer实例化时参数过量或过少，请检查实例化参数！"
        );
    }
    console.log(this.options, this.audioOptions);
  }

  overload(parameter) {
    if (
      parameter.hasOwnProperty("autoplay") ||
      parameter.hasOwnProperty("loop")
    ) {
      this.options = {
        autoplay: parameter.autoplay || false,
        loop: parameter.loop || false,
      };
    } else {
      if (
        !(parameter.hasOwnProperty("url") || parameter.hasOwnProperty("id"))
      ) {
        this.options = {
          autoplay: false,
          loop: false,
        };
      }
    }
    if (parameter.hasOwnProperty("url")) {
      if (typeof parameter.url !== "string") {
        throw new Error("SPlayer.js:关键参数url缺省，请检查实例化参数！");
      }
      this.audioOptions = {
        title: parameter.title || "未知歌曲",
        artist: parameter.artist || "未知艺术家",
        cover:
          parameter.cover ||
          "https://img.zcool.cn/community/01fb46554be413000001bf72d2a25c.jpg@1280w_1l_2o_100sh.jpg",
        url: parameter.url,
      };
    } else {
      this.audioOptions = {
        server: parameter.server || "netease",
        api: 1,
        id: parameter.id || Math.floor(random(100000, 1200000)),
        title: parameter.title || "未知歌曲",
        artist: parameter.artist || "未知艺术家",
        cover:
          parameter.cover ||
          "https://img.zcool.cn/community/01fb46554be413000001bf72d2a25c.jpg@1280w_1l_2o_100sh.jpg",
      };
    }
    if (this.options === undefined) {
      this.options = {
        autoplay: false,
        loop: false,
      };
    }
  }

  mount(select) {
    // 虚拟节点上树
    console.log(select);
  }
};
window.SPlayer = SPlayer;
