/**
 * title: 返回值的类型
 * desc: 请查看浏览器控制台
 */

import React, { useState } from 'react';
import { Button } from 'antd';
import { type } from '..';

export default () => {
  const print = () => {
    console.log(`1 type:${type(1)}`);
    console.log(`Number(1) type:${type(Number(1))}`);
    console.log(`aaa type:${type('aaa')}`);
    console.log(`String(111) type:${type('aaa')}`);
    console.log(`[1] type:${type([1])}`);
  };
  return <Button onClick={print}>打印</Button>;
};
