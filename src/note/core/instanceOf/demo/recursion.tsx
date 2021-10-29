/**
 * title: 递归实现
 * desc: 请打开浏览器控制台查看结果
 */

import React from 'react';
import { Button, Space } from 'antd';
import { myInstanceOf } from '..';

export default () => {
  const print = () => {
    function fn() {}
    let f1 = new fn();

    console.log(`myInstanceOf({},Object)=${myInstanceOf({}, Object)}`);
    console.log(`myInstanceOf(f1,fn)=${myInstanceOf(f1, fn)}`);
    console.log(`myInstanceOf({},fn)=${myInstanceOf({}, fn)}`);
    console.log(`myInstanceOf(100,fn)=${myInstanceOf(100, fn)}`);
    console.log(`myInstanceOf(null,fn)=${myInstanceOf(null as any, fn)}`);
  };

  return (
    <>
      <Space>
        <Button onClick={print}>Print</Button>
      </Space>
    </>
  );
};
