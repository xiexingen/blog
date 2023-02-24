/**
 * title: js 放 body 是否阻塞页面渲染
 * description: 我们可以看到效果，js 未加载完之前，页面展示了 h1 标签，说明了 JS 只是会阻塞其后的 DOM 的加载，并不影响之前的，这也是为什么我们经常会把 js 放 body的最后面的原因
 */

import React from 'react';

export default () => {
  return (
    <iframe
      height="200px"
      width="100%"
      src="/browser-demo/js-loader-body.html"
    />
  );
};
