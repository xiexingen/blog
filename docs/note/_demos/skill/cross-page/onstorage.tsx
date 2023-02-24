/**
 * title: onstorage 形式
 * description: 注意，相同值的情况不会触发 onstorage
 */

import React, { useEffect } from 'react';
import { Button, Space, message } from 'antd';

const STORAGE_KEY = 'message';

export default () => {
  useEffect(() => {
    window.onstorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        message.info(`监听到消息:${e.newValue}`, 6);
      }
    };
  }, []);

  const openNewTab = () => {
    window.open(window.location.href, '_blank');
  };

  const sendCurrentDateTime = () => {
    localStorage.setItem(STORAGE_KEY, new Date().toLocaleString());
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
