/**
 * title: js 放 head 是否阻塞页面渲染
 * description: 我们可以看到效果，js 未加载完之前，页面空白未展示 h1 标签，js加载完成后展示 h1 标签，说明了 JS 会阻塞其后的 DOM 的加载
 */
import React from 'react';

export default () => {
  return (
    <iframe
      height="200px"
      width="100%"
      src="/browser-demo/js-loader-head.html"
    />
  );
};
