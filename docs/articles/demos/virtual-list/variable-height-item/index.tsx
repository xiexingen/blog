/**
 * title: 虚拟渲染
 * description: 元素高度不固定的虚拟列表
 */
import React from 'react';
// import { generateData } from '../bigdata'
import VariableSizeList from './components/variable-size-list'

// const list = generateData(1000000);

const rowSizes = new Array(1000).fill(true).map(() => 25 + Math.round(Math.random() * 55))
const getItemSize = (index) => rowSizes[index];

export default () => {
  return (
    <VariableSizeList
      height="300px"
      itemSize={getItemSize}
      itemCount={10000}
      renderItem={({ index, style }) => {
        return (
          <div key={index} className={index % 2 ? 'list-item-odd' : 'list-item-even'} style={style} >
            Row {index}
          </div>
        )
      }}
    />
  );
};
