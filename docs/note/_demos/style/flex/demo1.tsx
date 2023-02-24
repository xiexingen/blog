import React from 'react';
import style from './demo1.less';

export default () => {
  return (
    <>
      <ul className={`${style.flex} ${style.left}`}>
        <li>Alibaba</li>
        <li>Tencent</li>
        <li>Baidu</li>
        <li>Jingdong</li>
        <li>Ant</li>
        <li>Netease</li>
      </ul>
      <ul style={{ marginTop: 20 }} className={`${style.flex} ${style.right}`}>
        <li>Alibaba</li>
        <li>Tencent</li>
        <li>Baidu</li>
        <li>Jingdong</li>
        <li>Ant</li>
        <li>Netease</li>
      </ul>
    </>
  );
};
