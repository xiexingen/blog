/**
 * title: Promise.all
 * description: 请打开浏览器控制台查看结果
 */

import React, { useState } from 'react';
import { Button, Space } from 'antd';
import MyPromise from '..';

function mock(data) {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export default () => {
  const print = () => {
    console.log('start');
    MyPromise.all([mock(1), mock(2), mock(3)]).then((results) => {
      console.log('-------------执行结果-------------');
      console.log(results);
    });
    console.log('end');
  };

  return (
    <>
      <Space>
        <Button onClick={print}>Promise.all请求</Button>
      </Space>
    </>
  );
};
