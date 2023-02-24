/**
 * title: 简单案例
 * description: 请打开浏览器控制台查看结果
 */

import React from 'react';
import { Button, Space } from 'antd';
import myNew from '..';

function Person(name) {
  // @ts-ignore
  this.name = name;
  // @ts-ignore
  this.sayHello = function () {
    console.log(`hello, ${this.name}`);
  };
}

export default () => {
  const print = () => {
    const person = myNew(Person, 'xxg');
    person.sayHello();
  };

  return (
    <>
      <Space>
        <Button onClick={print}>Print</Button>
      </Space>
    </>
  );
};
