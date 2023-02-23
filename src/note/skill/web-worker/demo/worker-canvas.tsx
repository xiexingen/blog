/**
 * title: 离线 Canvas
 * desc: 在 web worker 中绘制 Canvas
 */
import React, { useRef } from 'react';
import { Space, Button, message } from 'antd';

export default () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const print = () => {
    if (!canvasRef.current) {
      throw new Error('画板尚未初始化');
    }
    // 使用 canvas 的 transferControlToOffscreen 函数获取一个OffscreenCanvas对象
    // @ts-ignore
    const offscreen = canvasRef.current.transferControlToOffscreen();
    // 新建一个线程
    const canvasWorker = new Worker(
      new URL('../worker-canvas', import.meta.url),
      { type: 'module' },
    );
    // 线程之间通过 postMessage 进行通信(注意：第二个参数不能省略)
    canvasWorker.postMessage({ canvas: offscreen }, [offscreen]);
    // 监听message事件
    canvasWorker.onmessage = (e) => {
      message.success('绘制完成');
    };
    canvasWorker.onerror = (error) => {
      message.error(error.message);
    };
  };

  return (
    <Space direction="vertical" size="large">
      <canvas ref={canvasRef} width="200" height="200"></canvas>
      <Button type="primary" onClick={print}>
        绘制
      </Button>
    </Space>
  );
};
