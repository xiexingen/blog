/**
 * title: 手机号码格式化
 * description: 手机号码 3-4-4 格式化
 */

import React, { useState } from 'react';
import { Input } from 'antd';
import { phoneFormat } from '..';

export default () => {
  const [phone, setPhone] = useState('18565656595');
  const formattedPhone = phoneFormat(phone);
  return (
    <>
      <p>{formattedPhone}</p>
      <Input
        style={{ width: '100%' }}
        value={phone}
        onChange={(v) => setPhone(v)}
      />
    </>
  );
};
