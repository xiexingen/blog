/**
 * title: 数组转 对象
 * desc: 将数组转为对象然后直接使用
 */

import React from 'react';
import { arrayToTree } from '..';
import { getArray } from './data';

const arr = getArray();

export default () => {
  const map = arrayToTree(arr, {
    keyName: 'id',
    childrenName: 'childrens',
    parentName: 'pid',
  });
  return <pre>{JSON.stringify(map, null, 4)}</pre>;
};
