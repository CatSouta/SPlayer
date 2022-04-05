// 注册事件
import { $ } from "./utility";

export default function () {
  $(".Splayer .ctrlBtn").onclick = function () {
    console.log("点击了播放按钮");
  };
}
