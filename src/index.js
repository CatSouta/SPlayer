// 全局入口
import "./style/main.scss";
import overload from "./overload";
import createEle from "./createEle";

const SPlayer = class SPlayer {
  constructor(options = {}, audioOptions = {}) {
    const argumentsLength = arguments.length;
    if (!argumentsLength > 2) {
      throw new Error("SPlayer.js:实例化SPlayer时参数长度异常，请检查！");
    }
    this.options = overload(options).options;
    this.audioOptions = overload(audioOptions).audioOptions;
  }

  mount(select, options = this.options, audioOptions = this.audioOptions) {
    // 虚拟节点上树
    if (typeof select !== "string" || select === "") {
      throw new Error("SPlayer.js:挂载播放器失败 请检查select参数");
    }
    createEle(select, options, audioOptions);
  }
};
window.SPlayer = SPlayer;
