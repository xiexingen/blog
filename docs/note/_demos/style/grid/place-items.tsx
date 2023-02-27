/**
 * title: 设置子元素水平方向和垂直方向对齐方式
 * description: place-items、justify-items、align-items
 */

import React, { useState } from 'react';
import { Input, Select, Card } from 'antd';
import './place-items.less';

const PlaceItems = ['start', 'end', 'center', 'stretch'].map((item) => ({
  label: item,
  value: item,
}));

export default () => {
  // 存储水平对齐方式
  const [justifyItems, setJustifyItems] = useState('start');
  // 存储垂直对齐方式
  const [alignItems, setAlignItems] = useState('stretch');

  const cssStyle: React.CSSProperties = {
    alignItems: alignItems,
    justifyItems: justifyItems,
  };

  return (
    <Card
      title={
        <Input.Group compact>
          &nbsp;水平方向对齐:&nbsp;
          <Select
            style={{ minWidth: 150 }}
            placeholder="justify-items"
            allowClear
            value={justifyItems}
            options={PlaceItems}
            onChange={(v) => setJustifyItems(v)}
          />
          &nbsp;垂直方向对齐:&nbsp;
          <Select
            style={{ minWidth: 150 }}
            placeholder="align-items"
            allowClear
            value={alignItems}
            options={PlaceItems}
            onChange={(v) => setAlignItems(v)}
          />
        </Input.Group>
      }
      bordered={false}
    >
      <div className="style-grid-place-items" style={cssStyle}>
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
