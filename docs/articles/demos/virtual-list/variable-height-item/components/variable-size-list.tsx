import React, { useState } from 'react';
import styled, { css } from 'styled-components';

// 元数据
const measuredData = {
  measuredDataMap: {},
  LastMeasuredItemIndex: -1,
};

const estimatedHeight = (defaultEstimatedItemSize = 50, itemCount) => {
  let measuredHeight = 0;
  const { measuredDataMap, LastMeasuredItemIndex } = measuredData;
  // 计算已经获取过真实高度的项的高度之和
  if (LastMeasuredItemIndex >= 0) {
    const lastMeasuredItem = measuredDataMap[LastMeasuredItemIndex];
    measuredHeight = lastMeasuredItem.offset + lastMeasuredItem.size;
  }
  // 未计算过真实高度的项数
  const unMeasuredItemsCount = itemCount - measuredData.LastMeasuredItemIndex - 1;
  // 预测总高度
  const totalEstimatedHeight = measuredHeight + unMeasuredItemsCount * defaultEstimatedItemSize;
  return totalEstimatedHeight;
}

const getItemMetaData = (props, index) => {
  const { itemSize } = props;
  const { measuredDataMap, LastMeasuredItemIndex } = measuredData;
  // 如果当前索引比已记录的索引要大，说明要计算当前索引的项的size和offset
  if (index > LastMeasuredItemIndex) {
    let offset = 0;
    // 计算当前能计算出来的最大offset值
    if (LastMeasuredItemIndex >= 0) {
      const lastMeasuredItem = measuredDataMap[LastMeasuredItemIndex];
      offset += lastMeasuredItem.offset + lastMeasuredItem.size;
    }
    // 计算直到index为止，所有未计算过的项
    for (let i = LastMeasuredItemIndex + 1; i <= index; i++) {
      const currentItemSize = itemSize(i);
      measuredDataMap[i] = { size: currentItemSize, offset };
      offset += currentItemSize;
    }
    // 更新已计算的项的索引值
    measuredData.LastMeasuredItemIndex = index;
  }
  return measuredDataMap[index];
};
const getStartIndex = (props, scrollOffset) => {
  const { itemCount } = props;
  let index = 0;
  while (true) {
    const currentOffset = getItemMetaData(props, index).offset;
    if (currentOffset >= scrollOffset) return index;
    if (index >= itemCount) return itemCount;
    index++
  }
}

const getEndIndex = (props, startIndex) => {
  const { height, itemCount } = props;
  // 获取可视区内开始的项
  const startItem = getItemMetaData(props, startIndex);
  // 可视区内最大的offset值
  const maxOffset = startItem.offset + height;
  // 开始项的下一项的offset，之后不断累加此offset，直到等于或超过最大offset，就是找到结束索引了
  let offset = startItem.offset + startItem.size;
  // 结束索引
  let endIndex = startIndex;
  // 累加offset
  while (offset <= maxOffset && endIndex < (itemCount - 1)) {
    endIndex++;
    const currentItem = getItemMetaData(props, endIndex);
    offset += currentItem.size;
  }
  return endIndex;
};

const getRangeToRender = (props, scrollOffset) => {
  const { itemCount } = props;
  const startIndex = getStartIndex(props, scrollOffset);
  const endIndex = getEndIndex(props, startIndex);
  return [
    Math.max(0, startIndex - 2),
    Math.min(itemCount - 1, endIndex + 2),
    startIndex,
    endIndex,
  ];
};

/**
 * 滚动容器
 */
const ScrollBox = styled.div.attrs(props => ({
  $width: props.$width || '100%',
  $height: props.$height || '400px'
})) <{
  $width?: string;
  $height?: string;
}>`
  position: relative;
  overflow: auto;
  will-change: transform;
  width: ${props => props.$width};
  height: ${props => props.$height};
`;

/**
 * 实际放置内容的容器
 */
const ListBox = styled.div.attrs(props => ({
  $width: props.$width || '100%',
  $height: props.$height || '400px'
})) <{
  $width?: string;
  $height?: string;
}>`
  width: ${props => props.$width || 'auto'};
  height: ${props => props.$height || 'auto'};
`

const VariableSizeList = (props) => {
  const { height, width, itemCount, itemEstimatedSize, renderItem } = props;
  const [scrollOffset, setScrollOffset] = useState(0);
  const contentHeight = estimatedHeight(itemEstimatedSize, itemCount);

  const renderChildren = () => {
    const [startIndex, endIndex, originStartIndex, originEndIndex] = getRangeToRender(props, scrollOffset)
    const rows: React.ReactElement[] = [];
    for (let i = startIndex; i <= endIndex; i++) {
      const item = getItemMetaData(props, i);
      const itemEle = renderItem({
        index: i,
        data: item,
        style: {
          position: 'absolute',
          height: item.size,
          width: '100%',
          top: item.offset,
        }
      });
      rows.push(itemEle);
    }
    return rows;
  }

  const scrollHandle = (e) => {
    const { scrollTop } = e.currentTarget;
    setScrollOffset(scrollTop);
  }

  return (
    <ScrollBox $width={width} $height={height} onScroll={scrollHandle}>
      <ListBox $width="100%" $height={contentHeight}>
        {
          renderChildren()
        }
      </ListBox>
    </ScrollBox>
  );
};

export default VariableSizeList;
