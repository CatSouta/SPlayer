// 注册事件
import { $ } from "./utility";
import playerImg from "./img/Player.png";
import pauseImg from "./img/Pause.png";

export default function () {
  // 播放暂停控制
  $(".ctrlBtn").onclick = function () {
    if ($(".SPaudio").paused) {
      $(".SPaudio").play();
      $(".ctrlBtn").src = pauseImg;
    } else {
      $(".SPaudio").pause();
      $(".ctrlBtn").src = playerImg;
    }
  };
  // 播放进度
  $(".SPaudio").ontimeupdate = function () {
    let currTime = this.currentTime, //当前播放时间
      durtion = this.duration, //视频总长度
      pre = (currTime / durtion) * 100;
    $(".progressContainer").setAttribute("value", pre);
  };
  // 监听播放完毕
  $(".SPaudio").onended = function () {
    $(".progressContainer").setAttribute("value", "0");
    // 在这里可以判断loop参数 这里懒得搞了
    $(".SPaudio").pause();
    $(".ctrlBtn").src = playerImg;
  };
  // 控制播放进度
  $(".progressContainer").onclick = function (e) {
    const event = e || window.event;
    $(".SPaudio").currentTime =
      (event.offsetX / this.offsetWidth) * $(".SPaudio").duration;
    $(".SPaudio").play();
    $(".ctrlBtn").src = pauseImg;
  };
}
