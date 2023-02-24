/**
 * title: 把数据转换成文件下载
 * desc:
 */

import React from 'react';
import { Button, Space } from 'antd';

const str = JSON.stringify(
  {
    a: 1,
    b: 2,
    c: 3,
  },
  null,
  2,
);

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

export default () => {
  const textToDataUrl = () => {
    const dataUrl = `data:,${str}`;
    download(dataUrl, 'demo.json');
  };

  const textToBlobToObjectUrl = () => {
    const url = URL.createObjectURL(new Blob(str.split('')));
    download(url, 'demo.json');
  };
  return (
    <>
      <Space>
        <Button onClick={textToDataUrl}>Text -&gt; DataURL</Button>
        <Button onClick={textToBlobToObjectUrl}>
          Text -&gt; Blob -&gt; ObjectURL
        </Button>
      </Space>
    </>
  );
};
