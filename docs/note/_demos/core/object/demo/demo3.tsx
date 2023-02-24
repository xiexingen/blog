/**
 * title: 简单案例
 * description: 请打开浏览器控制台查看结果
 */

import React, { useState } from 'react';
import { Button, Space } from 'antd';

export default () => {
  const print = () => {
    const text = {
      a: 1,
      b: 2,
      c: 3,
    };
    // iterator通过Symbol.iterator实现
    text[Symbol.iterator] = function () {
      const _this = this;
      return {
        index: -1,
        next() {
          const arr = Object.keys(_this);
          if (this.index < arr.length) {
            this.index++;
            return {
              value: _this[arr[this.index]],
              done: false,
            };
          } else {
            return {
              value: undefined,
              done: true,
            };
          }
        },
      };
    };

    // @ts-ignore
    for (const key of text) {
      console.log(key);
    }
  };

  return (
    <>
      <Space>
        <Button onClick={print}>Print</Button>
      </Space>
    </>
  );
};
