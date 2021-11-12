/**
 * title: 数组转 对象
 * desc: 将数组转为对象然后直接使用
 */

import React from 'react';
import { Card, Row, Col } from 'antd';
import { arrayToObject } from '..';
import { getArray } from './data';

const arr = getArray();

export default () => {
  const specifyKeyMap = arrayToObject(arr, 'id');
  const specifyKeyValueMap = arrayToObject(arr, 'id', 'name');
  const specifyKeyValueFuncMap = arrayToObject(arr, 'id', (item) => {
    return {
      ...item,
      append: new Date(),
    };
  });
  return (
    <Row gutter={8}>
      <Col span={8}>
        <Card title="指定key">
          <pre>{JSON.stringify(specifyKeyMap, null, 4)}</pre>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="指定字符串属性值">
          <pre>{JSON.stringify(specifyKeyValueMap, null, 4)}</pre>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="指定函数属性值">
          <pre>{JSON.stringify(specifyKeyValueFuncMap, null, 4)}</pre>
        </Card>
      </Col>
    </Row>
  );
};
