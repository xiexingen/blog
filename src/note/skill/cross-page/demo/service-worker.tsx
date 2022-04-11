/**
 * title: serviceWorker 形式
 */

import React, { useEffect } from 'react';
import { Button, Space, message } from 'antd';

export default () => {
  useEffect(() => {
    // 判断当前浏览器是否支持serviceWorker
    if ('serviceWorker' in navigator) {
      /**
       * 创建并指定对应的执行内容，scope 参数是可选的，可以用来指定你想让 service worker 控制的内容的子目录
       * 在这里我们指定了 '/'，表示根域下的所有内容,这也是默认值
       */
      navigator.serviceWorker
        .register('/cross-page-service-worker.js', { scope: './' })
        .then(function (registration) {
          console.log('Service Worker 注册成功 ', registration.scope);
        })
        .catch(function (err) {
          console.log('Service Worker 注册失败:', err);
        });

      navigator.serviceWorker.addEventListener('message', function (e) {
        const data = e.data;
        message.info(`监听到消息:${data}`, 6);
      });
    }
  }, []);

  const openNewTab = () => {
    window.open(window.location.href, '_blank');
  };

  const sendCurrentDateTime = () => {
    navigator.serviceWorker?.controller?.postMessage?.(
      new Date().toLocaleString(),
    );
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
