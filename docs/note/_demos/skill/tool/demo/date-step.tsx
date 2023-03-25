/**
 * title: 获取时间起点
 * description: 将时间按指定块去切分
 */

import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { InputNumber } from 'antd';
import { message } from 'antd';
import { getTimePoint } from '..';


export default () => {
  const [value, setValue] = useState<number>(15);

  const generatePreviousValue = () => {
    const timeValue = getTimePoint(value, true);
    message.info(`上一个时间点为:${timeValue.toLocaleTimeString()}`)
  }

  const generateNextValue = () => {
    const timeValue = getTimePoint(value, false);
    message.info(`上一个时间点为:${timeValue.toLocaleTimeString()}`)
  }

  return (
    <Input.Group compact>
      <InputNumber value={value} onChange={setValue} min={1} max={59} />
      <Button onClick={generatePreviousValue}>获取上一个起点</Button>
      <Button onClick={generateNextValue}>获取下一个起点</Button>
    </Input.Group>
  );
};
