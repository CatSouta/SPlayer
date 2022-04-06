import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";
import registerEvent from "./registerEvent";
import typeResolution from "./typeResolution";
import { $ } from "./utility";

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

const playerImg = require("./img/Player.png");
export default async function (select, options, audioOptions) {
  const dom = $(select);
  const audioData = await typeResolution(audioOptions);
  const vnode = h(
    "div.Splayer",
    { style: { background: `url(${audioData.cover})` } },
    h("div.cover", [
      h("audio.SPaudio", {
        props: { src: `${audioData.url}`, autoplay: "autoplay" },
      }),
      h("progress.progressContainer", {
        props: { min: 0, max: 100, value: 25 },
      }),
      h("div.ctrlPanel", [
        h(
          "div.t",
          h("p.title", { style: { padding: "10px" } }, audioData.title)
        ),
        h("div.b", [
          h("img.ctrlBtn", { props: { src: `${playerImg.default}` } }),
          h("span", audioData.artist),
        ]),
      ]),
    ])
  );

  // console.log(dom, options, audioOptions);
  patch(dom, vnode);
  console.log(audioData);
  registerEvent();
}
