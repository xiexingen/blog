/**
 * title: 简单案例
 * desc: 请打开浏览器查看
 */
import React from 'react';
import { Button, Space } from 'antd';

export default () => {
  const print = () => {
    const person = {};
    // 通过 defineProperty 修改 Symbol.toStringTag 的 value 值
    Object.defineProperty(person, Symbol.toStringTag, { value: 'Person' });
    console.log(Object.prototype.toString.call(person)); // 会打印出 [object Person]
  };
  return (
    <>
      <Space>
        <Button onClick={print}>Print</Button>
      </Space>
    </>
  );
};
