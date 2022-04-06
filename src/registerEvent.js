// 注册事件
import { $ } from "./utility";
import playerImg from "./img/Player.png";
import pauseImg from "./img/Pause.png";

export default function () {
  $(".ctrlBtn").onclick = function () {
    if ($(".SPaudio").paused) {
      $(".SPaudio").play();
      $(".ctrlBtn").src = pauseImg;
    } else {
      $(".SPaudio").pause();
      $(".ctrlBtn").src = playerImg;
    }
  };
}
