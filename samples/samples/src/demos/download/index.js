/**
 * 1.json 视为字符串，可以利用 DataURL 进行下载
 *    Text -> DataURL
 * 2.除了使用 DataURL，还可以转化为 Object URL 进行下载
 *    Text -> Blob -> Object URL
 */

function download(url, name) {
  const a = document.createElement('a');
  a.download = name;
  a.rel = 'noopener';
  a.href = url;
  // 触发模拟点击
  a.dispatchEvent(new MouseEvent('click'));
  // 或者a.click();
}

const json = {
  a: 3,
  b: 4,
  c: 5,
};
const str = JSON.stringify(json, null, 2);

// 方案一：Text -> DataURL
document.getElementById('dataUrl').addEventListener('click', () => {
  const dataUrl = `data:,${str}`;
  download(dataUrl, 'demo.json');
});

// 方案二：Text -> Blob -> ObjectURL
document.getElementById('blob').addEventListener('click', () => {
  const url = URL.createObjectURL(new Blob(str.split('')));
  download(dataUrl, 'demo.json');
});
