/**
 * title: 无脑渲染版
 * description: 不进行任何优化，直接渲染所有数据(百万数据下直接挂了，调到了五万，感觉有明显卡顿)
 */
import React from 'react';
import { generateData } from './bigdata'
import './index.less';

const list = generateData(50000);

export default () => {
  return (
    <div className="list-container" style={{ height: 360 }}>
      <div className="list-box">
        {
          list.map((item, index) => {
            return (
              <div className="item" key={item.id}>
                {index + 1} - {item.name} - {item.age} - {item.address} -{item.salary}
              </div>
            )
          })
        }
      </div>
    </div>
  );
};
