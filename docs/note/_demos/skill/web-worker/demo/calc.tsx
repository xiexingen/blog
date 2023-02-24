/**
 * title: 点击按钮查看效果
 * description: 直接在主线程中计算,计算期间会导致 UI 无响应
 */
import React, { useState } from 'react';
import { Space, InputNumber, Button, message } from 'antd';
import { calcSum } from '..';

export default () => {
  const [value, setValue] = useState<number>(100000000);

  const print = () => {
    const sum = calcSum(value);
    message.success(`计算完成,结果为:${sum}`);
  };

  return (
    <Space>
      <InputNumber
        style={{ width: 200 }}
        min={1000}
        value={value}
        onChange={setValue}
      />
      <Button type="primary" onClick={print}>
        计算
      </Button>
    </Space>
  );
};
