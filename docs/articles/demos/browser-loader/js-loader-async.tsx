/**
 * title: script async 加载
 * description: 我们可以看到效果，js 未加载完之前，页面展示了 h1 标签
 */
import React from 'react';

export default () => {
  return (
    <iframe
      height="200px"
      width="100%"
      src="/browser-demo/js-loader-async.html"
    />
  );
};
