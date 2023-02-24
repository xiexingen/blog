/**
 * title: flat
 * description: 请打开浏览器查看
 */
import React from 'react';
import { Button } from 'antd';
import { flat } from '..';

export default () => {
  const run = () => {
    const result = flat([1, 2, [3, 4, [22, 33]], 5]);
    console.log(result);
  };
  return <Button onClick={run}>Print</Button>;
};
