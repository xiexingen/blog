/**
 * title: ip校验
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { ipv4Reg } from '..';

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
        initialValues={{ value: '127.0.0.1' }}
      >
        <Form.Item
          name="value"
          label="ip"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (ipv4Reg.test(value)) {
                    return resolve(true);
                  }
                  return reject('请输入有效的ip');
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
