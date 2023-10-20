import React, { useEffect, useRef } from 'react';

interface ISize {
  height: Number;
  width: Number;
}

interface ItemProp {
  children: any;
  style?: React.CSSProperties
  onSizeChange?: (size: ISize) => void;
}

const Item: React.FC<ItemProp> = (props) => {
  const resizeObsolveRef = useRef<ResizeObserver>();
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    resizeObsolveRef.current = new ResizeObserver((entiers) => {
      debugger
      const target = entiers[0].target as HTMLDivElement;
      props.onSizeChange?.({
        height: target.offsetHeight,
        width: target.offsetWidth
      })
    })
    resizeObsolveRef.current.observe(itemRef.current as HTMLDivElement);
    return () => {
      resizeObsolveRef.current?.disconnect();
    }
  }, [])

  return <div ref={itemRef} style={props.style}>
    {props.children}
  </div>
}

export default Item;
