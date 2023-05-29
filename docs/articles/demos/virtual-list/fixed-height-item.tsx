/**
 * title: 虚拟渲染
 * description: 单项高度固定的虚拟渲染
 */
import React, { useState, useCallback, useRef, useMemo } from 'react';
import { generateData } from './bigdata'
import ListContainer from './components/ListContainer';
import './index.less';

const list = generateData(1000000);

export default () => {
  return (
    <ListContainer
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
