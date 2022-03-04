/**
 * title: 序列化
 * desc: 将对象序列化
 */
import React from 'react';
import qs from 'query-string';
import { Input, Form, Checkbox, Select } from 'antd';

const ArrayFormatOptions = [
  {
    label: 'none',
    value: 'none',
    tip: '{foo: [1, 2, 3]} ==> foo=1&foo=2&foo=3',
  },
  {
    label: 'bracket',
    value: 'bracket',
    tip: '{foo: [1, 2, 3]} ==> foo[]=1&foo[]=2&foo[]=3',
  },
  {
    label: 'index',
    value: 'index',
    tip: '{foo: [1, 2, 3]} ==> foo[0]=1&foo[1]=2&foo[2]=3',
  },
  {
    label: 'comma',
    value: 'comma',
    tip: '{foo: [1, 2, 3]} ==> foo=1,2,3',
  },
  {
    label: 'separator',
    value: 'separator',
    tip: '{foo: [1, 2, 3]} ==> foo=1|2|3',
  },
  {
    label: 'bracket-separator',
    value: 'bracket-separator',
    tip: '{foo: [1, 2, 3]} ==> foo[]=1|2|3',
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
        json: JSON.stringify({ name: 'xxg', age: null, arr: [0, 1] }, null, 2),
        encode: true,
        arrayFormat: 'none',
        arrayFormatSeparator: ',',
        skipNull: false,
        skipEmptyString: false,
      }}
    >
      <Form.Item
        valuePropName="checked"
        tooltip="是否编码(默认:true)"
        label="encode"
        name="encode"
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
        tooltip="跳过null|undefined(默认:false)"
        label="skipNull"
        name="skipNull"
      >
        <Checkbox />
      </Form.Item>
      <Form.Item
        valuePropName="checked"
        tooltip="跳过空字符串(默认:false)"
        label="skipEmptyString"
        name="skipEmptyString"
      >
        <Checkbox />
      </Form.Item>
      <Form.Item
        name="json"
        label="json"
        rules={[
          { required: true },
          {
            validator: (_, value) => {
              if (value && JSON.parse(value)) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('不是一个有效的json对象'));
            },
          },
        ]}
      >
        <Input.TextArea
          placeholder="请输入json对象"
          autoSize={{ minRows: 4 }}
        />
      </Form.Item>
      <Form.Item label="结果" shouldUpdate>
        {({ getFieldsValue }) => {
          const { json, ...config } = getFieldsValue(true);
          let queryStr = '';
          try {
            queryStr = qs.stringify(JSON.parse(json), config);
          } catch {
            console.log('输入非json对象');
          }
          return <code>{queryStr}</code>;
        }}
      </Form.Item>
      <Form.Item label="代码" shouldUpdate>
        {({ getFieldsValue }) => {
          const { json, ...config } = getFieldsValue(true);
          return (
            <code>
              qs.stringify({json},{JSON.stringify(config, null, 2)})
            </code>
          );
        }}
      </Form.Item>
    </Form>
  );
};
