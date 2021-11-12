/**
 * title: 文件扩展名
 */

import React, { useState } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import { fileExt } from '..';

export default () => {
  const [form] = Form.useForm();
  const [exts, setExts] = useState('jpg,png,txt');

  const handleFinish = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <>
      <Form
        onFinish={handleFinish}
        form={form}
        layout="inline"
        initialValues={{ value: 'test.jpg' }}
      >
        <Form.Item label="文件扩展名">
          <Input
            placeholder=",隔开的多个"
            value={exts}
            onChange={(e) => {
              setExts(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          name="value"
          label="文件扩展名"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  const reg = fileExt(exts.split(','));
                  if (reg.test(value)) {
                    return resolve(true);
                  }
                  return reject(`不支持的文件类型`);
                });
              },
            },
          ]}
        >
          <Input style={{ width: 300 }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
