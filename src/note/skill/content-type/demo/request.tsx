/**
 * title: 模拟请求
 * desc: 模拟各种情况下的请求头,请打开F12查看网络请求
 */

import React from 'react';
import qs from 'query-string';
import { Input, Form, Checkbox, Select, Divider, Button } from 'antd';
import axios from 'axios';

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

const ArrayMethods = [
  'get',
  'post',
  'put',
  'patch',
  'options',
  'head',
  'delete',
].map((item) => ({
  label: item,
  value: item,
}));

const ArrayContentTypes = [
  'application/json',
  'application/x-www-form-urlencoded',
  'multipart/form-data',
].map((item) => ({
  label: item,
  value: item,
}));

export default () => {
  const [form] = Form.useForm();

  const handleSendRequest = ({ body, paramsConfig, params, requestConfig }) => {
    const jsonParams = JSON.parse(params);
    axios.request({
      method: requestConfig.method,
      headers: {
        'Content-Type': requestConfig['content-type'],
      },
      url: '/',
      // 注意，get形式axios会忽略data
      params:
        requestConfig.method === 'get'
          ? { ...jsonParams, ...body }
          : jsonParams,
      paramsSerializer: (p) => {
        return qs.stringify(p, paramsConfig);
      },
      data: body,
    });
  };

  return (
    <Form
      onFinish={handleSendRequest}
      form={form}
      labelWrap
      labelCol={{
        style: {
          width: 160,
        },
      }}
      initialValues={{
        // params参数解析配置
        paramsConfig: {
          encode: true,
          arrayFormat: 'none',
          arrayFormatSeparator: ',',
          skipNull: false,
          skipEmptyString: false,
        },
        // params参数
        params: JSON.stringify({ id: 1, status: [1, 2, 3] }, null, 2),
        // body 数据
        body: {
          name: 'xxg',
          hobby: [1, 2, 3],
          age: 30,
        },
        // 请求配置
        requestConfig: {
          method: 'get',
          'content-type': 'application/json',
        },
      }}
    >
      <Divider>params参数</Divider>
      <Form.Item
        valuePropName="checked"
        tooltip="是否编码(默认:true)"
        label="encode"
        name={['paramsConfig', 'encode']}
      >
        <Checkbox />
      </Form.Item>
      <Form.Item
        tooltip="数组格式化方式(默认:none)"
        label="arrayFormat"
        name={['paramsConfig', 'arrayFormat']}
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
            getFieldValue(['paramsConfig', 'arrayFormat']),
          ) === false ? (
            <Form.Item
              tooltip="数组格式化分割符(默认:,"
              label="arrayFormatSeparator"
              name={['paramsConfig', 'arrayFormatSeparator']}
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
        name={['paramsConfig', 'skipNull']}
      >
        <Checkbox />
      </Form.Item>
      <Form.Item
        valuePropName="checked"
        tooltip="跳过空字符串(默认:false)"
        label="skipEmptyString"
        name={['paramsConfig', 'skipEmptyString']}
      >
        <Checkbox />
      </Form.Item>
      <Form.Item
        name={['params']}
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
      <Form.Item label="预览" shouldUpdate>
        {({ getFieldsValue }) => {
          const { params, paramsConfig } = getFieldsValue(true);
          let queryStr = '';
          try {
            queryStr = qs.stringify(JSON.parse(params), paramsConfig);
          } catch {
            console.log('输入非json对象');
          }
          return <code>{queryStr}</code>;
        }}
      </Form.Item>
      <Divider>body 参数</Divider>
      <Form.Item
        name={['body', 'name']}
        label="姓名"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['body', 'hobby']}
        label="爱好"
        rules={[{ required: true }]}
      >
        <Checkbox.Group
          options={[
            { value: 1, label: '羽毛球' },
            { value: 2, label: '乒乓球' },
            { value: 3, label: '自行车' },
          ]}
        />
      </Form.Item>
      <Form.Item name={['body', 'age']} label="年龄">
        <Input />
      </Form.Item>
      <Divider>请求方式&请求头相关</Divider>
      <Form.Item
        name={['requestConfig', 'method']}
        label="请求方式"
        rules={[{ required: true }]}
      >
        <Select options={ArrayMethods} />
      </Form.Item>
      <Form.Item
        name={['requestConfig', 'content-type']}
        label="Content-Type"
        rules={[{ required: true }]}
      >
        <Select options={ArrayContentTypes} />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          发送
        </Button>
      </Form.Item>
    </Form>
  );
};
