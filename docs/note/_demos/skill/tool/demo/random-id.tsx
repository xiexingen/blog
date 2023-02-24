/**
 * title: 随机字符串
 * description: 长度不超过10位的随机字符串
 */

import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { randomId } from '..';

export default () => {
  const [value, setValue] = useState<string>();
  const generate = () => {
    const randmoString = randomId(10);
    setValue(randmoString);
  };
  return (
    <Input.Group compact>
      <Input value={value} readOnly style={{ width: '80%' }} />
      <Button onClick={generate}>生成</Button>
    </Input.Group>
  );
};
