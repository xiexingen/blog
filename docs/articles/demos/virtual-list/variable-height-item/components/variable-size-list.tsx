import React, { useState } from 'react';
import styled, { css } from 'styled-components';

/**
 * 记录已经测量过的数据下标映射值以及最大下标值
 */
const measuredData: {
  measuredDataMap: {
    offset: number,
    height: number,
  },
  LastMeasuredItemIndex: number
} = {
  /**
   * 已经测量过的数据下标映射值(高度、距顶部的偏移量)
   */
  measuredDataMap: {
    offset: 0,
    height: 0,
  },
  /**
   * 测量过的最大下标值
   */
  LastMeasuredItemIndex: -1,
};

/**
 * 计算内容区域总高度
 * @param defaultItemHeight 每项的初始高度
 * @param dataSourceLength 数据源总数量
 * @returns
 */
const calcTotalHeight = (defaultItemHeight = 50, dataSourceLength) => {
  // 记录已测量的高度()
  let measuredHeight = 0;
  const { measuredDataMap, LastMeasuredItemIndex } = measuredData;
  // 计算已经获取过真实高度的项的高度之和
  if (LastMeasuredItemIndex >= 0) {
    const lastMeasuredItem = measuredDataMap[LastMeasuredItemIndex];
    measuredHeight = lastMeasuredItem.offset + lastMeasuredItem.height;
  }
  // 未计算过真实高度的项数
  const unMeasuredItemsCount = dataSourceLength - (measuredData.LastMeasuredItemIndex + 1);
  // 预测总高度
  const totalHeight = measuredHeight + unMeasuredItemsCount * defaultItemHeight;
  console.log('totalHeight', totalHeight);
  console.log('LastMeasuredItemIndex', measuredData.LastMeasuredItemIndex);
  console.log('unMeasuredItemsCount', unMeasuredItemsCount);
  return totalHeight;
}

/**
 * 根据当前下标获取到当前项的 height 和 offset
 * @param props {getItemHeight}
 * @param index
 * @returns
 */
const getItemMetaData = (getItemHeightFunc, index) => {
  const { measuredDataMap, LastMeasuredItemIndex } = measuredData;
  // 如果当前索引比已记录的索引要大，说明要计算当前索引的项的size和offset
  if (index > LastMeasuredItemIndex) {
    let offset = 0;
    // 计算当前能计算出来的最大offset值
    if (LastMeasuredItemIndex >= 0) {
      const lastMeasuredItem = measuredDataMap[LastMeasuredItemIndex];
      offset += lastMeasuredItem.offset + lastMeasuredItem.height;
    }
    // 计算直到index为止，所有未计算过的项
    for (let i = LastMeasuredItemIndex + 1; i <= index; i++) {
      const currentItemSize = getItemHeightFunc(i);
      measuredDataMap[i] = { height: currentItemSize, offset };
      offset += currentItemSize;
    }
    // 更新已计算的项的索引值
    measuredData.LastMeasuredItemIndex = index;
  }
  return measuredDataMap[index];
};

const getStartIndex = (props, scrollTop) => {
  const { getItemHeight, dataSourceLength } = props;
  let index = 0;
  while (true) {
    const currentOffset = getItemMetaData(getItemHeight, index).offset;
    if (currentOffset >= scrollTop) {
      return index;
    }
    if (index >= dataSourceLength) {
      return dataSourceLength;
    }
    index++
  }
}

const getEndIndex = (props, startIndex) => {
  const { getItemHeight, dataSourceLength, height } = props;
  // 获取可视区内开始的项
  const startItem = getItemMetaData(getItemHeight, startIndex);
  // 可视区内最大的offset值
  const maxOffset = startItem.offset + height;
  // 开始项的下一项的offset，之后不断累加此offset，直到等于或超过最大offset，就是找到结束索引了
  let offset = startItem.offset + startItem.height;
  // 结束索引
  let endIndex = startIndex;
  // 累加offset
  while (offset <= maxOffset && endIndex < (dataSourceLength - 1)) {
    endIndex++;
    const currentItem = getItemMetaData(getItemHeight, endIndex);
    offset += currentItem.height;
  }
  return endIndex;
};

const getRangeToRender = (props, scrollTop) => {
  const dataSourceLength = props.dataSource?.length ?? 0;
  const startIndex = getStartIndex({
    getItemHeight: props.getItemHeight,
    dataSourceLength,
  }, scrollTop);
  const endIndex = getEndIndex({
    getItemHeight: props.getItemHeight,
    dataSourceLength,
    height: props.height,
  }, startIndex);
  return [
    Math.max(0, startIndex - 2),
    Math.min(dataSourceLength - 1, endIndex + 2),
    startIndex,
    endIndex,
  ];
};

/**
 * 滚动容器
 */
const ScrollBox = styled.div.attrs(props => ({
  $width: props.$width || '100%',
  $height: props.$height || 400,
})) <{
  $width?: string | number;
  $height?: string | number;
}>`
  position: relative;
  overflow: auto;
  will-change: transform;
  width: ${props => typeof props.$width === 'number' ? `${props.$width}px` : props.$width};
  height: ${props => typeof props.$height === 'number' ? `${props.$height}px` : props.$height};
`;

/**
 * 实际放置内容的容器
 */
const ListBox = styled.div.attrs(props => ({
  $width: props.$width || '100%',
  $height: props.$height || 400,
})) <{
  $width?: string | number;
  $height?: string | number;
}>`
width: ${props => typeof props.$width === 'number' ? `${props.$width}px` : props.$width};
height: ${props => typeof props.$height === 'number' ? `${props.$height}px` : props.$height};
`

export interface IVariableSizeList<T = any> {
  dataSource: T[];
  height: number;
  defaultItemHeight?: number;
  getItemHeight: (index: number) => number;
  buffer?: number;
  renderItem: (props: { data: T, index: number, style?: React.CSSProperties, className?: string }) => React.ReactNode;
}

const VariableSizeList = (props) => {
  const { height, width, dataSource, defaultItemHeight, renderItem } = props;
  const [scrollTop, setScrollOffset] = useState(0);
  const contentHeight = calcTotalHeight(defaultItemHeight, dataSource.length);

  const handleSetScrollTop = (e) => {
    const { scrollTop } = e.currentTarget;
    setScrollOffset(scrollTop);
  }

  const renderChildren = () => {
    const [startIndex, endIndex] = getRangeToRender(props, scrollTop)
    const rows: React.ReactElement[] = [];
    for (let i = startIndex; i <= endIndex; i++) {
      const item = getItemMetaData(props.getItemHeight, i);
      const itemEle = renderItem({
        index: i,
        data: dataSource[i],
        style: {
          position: 'absolute',
          height: item.height,
          width: '100%',
          top: item.offset,
        }
      });
      rows.push(itemEle);
    }
    return rows;
  }

  return (
    <ScrollBox $width={width} $height={height} onScroll={handleSetScrollTop}>
      <ListBox $height={contentHeight}>
        {
          renderChildren()
        }
      </ListBox>
    </ScrollBox>
  );
};

VariableSizeList.defaultProps = {
  defaultItemHeight: 50,
  buffer: 5,
}

export default VariableSizeList;
