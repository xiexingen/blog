/**
 * title: 数组转 对象
 * desc: 将数组转为对象然后直接使用
 */

import React from 'react';
import { arrayToObject } from '..';
import { getArray } from './data';

const arr = getArray();

export default () => {
  const map = arrayToObject(arr, 'id');
  return <pre>{JSON.stringify(map, null, 4)}</pre>;
};
