import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

export default function (select, options, audioOptions) {
  const dom = document.querySelector(select);
  const vnode = h(
    "div#Splayer",
    { style: { background: `url(${audioOptions.cover})` } },
    h("div.cover", [
      h("progress.progressContainer", {
        props: { min: 0, max: 100, value: 25 },
      }),
      h("div.ctrlPanel", [
        h(
          "div.t",
          h("p.title", { style: { padding: "10px" } }, audioOptions.title)
        ),
        h("div.b", [
          h("span", { style: { transform: "translateX(10px)" } }, "svg"),
          h("span", { style: { padding: "10px" } }, audioOptions.artist),
        ]),
      ]),
    ])
  );
  console.log(dom, options, audioOptions);
  patch(dom, vnode);
}
