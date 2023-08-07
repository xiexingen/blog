/**
 * title: 虚拟渲染
 * description: 元素高度固定的虚拟列表
 */
import React from 'react';
import { generateData } from '../bigdata'
import ScrollBox from './components/ScrollBox';
import './index.less';

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
          <div className={`item ${index % 2 == 0 ? 'list-item-even' : 'list-item-odd'}`} style={style}>
            {data.id} - {data.name} - {data.age} - {data.address} -{data.salary}
          </div>
        )
      }}
    />
  );
};
