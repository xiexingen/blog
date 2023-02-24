/**
 * title: forEach
 * description: 请打开浏览器查看
 */
// @ts-nocheck
import React from 'react';
import { Button } from 'antd';
import '..';

export default () => {
  const run = () => {
    [1, 2].myForEach((item) => {
      console.log(item);
    });
  };
  return <Button onClick={run}>Print</Button>;
};
