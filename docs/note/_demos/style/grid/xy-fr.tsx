/**
 * title: 通过fr来实现百分比值
 * description: 更改浏览器宽度查看效果
 */

import React, { useState } from 'react';
import style from './xy-fr.less';

export default () => {
  return (
    <div className={style.grid}>
      <div className="item item-1">1</div>
      <div className="item item-2">2</div>
      <div className="item item-3">3</div>
    </div>
  );
};
