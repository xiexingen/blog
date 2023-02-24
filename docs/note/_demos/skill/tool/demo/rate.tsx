/**
 * title: 随机字符串
 * description: 长度不超过10位的随机字符串
 */

import React, { useState } from 'react';
import { Input, InputNumber, Button } from 'antd';
import { rate } from '..';

export default () => {
  const [value, setValue] = useState<number>(0);
  const rateStr = rate(value);
  return (
    <>
      <Input.Group compact>
        <p>{rateStr}</p>&nbsp;
        <InputNumber
          min={0}
          max={5}
          value={value}
          onChange={(v) => setValue(v)}
        />
      </Input.Group>
    </>
  );
};
