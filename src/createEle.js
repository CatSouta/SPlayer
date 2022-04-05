import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";
import registerEvent from "./registerEvent";

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

const playerImg = require("./img/Player.png");
export default function (select, options, audioOptions) {
  const dom = document.querySelector(select);
  const vnode = h(
    "div.Splayer",
    { style: { background: `url(${audioOptions.cover})` } },
    h("div.cover", [
      h("audio.SPaudio"),
      h("progress.progressContainer", {
        props: { min: 0, max: 100, value: 25 },
      }),
      h("div.ctrlPanel", [
        h(
          "div.t",
          h("p.title", { style: { padding: "10px" } }, audioOptions.title)
        ),
        h("div.b", [
          h("img.ctrlBtn", { props: { src: `${playerImg.default}` } }),
          h("span", { style: { padding: "10px" } }, audioOptions.artist),
        ]),
      ]),
    ])
  );
  console.log(dom, options, audioOptions);
  patch(dom, vnode);
  registerEvent();
}
