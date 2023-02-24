/**
 * title: 点击按钮查看效果
 * description: 在 web worker 中计算(可以看到计算的时候 ui 也可以响应)
 */
import React, { useState } from 'react';
import { Space, InputNumber, Button, message } from 'antd';

export default () => {
  const [value, setValue] = useState<number>(100000000);

  const print = () => {
    // 新建一个线程
    const calcWorker = new Worker(new URL('../worker-calc', import.meta.url), {
      type: 'module',
    });
    // 线程之间通过 postMessage 进行通信
    calcWorker.postMessage(value);
    // 监听message事件
    calcWorker.onmessage = (e) => {
      // 关闭线程
      calcWorker.terminate();
      message.success(`计算结果:${e.data}`);
    };
    calcWorker.onerror = (error) => {
      message.error(error.message);
    };
  };

  return (
    <Space>
      <InputNumber
        style={{ width: 200 }}
        min={1000}
        value={value}
        onChange={setValue}
      />
      <Button type="primary" onClick={print}>
        计算
      </Button>
    </Space>
  );
};
