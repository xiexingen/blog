/**
 * title: 基础使用
 * desc: 可以监听、绑定、解绑事件
 */
import React, { useState, useEffect, useRef } from 'react';
import { Button, Space } from 'antd';
import EventEmitter from '..';

let eventBus = new EventEmitter();

// 模拟服务器端推送
setInterval(() => {
  eventBus.emit('message', new Date().toString());
}, 1000);

export default () => {
  const [list, setList] = useState<string[]>([]);

  const handleRef = useRef((data) => {
    setList((arr: any) => {
      if (arr.length > 10) {
        return [data, ...arr.slice(0, 10)];
      }
      return [data, ...arr];
    });
  });

  useEffect(() => {
    return () => {
      // 解绑事件
      eventBus.off('message');
    };
  }, []);

  const unListener = () => {
    eventBus.off('message', handleRef.current);
  };

  const listener = () => {
    eventBus.off('message', handleRef.current);
    eventBus.on('message', handleRef.current);
  };

  const emitOnce = () => {
    eventBus.emit('message', '这条消息只会触发一次');
  };

  return (
    <>
      <Space>
        <Button onClick={listener}>监听</Button>
        <Button onClick={unListener}>取消监听</Button>
        <Button onClick={emitOnce}>触发单次</Button>
      </Space>
      <ul>
        {list.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </>
  );
};
