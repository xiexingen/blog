/**
 * title: 16进制颜色
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { color16Reg } from '..';

export default () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <>
      <Form
        onFinish={handleFinish}
        form={form}
        layout="inline"
        initialValues={{ value: '#eee' }}
      >
        <Form.Item
          name="value"
          label="16进制颜色"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (color16Reg.test(value)) {
                    return resolve(true);
                  }
                  return reject('请输入有效的16进制颜色');
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
