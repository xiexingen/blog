/**
 * title: 设置单个子元素的对齐
 * description: 通过align-self、justify-self或者place-self控制单个子元素的纵向、横向对齐
 */

import React, { useState } from 'react';
import { Row, Col, Card } from 'antd';
import style from './place-self.less';

export default () => {
  return (
    <Card title="注意看每个元素的对齐方式" bordered={false}>
      <div className={style.grid}>
        <div className="item item-1">1</div>
        <div className="item item-2">2</div>
        <div className="item item-3">3</div>
        <div className="item item-4">4</div>
        <div className="item item-5">5</div>
        <div className="item item-6">6</div>
        <div className="item item-7">7</div>
        <div className="item item-8">8</div>
        <div className="item item-9">9</div>
      </div>
    </Card>
  );
};
