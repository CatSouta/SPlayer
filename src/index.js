// 全局入口
import "./style/main.scss";
import overload from "./overload";

const SPlayer = class SPlayer {
  constructor(options = {}, audioOptions = {}) {
    this.options = overload(options).options;
    this.audioOptions = overload(audioOptions).audioOptions;
    console.log(this.options);
    console.log(this.audioOptions);
  }

  mount(select) {
    // 虚拟节点上树
    console.log(select);
  }
};
window.SPlayer = SPlayer;
