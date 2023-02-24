/**
 * title: 解析
 * description: 将查询串解析成对象
 */

import React, { useState } from 'react';
import qs from 'query-string';
import { Input, Form, Checkbox, Select } from 'antd';

const ArrayFormatOptions = [
  {
    label: 'none',
    value: 'none',
    tip: 'foo=1&foo=2&foo=3 ==> {foo: [1, 2, 3]} ',
  },
  {
    label: 'bracket',
    value: 'bracket',
    tip: 'foo[]=1&foo[]=2&foo[]=3 ==>{foo: [1, 2, 3]}',
  },
  {
    label: 'index',
    value: 'index',
    tip: 'foo[0]=1&foo[1]=2&foo[2]=3 ==> {foo: [1, 2, 3]}',
  },
  {
    label: 'comma',
    value: 'comma',
    tip: 'foo=1,2,3 ==> {foo: [1, 2, 3]}',
  },
  {
    label: 'separator',
    value: 'separator',
    tip: 'foo=1|2|3 ==> {foo: [1, 2, 3]}',
  },
  {
    label: 'bracket-separator',
    value: 'bracket-separator',
    tip: 'foo[]=1|2|3 ==> {foo: [1, 2, 3]}',
  },
];

export default () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      labelWrap
      labelCol={{
        style: { width: 180 },
      }}
      initialValues={{
        query: '?id=1&arr=1&arr=2&arr=3',
        decode: true,
        arrayFormat: 'none',
        arrayFormatSeparator: ',',
        parseNumbers: false,
        parseBooleans: false,
        // parseFragmentIdentifier: false,
      }}
    >
      <Form.Item
        valuePropName="checked"
        tooltip="是否解码key&value(默认:true)"
        label="decode"
        name="decode"
      >
        <Checkbox />
      </Form.Item>
      <Form.Item
        tooltip="数组格式化方式(默认:none)"
        label="arrayFormat"
        name="arrayFormat"
      >
        <Select>
          {ArrayFormatOptions.map((item) => {
            return (
              <Select.Option key={item.value} value={item.value}>
                <div>
                  <label>{item.label}</label>
                  <p>{item.tip}</p>
                </div>
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.arrayFormat !== currentValues.arrayFormat
        }
      >
        {({ getFieldValue }) =>
          ['none', 'bracket', 'index'].includes(
            getFieldValue('arrayFormat'),
          ) === false ? (
            <Form.Item
              tooltip="数组格式化分割符(默认:,"
              label="arrayFormatSeparator"
              name="arrayFormatSeparator"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item
        valuePropName="checked"
        tooltip="解析数字类型(默认:false)"
        label="parseNumbers"
        name="parseNumbers"
      >
        <Checkbox />
      </Form.Item>
      <Form.Item
        valuePropName="checked"
        tooltip="解析boolean类型(默认:false)"
        label="parseBooleans"
        name="parseBooleans"
      >
        <Checkbox />
      </Form.Item>
      {/* <Form.Item
        valuePropName="checked"
        tooltip="解析boolean类型(默认:false)"
        help="foo=bar#xyz ==> {query: {foo: 'bar'}}"
        label="parseFragmentIdentifier"
        name="parseFragmentIdentifier"
      >
        <Checkbox />
      </Form.Item> */}
      <Form.Item name="query" label="json" rules={[{ required: true }]}>
        <Input placeholder="请输入查询串" />
      </Form.Item>
      <Form.Item label="结果" shouldUpdate>
        {({ getFieldsValue }) => {
          const { query, ...config } = getFieldsValue(true);
          const obj = qs.parse(query, config);
          return <code>{JSON.stringify(obj, null, 2)}</code>;
        }}
      </Form.Item>
      <Form.Item label="代码" shouldUpdate>
        {({ getFieldsValue }) => {
          const { query, ...config } = getFieldsValue(true);
          return (
            <code>
              qs.parse({query},{JSON.stringify(config, null, 2)})
            </code>
          );
        }}
      </Form.Item>
    </Form>
  );
};
