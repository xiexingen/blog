/**
 * title: auto值
 * description: 使用auto来设置自动宽度
 */

import React, { useState } from 'react';
import style from './xy-auto.less';

export default () => {
  return (
    <div className={style.grid}>
      <div className="item item-1">1</div>
      <div className="item item-2">2</div>
      <div className="item item-3">3</div>
    </div>
  );
};
