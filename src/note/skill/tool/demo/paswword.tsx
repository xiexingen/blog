/**
 * title: 密码安全级别
 * desc: 密码长度是6-12位，由数字、小写字符和大写字母组成，但必须至少包括2种字符
 */

import React, { useState } from 'react';
import { Input } from 'antd';
import { passwordVertify } from '..';

export default () => {
  const [password, setPassword] = useState('');
  const result = passwordVertify(password);
  return (
    <>
      <p>{result ? 'Y' : 'N'}</p>
      <Input
        style={{ width: '100%' }}
        value={password}
        placeholder="密码长度是6-12位，由数字、小写字符和大写字母组成，但必须至少包括2种字符"
        onChange={(v) => setPassword(v)}
      />
    </>
  );
};
