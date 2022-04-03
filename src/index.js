// 全局入口
import "./style/main.scss";
import overload from "./overload";

const SPlayer = class SPlayer {
  constructor(options = {}, audioOptions = {}) {
    const argumentsLength = arguments.length;
    if (!argumentsLength > 2) {
      throw new Error("SPlayer.js:实例化SPlayer时参数长度异常，请检查！");
    }
    this.options = overload(options).options;
    this.audioOptions = overload(audioOptions).audioOptions;
  }

  mount(select) {
    // 虚拟节点上树
    console.log(select);
    console.log(this.options);
    console.log(this.audioOptions);
  }
};
window.SPlayer = SPlayer;
