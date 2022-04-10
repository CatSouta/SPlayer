// audioOptions解析
export default async function (audioOptions) {
  switch (audioOptions.server) {
    case "netease":
      switch (audioOptions.api) {
        case 1:
          return new Promise((resolve,reject) => {
            fetch(
              `https://api.9jojo.cn/netease/?type=song&id=${audioOptions.id}`
            ).then((response) => {
              resolve(response.json());
            })
          });
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
      }
      break;
    case "tencent":
      break;
  }
}
