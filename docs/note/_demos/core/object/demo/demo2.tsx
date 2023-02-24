/**
 * title: 简单案例
 * description: 请打开浏览器控制台查看结果
 */

import React, { useState } from 'react';
import { Button, Space } from 'antd';
import create from '..';

export default () => {
  const print = () => {
    const person = {
      showName() {
        // @ts-ignore
        console.log(this.name);
      },
    };
    const me = create(person);
    me.name = 'XXG';
    me.showName();
  };

  return (
    <>
      <Space>
        <Button onClick={print}>Print</Button>
      </Space>
    </>
  );
};
