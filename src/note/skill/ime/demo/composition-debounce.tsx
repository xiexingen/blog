/**
 * title: 监听composition事件自行处理
 * desc: 原生的事件是compositionstart、compositionupdate、compositionend(试试输入中文)
 */

import React, { useState, useRef } from 'react';
import { Input } from 'antd';

/**
 * 函数防抖
 * - 支持立即执行
 * - 支持取消功能
 * - 函数可能有返回值
 * @param {function} func 执行的事件
 * @param {number} wait 高频延迟时间 毫秒
 * @param {boolean?} immediate 是否立即执行 【可选】
 * @returns function
 */
function debounce(func, wait, immediate) {
  let timeout;
  const debounced = function () {
    const context = this;
    const args = arguments;

    timeout && clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行，则不再执行
      const callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) {
        func.apply(context, args);
      }
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}

export default () => {
  const [text, setText] = useState('');
  const isCompositonRef = useRef(false);

  // 处理composition
  const handleComposition = (e) => {
    if (e.type === 'compositionend') {
      isCompositonRef.current = false;
      // 需要在compositionend后触发下change
      handleChange(e);
    } else {
      isCompositonRef.current = true;
    }
    if (!isCompositonRef.current) {
      debounce(
        () => {
          if (!isCompositonRef.current) {
            setText(e.target.value);
          }
        },
        200,
        false,
      );
    }
  };

  // 处理内容change
  const handleChange = (e) => {
    // 仅仅非composition状态才改变内容
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
