/**
 * title: 简单的Promise案例
 * description: 请打开浏览器控制台查看结果
 */

import React from 'react';
import { Button, Space } from 'antd';
import deepClone from '..';

export default () => {
  const print = () => {
    const obj: any = {
      field1: 1,
      field2: undefined,
      field3: {
        child: 'children',
      },
      field4: [1, 2, 3],
      other: {
        other: {
          other: {
            other: {
              other: {},
            },
          },
        },
      },
    };
    // 增加一个循环引用
    obj.target = obj;
    // 深度拷贝
    const result = deepClone(obj);
    console.log(result);
  };

  return (
    <>
      <Space>
        <Button onClick={print}>Promise请求</Button>
      </Space>
    </>
  );
};
