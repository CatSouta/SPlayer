// 工具类函数
function random(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function $(query) {
  return document.querySelector(query);
}

export { random, $ };
