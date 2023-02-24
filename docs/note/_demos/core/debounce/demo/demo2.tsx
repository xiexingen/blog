/**
 * title: 简单使用节流
 * description: 请打开浏览器查看效果
 */
import React, { useState, useMemo } from 'react';
import { Card } from 'antd';
import { throttle } from '..';

export default () => {
  const [clientX, setClientX] = useState<Number>();
  const [clientY, setClientY] = useState<Number>();

  const handleMouseMove = useMemo(() => {
    console.log('memo');
    return throttle(
      (e) => {
        console.log('-----------带防抖搜索(400ms)------------');
        setClientX(e.clientX);
        setClientY(e.clientY);
      },
      400,
      {
        leading: true,
      },
    );
  }, []);
  return (
    <Card
      onMouseMove={handleMouseMove}
      style={{ minHeight: 400 }}
      title="试试在卡片内部移动鼠标(400ms更新一次数据)"
    >
      <p>clientX:{clientX}</p>
      <p>clientY:{clientY}</p>
    </Card>
  );
};
