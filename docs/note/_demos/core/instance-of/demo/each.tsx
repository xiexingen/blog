/**
 * title: 遍历实现
 * description: 请打开浏览器控制台查看结果
 */

import React from 'react';
import { Button, Space } from 'antd';
import { myInstanceOf2 } from '..';

export default () => {
  const print = () => {
    function fn() { }
    let f1 = new fn();

    console.log(`myInstanceOf2({},Object)=${myInstanceOf2({}, Object)}`);
    console.log(`myInstanceOf2(f1,fn)=${myInstanceOf2(f1, fn)}`);
    console.log(`myInstanceOf2({},fn)=${myInstanceOf2({}, fn)}`);
    console.log(`myInstanceOf2(100,fn)=${myInstanceOf2(100, fn)}`);
    console.log(`myInstanceOf2(null,fn)=${myInstanceOf2(null as any, fn)}`);
  };

  return (
    <>
      <Space>
        <Button onClick={print}>Print</Button>
      </Space>
    </>
  );
};
