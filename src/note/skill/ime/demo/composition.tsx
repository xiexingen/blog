/**
 * title: 监听composition事件自行处理
 * desc: 原生的事件是compositionstart、compositionupdate、compositionend(试试输入中文)
 */

import React, { useState, useRef } from 'react';
import { Input } from 'antd';

export default () => {
  const [text, setText] = useState('');
  const isCompositonRef = useRef(false);

  // 处理composition
  const handleComposition = (e) => {
    console.log(e.type);
    if (e.type === 'compositionend') {
      isCompositonRef.current = false;
      // 需要在compositionend后触发下change
      handleChange(e);
    } else {
      isCompositonRef.current = true;
    }
  };

  // 处理内容change
  const handleChange = (e) => {
    // 仅仅非composition状态才改变内容
    console.log(isCompositonRef.current);
    if (e.target instanceof HTMLInputElement && !isCompositonRef.current) {
      setText(e.target.value);
    }
  };

  return (
    <>
      <p>输入的内容:{text}</p>
      <Input
        placeholder="试试输入中文"
        onCompositionStart={handleComposition}
        onCompositionUpdate={handleComposition}
        onCompositionEnd={handleComposition}
        onChange={handleChange}
      />
    </>
  );
};
