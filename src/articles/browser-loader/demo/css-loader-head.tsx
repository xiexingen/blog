/**
 * title: css 放 head 中
 * desc: 我们可以看到效果，css 还在下载中，浏览器上的 h1 标签未展示(通过 Elements 面板查看发现有 h1 标签)，等 css 加载完成后，浏览器上出现 h1 的内容,由此得出结论 css不会阻塞 dom 的解析，但是会阻塞渲染
 */
import React from 'react';

export default () => {
  return (
    <iframe
      height="200px"
      width="100%"
      src="/browser-demo/css-loader-head.html"
    />
  );
};
