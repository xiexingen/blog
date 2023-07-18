/**
 * title: 虚拟渲染
 * description: 元素高度固定的虚拟列表
 */
import React from 'react';
import { generateData } from '../bigdata'
import VariableSizeList from './components/variable-size-list'

const list = generateData(1000000);

export default () => {
  return (
    <VariableSizeList />
  );
};
