/**
 * title: Broadcast Channel 形式
 */

import React, { useEffect, useRef } from 'react';
import { Button, Space, message } from 'antd';

export default () => {
  const broadcastChannelRef = useRef<BroadcastChannel>();
  useEffect(() => {
    // 创建
    const broadcastChannel = new BroadcastChannel('test');
    broadcastChannelRef.current = broadcastChannel;
    // 监听消息
    broadcastChannel.onmessage = function (e) {
      message.info(`监听到消息:${e.data}`, 6);
    };

    // 也可以使用下面的形式
    // broadcastChannel.addEventListener('message',(e)=>{
    //   message.info(`监听到消息:${e.data}`, 5000);
    // })

    return () => {
      broadcastChannel.close();
    };
  }, []);

  const openNewTab = () => {
    window.open(window.location.href, '_blank');
  };

  const sendCurrentDateTime = () => {
    broadcastChannelRef?.current?.postMessage(new Date());
  };

  return (
    <>
      <Space>
        <Button onClick={openNewTab}>新开 Tab 页</Button>
        <Button onClick={sendCurrentDateTime}>广播当前时间</Button>
      </Space>
    </>
  );
};
