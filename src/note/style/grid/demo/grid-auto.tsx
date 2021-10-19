/**
 * title: 设置超出元素项的排列方式
 * desc: grid-auto-columns、grid-auto-rows;某些情况下，比如我们定义了一个9宫格布局，但是实际给了10个元素，配合grid-auto-flow来使用，通过这两个属性可以控制多出来元素的宽高
 */

import React, { useState } from 'react';
import { Card, Select, Input } from 'antd';
import style from './grid-auto.less';

const GridAutoFlows = ['row', 'column'].map((item) => ({
  label: item,
  value: item,
}));

export default () => {
  const [gridAutoFlow, setGridAutoFlow] = useState('column');
  const styles: React.CSSProperties = {
    gridAutoFlow,
  };
  return (
    <Card
      title={
        <Input.Group>
          grid-auto-flow:
          <Select
            style={{ minWidth: 150 }}
            placeholder="grid-auto-flow"
            allowClear
            value={gridAutoFlow}
            options={GridAutoFlows}
            onChange={(v) => setGridAutoFlow(v)}
          />
        </Input.Group>
      }
      bordered={false}
    >
      <div className={style.grid} style={styles}>
        <div className="item item-1">1</div>
        <div className="item item-2">2</div>
        <div className="item item-3">3</div>
        <div className="item item-4">4</div>
        <div className="item item-5">5</div>
        <div className="item item-6">6</div>
        <div className="item item-7">7</div>
        <div className="item item-8">8</div>
        <div className="item item-9">9</div>
        <div className="item item-10">多1</div>
        <div className="item item-10">多2</div>
        <div className="item item-10">多3</div>
        <div className="item item-10">多4</div>
      </div>
    </Card>
  );
};
