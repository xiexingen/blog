/**
 * title: map
 * description: 请打开浏览器查看
 */
// @ts-nocheck
import React from 'react';
import { Button } from 'antd';
import '..';

export default () => {
  const run = () => {
    const result = [1, 2].myMap((item) => {
      return item + 10;
    });
    console.log(result);
  };
  return <Button onClick={run}>Print</Button>;
};
