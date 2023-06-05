import React, { memo, useState, useMemo, useCallback, useRef, useEffect } from "react";
import { generateData } from './bigdata'

const list = generateData(1000000);

const CompareResult = {
  eq: 1,
  lt: 2,
  gt: 3,
}

function binarySearch(list, value, compareFunc) {
  let start = 0;
  let end = list.length = 1;
  let tempIndex = 0;
  while (start <= end) {
    tempIndex = Math.floor((start + end) / 2);
    const midValue = list[tempIndex];
    const compareRes = compareFunc(midValue, value);
    if (compareRes === CompareResult.eq) {
      return tempIndex;
    }
    if (compareRes === CompareResult.lt) {
      start = tempIndex + 1;
    }
    else if (compareRes === CompareResult.gt) {
      end = tempIndex - 1;
    }
  }
  return tempIndex;
}

const Container = ({ height, children, ...props }) => {
  return (
    <div style={{ overflowY: 'auto', height }} {...props}>
      {children}
    </div>
  )
}

const ListBox = ({ children, ...props }) => {
  return (
    <div style={{ backgroundColor: 'pink', position: 'relative' }}  {...props}>
      {children}
    </div>
  )
}

const Wraper = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

const Item = ({ data, index, key, style }) => {
  return (
    <div key={key} id={`item-${index}`} style={style}>
      {data.id} - {data.name} - {data.age} - {data.address} -{data.salary}
      {
        index % 2 === 0 ? <div style={{ height: "100px", backgroundColor: "red" }}>---</div> : <div style={{ height: "60px", backgroundColor: "blue" }}></div>
      }
    </div>
  )
}

const VirList4 = memo(function ({
  list = [],
  containerHeight = 800,
  ItemBox = <></>,
  estimatedItemHeight = 80,
  ...props }) {
  const containerRef = useRef();
  const wrapperRef = useRef();
  const [startIndex, setStartIndex] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const [positionCache, setPositionCache] = useState(function () {
    const positList = [];
    list.forEach((_, i) => {
      positList[i] = {
        index: i,
        height: estimatedItemHeight,
        top: i * estimatedItemHeight,
        bottom: (i + 1) * estimatedItemHeight,
      }
    })
    return positList;
  })

  const limit = useMemo(function () {
    let sum = 0
    let i = 0
    for (; i < positionCache.length; i++) {
      sum += positionCache[i].height;
      if (sum >= containerHeight) {
        break
      }
    }
    return i;
  }, [positionCache]);

  const endIndex = useMemo(function () {
    return Math.min(startIndex + limit, list.length - 1);
  }, [startIndex, limit]);

  const wraperHeight = useMemo(function () {
    let len = positionCache.length;
    if (len !== 0) {
      return positionCache[len - 1].bottom
    }
    return list.length * estimatedItemHeight;
  }, [list, positionCache, estimatedItemHeight])

  useEffect(function () {
    console.log(wrapperRef.current)
    if (!Array.isArray(wrapperRef.current?.childNodes)) {
      return;
    }
    const nodeList = wrapperRef.current.childNodes;
    const positList = [...positionCache]
    let needUpdate = false;
    nodeList.forEach((node, i) => {
      let newHeight = node.getBoundingClientRect().height;
      const nodeID = Number(node.id.split("-")[1]);
      const oldHeight = positionCache[nodeID]["height"];
      const dValue = oldHeight - newHeight;
      if (dValue) {
        needUpdate = true;
        positList[nodeID].height = node.getBoundingClientRect().height;
        positList[nodeID].bottom = nodeID > 0 ? (positList[nodeID - 1].bottom + positList[nodeID].height) : positList[nodeID].height;
        positList[nodeID].top = nodeID > 0 ? positList[nodeID - 1].bottom : 0;
        for (let j = nodeID + 1, len = positList.length; j < len; j++) {
          positList[j].top = positList[j - 1].bottom;
          positList[j].bottom += dValue;
        }
      }
    })
    if (needUpdate) {
      setPositionCache(positList)
    }
  }, [scrollTop, wrapperRef.current?.childNodes])

  const getTransform = useCallback(function () {
    return `translate3d(0,${startIndex >= 1 ? positionCache[startIndex - 1].bottom : 0}px,0)`
  }, [positionCache, startIndex]);

  const getStartIndex = (scrollTop) => {
    let index = binarySearch(positionCache, scrollTop, (currentValue, targetValue) => {
      const currentCompareValue = currentValue.bottom;
      if (currentCompareValue === targetValue) {
        return CompareResult.eq;
      }
      if (currentCompareValue < targetValue) {
        return CompareResult.lt;
      }
      return CompareResult.gt;
    });
    const targetItem = positionCache[index];
    if (targetItem.bottom < scrollTop) {
      index += 1;
    }
    return index;
  }

  const handleSrcoll = useCallback(function (e) {
    if (e.target !== containerRef.current) return;
    const scrollTop = e.target.scrollTop;
    setScrollTop(scrollTop)
    const currentStartIndex = getStartIndex(scrollTop);
    console.log(currentStartIndex);
    if (currentStartIndex !== startIndex) {
      setStartIndex(currentStartIndex);
      console.log(startIndex + "====--" + limit + "--====" + endIndex)
    }

  }, [containerRef, estimatedItemHeight, startIndex])

  const renderList = useCallback(function () {
    const rows: any[] = [];
    for (let i = startIndex; i <= endIndex; i++) {
      rows.push(<ItemBox
        data={list[i]}
        index={i}
        key={i}
        style={{
          width: "100%",
          borderBottom: "1px solid #aaa",
        }} />)
    }
    return rows;
  }, [startIndex, endIndex, ItemBox])

  return (<Container
    height={containerHeight + "px"}
    ref={containerRef}
    onScroll={handleSrcoll}>
    <ListBox
      style={{ height: wraperHeight + "px" }}>
      <Wraper
        style={{
          transform: getTransform()
        }}
        ref={wrapperRef}
      >
        {renderList()}
      </Wraper>
    </ListBox>
  </Container>)
})

export default () => {
  return (
    <VirList4
      list={list}
      ItemBox={Item}
    />
  )
};
