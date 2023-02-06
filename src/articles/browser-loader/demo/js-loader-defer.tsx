/**
 * title: script defer 加载
 * desc: 我们可以看到效果，js 加载完成之前就已经展示了 h1 标签
 */
import React from 'react';

export default () => {
  return (
    <iframe
      height="200px"
      width="100%"
      src="/browser-demo/js-loader-defer.html"
    />
  );
};
