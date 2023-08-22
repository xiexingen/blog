/**
 * title: 虚拟渲染
 * description: 元素高度不固定的虚拟列表
 */
import React from 'react';
import { generateData } from '../bigdata'
import VariableSizeList from './components/variable-size-list'

const list = generateData(1000);

// 生成模拟每行数据高度的数组
const rowSizes = new Array(list.length).fill(true).map(() => 25 + Math.round(Math.random() * 55))
// 根据下标获取行高
const getItemHeight = (index) => rowSizes[index];

export default () => {
  return (
    <VariableSizeList
      height={300}
      dataSource={list}
      getItemHeight={getItemHeight}
      defaultItemHeight={40}
      renderItem={({ data, index, style }) => {
        return (
          <div className={`item ${index % 2 == 0 ? 'list-item-even' : 'list-item-odd'}`} style={style}>
            {data.id} - {data.name} - {data.age} - {data.address} -{data.salary}
          </div>
        )
      }}
    />
  );
};
