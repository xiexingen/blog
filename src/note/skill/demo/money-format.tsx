/**
 * title: 金额格式化方法
 * desc: 按，分割数字
 */

import React, { useState } from 'react';
import { InputNumber } from 'antd';
import { moneyFormat } from '..';

export default () => {
  const [money, setMoney] = useState(10000);
  const formattedMoney = moneyFormat(money);
  return (
    <>
      <p>{formattedMoney}</p>
      <InputNumber
        style={{ width: '100%' }}
        value={money}
        onChange={(v) => setMoney(v)}
      />
    </>
  );
};
