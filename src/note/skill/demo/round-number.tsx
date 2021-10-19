/**
 * title: 小数位精确
 * desc:
 */

import React, { useState } from 'react';
import { Input, InputNumber } from 'antd';
import { roundNumber } from '..';

export default () => {
  const [number, setNumber] = useState(12.3);
  const [decimal, setDecimal] = useState(1);
  const roundNumberValue = roundNumber(number, decimal);
  return (
    <>
      <p>{roundNumberValue}</p>
      <Input.Group compact>
        <InputNumber
          style={{ minWidth: 200, marginRight: 2 }}
          value={number}
          onChange={(v) => setNumber(v)}
        />
        <InputNumber
          value={decimal}
          precision={0}
          min={0}
          max={3}
          onChange={(v) => setDecimal(v)}
        />
      </Input.Group>
    </>
  );
};
