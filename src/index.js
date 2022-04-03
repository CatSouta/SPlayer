// 全局入口
import "./style/main.scss";

const SPlayer = class SPlayer{
  constructor(options,audioOptions) {
    // 接受参数 进行重载

  }
  mount(select){
    // 虚拟节点上树
    console.log("准备将虚拟节点上树")
    console.log(select)
  }
}
window.SPlayer = SPlayer
