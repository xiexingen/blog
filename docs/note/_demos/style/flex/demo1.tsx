import React from 'react';
import './demo1.less';

export default () => {
  return (
    <>
      <ul className="style-flex style-flex-left">
        <li>Alibaba</li>
        <li>Tencent</li>
        <li>Baidu</li>
        <li>Jingdong</li>
        <li>Ant</li>
        <li>Netease</li>
      </ul>
      <ul style={{ marginTop: 20 }} className="style-flex style-flex-right">
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
