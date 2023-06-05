/**
 * title: 虚拟渲染
 * description: 单项高度固定的虚拟渲染
 */
import React from 'react';
import { generateData } from '../bigdata'
import ScrollBox from './components/ScrollBox';

const list = generateData(1000000);

export default () => {
  return (
    <ScrollBox
      list={list}
      buffer={1}
      height={360}
      itemHeight={46}
      renderBoxItem={({ data, index, style }) => {
        return (
          <div className="item" style={style}>
            {data.id} - {data.name} - {data.age} - {data.address} -{data.salary}
          </div>
        )
      }}
    />
  );
};
