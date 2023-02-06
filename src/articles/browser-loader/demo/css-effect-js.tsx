/**
 * title: css 放 head 中是否会对 body中的 js 有影响
 * desc: 我们可以看到效果，css 还在下载中，这个时候 head 中的 js 已经执行，当 css 加载完成后，body 中 js才执行，由此的出结论 css 会阻塞后面的 js 的执行
 */
import React from 'react';

export default () => {
  return (
    <iframe
      height="200px"
      width="100%"
      src="/browser-demo/css-effect-js.html"
    />
  );
};
