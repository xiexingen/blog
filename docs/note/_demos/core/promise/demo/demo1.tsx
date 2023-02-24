/**
 * title: 简单的Promise案例
 * description: 请打开浏览器控制台查看结果
 */

import React, { useState } from 'react';
import { Button, Space } from 'antd';
import MyPromise from '..';

export default () => {
  const print = () => {
    console.log('start');
    new MyPromise((resolve, reject) => {
      console.log(`promise step:1`);
      resolve(new Date());
    }).then((result) => {
      console.log(`promise step:2`, result);
    });
    console.log('end');
  };

  return (
    <>
      <Space>
        <Button onClick={print}>Promise请求</Button>
      </Space>
    </>
  );
};
