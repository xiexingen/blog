/**
 * title: myReduce
 * desc: 请打开浏览器查看
 */
// @ts-nocheck
import React from 'react';
import { Button } from 'antd';
import '..';

export default () => {
  const run = () => {
    const result = [1, 2, 3].myReduce((t, item) => {
      return t + item;
    }, 0);
    console.log(result);
  };
  return <Button onClick={run}>Print</Button>;
};
