/**
 * title: 简单的Promise案例
 * description: 请打开浏览器控制台查看结果
 */

import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { Scheduler } from '..';

const promise = (index) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(index);
    }, 1000);
  });
};

const scheduler = new Scheduler();
let index = 0;

export default () => {
  const add = () => {
    scheduler.add(() => {
      index++;
      return promise(index).then((result) => {
        console.log(`${result}执行完毕`);
      });
    });
  };

  return (
    <>
      <Space>
        <Button onClick={add}>+1</Button>
      </Space>
    </>
  );
};
