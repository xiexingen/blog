/**
 * title: css 放 body 中
 * desc: 我们可以看到效果，css 还在下载中，浏览器上的 h1 标签已经展示出来了(未应用上样式)，等 css 加载完成后，浏览器上出现 h1 应用上了样式（大小发送变化）,由此得出结论 css 解析完成后会触发页面的重新渲染
 */
import React from 'react';

export default () => {
  return (
    <iframe
      height="200px"
      width="100%"
      src="/browser-demo/css-loader-body.html"
    />
  );
};
