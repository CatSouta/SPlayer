// 工具类函数
function random(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function $(query) {
  return document.querySelector(query);
}

function neglect(str, maxLange) {
  if (str.length >= maxLange) {
    console.log(11111111111111)
    let newStr = str;
    let Rep = new RegExp(`.{${maxLange}}`);
    newStr = `${newStr.match(Rep)}...`;
    return newStr;
  }
  return str;
}

export { random, $, neglect };
