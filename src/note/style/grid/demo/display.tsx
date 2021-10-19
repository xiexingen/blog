/**
 * title: grid与inline-grid区别
 * desc: inline-grid 会变成行内元素
 */

import React, { useState } from 'react';
import { Row, Col, Card } from 'antd';
import style from './display.less';

const GridComponent = ({ className }) => {
  return (
    <div className={style.container}>
      <span>头部</span>
      <div className={className}>
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
      <span>底部</span>
    </div>
  );
};

export default () => {
  return (
    <Row gutter={16} justify="space-around">
      <Col span={8}>
        <Card title="grid" bordered={false}>
          <GridComponent className={style.grid} />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="inline-grid" bordered={false}>
          <GridComponent className={style['inline-grid']} />
        </Card>
      </Col>
    </Row>
  );
};
