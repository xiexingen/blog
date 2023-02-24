/**
 * title: call仿写
 * description: 请打开控制台查看
 */
import React from 'react';
import { Button, Space } from 'antd';
import '..';

export default () => {
  const print = () => {
    function test(name, sex) {
      // @ts-ignore
      console.log(this, name, sex);
    }

    // @ts-ignore
    test.myCall(null, 'xxg', '男');
    // @ts-ignore
    test.myCall({ name: 'XXG', sex: 'boy' });
  };

  return (
    <>
      <Space>
        <Button onClick={print}>Print</Button>
      </Space>
    </>
  );
};
