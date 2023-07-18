import React, { useState, useCallback, useRef, useMemo } from 'react';
import ListBox from './ListBox';
import './ScrollBox.less';

export interface IScrollBoxProps<T = any> {
  list: T[];
  height: Number | String;
  itemHeight: Number | String;
  buffer?: Number;
  renderBoxItem: (props: { data: T, index: number, style?: React.CSSProperties, className?: string }) => React.ReactNode;
}

const ScrollBox: React.FC<IScrollBoxProps> = (props) => {
  const { height, itemHeight, buffer, list, renderBoxItem } = props;
  // 容器的 ref
  const ScrollBoxRef = useRef()
  // 当前可视区域显示的列表的开始索引
  const [startIndex, setStartIndex] = useState(0);
  // 根据容器高度和总高度计算出容器最多能显示多少条数据
  const limit = useMemo(() => {
    return Math.ceil(height / itemHeight);
  }, [height, itemHeight]);

  // 当前可视区域显示的列表的结束索引
  const endIndex = useMemo(() => {
    return Math.min(startIndex + limit + buffer - 1, list.length - 1);
  }, [startIndex, limit, buffer]);

  // 计算实际数据产生的总高度
  const listBoxHeight = useMemo(() => {
    return list.length * itemHeight;
  }, [list, itemHeight])

  // 容器滚动的时候计算出当前可视区域显示的列表的开始索引
  const handleScroll = useCallback((e) => {
    // 判断滚动的目标是否是容器本身
    if (e.target !== ScrollBoxRef.current) {
      return;
    }
    const scrollTop = e.target.scrollTop;
    const currentIndex = Math.floor(scrollTop / itemHeight);
    if (currentIndex !== startIndex) {
      setStartIndex(currentIndex);
    }

  }, [ScrollBoxRef, itemHeight, startIndex])

  const renderList = useCallback(() => {
    const rows: React.Element[] = [];
    for (let i = startIndex; i <= endIndex; i++) {
      // 渲染每个列表项
      const itemRender = renderBoxItem({
        data: list[i],
        index: i,
        style: {
          width: "100%",
          height: itemHeight,
          boxSizing: 'border-box',
          position: "absolute",
          top: i * itemHeight,
          left: 0,
          right: 0
        },
      });
      rows.push(itemRender)
    }
    return rows;
  }, [startIndex, endIndex, renderBoxItem])

  return (
    <div className="scroll-box" style={{ height: height }} ref={ScrollBoxRef} onScroll={handleScroll}>
      <ListBox style={{ height: listBoxHeight }}>
        {
          renderList()
        }
      </ListBox>
    </div>
  )
};

ScrollBox.defaultProps = {
  buffer: 0,
}

export default ScrollBox
