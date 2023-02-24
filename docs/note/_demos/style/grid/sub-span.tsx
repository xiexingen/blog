/**
 * title: 设置单个子元素的跨行、跨列
 * description: 通过grid-column、grid-row控制单个子元素的跨行、跨列
 */

import React, { useState } from 'react';
import { Row, Col, Card } from 'antd';
import style from './sub-span.less';

export default () => {
  return (
    <Card title="设置第三个元素跨行跨列" bordered={false}>
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
