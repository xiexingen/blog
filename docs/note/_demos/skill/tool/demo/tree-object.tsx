/**
 * title: 树转 对象
 * description: 将树转为对象然后直接使用
 */

import React from 'react';
import { treeToObject } from '..';
import { getTree } from './data';

const tree = getTree();

export default () => {
  const map = treeToObject(tree, 'id', 'childrens');
  return <pre>{JSON.stringify(map, null, 4)}</pre>;
};
