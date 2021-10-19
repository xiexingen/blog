/**
 * title: 设置grid容器对齐方式
 * desc: place-content、justify-content、align-content 注意与place-items的区别  另:stretch依赖grid-template-columns、grid-template-rows设定的宽度
 */

import React, { useState } from 'react';
import { Input, Select, Card } from 'antd';
import style from './place-content.less';

const PlaceItems = [
  'start',
  'end',
  'center',
  'stretch',
  'space-around',
  'space-between',
  'space-evenly',
].map((item) => ({
  label: item,
  value: item,
}));

export default () => {
  // 存储水平对齐方式
  const [justifyContent, setJustifyContent] = useState('start');
  // 存储垂直对齐方式
  const [alignContent, setAlignContent] = useState('start');

  const cssStyle: React.CSSProperties = {
    alignContent: alignContent,
    justifyContent: justifyContent,
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
            value={justifyContent}
            options={PlaceItems}
            onChange={(v) => setJustifyContent(v)}
          />
          &nbsp;垂直方向对齐:&nbsp;
          <Select
            style={{ minWidth: 150 }}
            placeholder="align-items"
            allowClear
            value={alignContent}
            options={PlaceItems}
            onChange={(v) => setAlignContent(v)}
          />
        </Input.Group>
      }
      bordered={false}
    >
      <div className={style.grid} style={cssStyle}>
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
