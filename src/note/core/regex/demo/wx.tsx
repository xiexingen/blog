/**
 * title: 微信
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { wxReg } from '..';

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
        initialValues={{ value: 'xxg1002275364' }}
      >
        <Form.Item
          name="value"
          label="微信"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (wxReg.test(value)) {
                    return resolve(true);
                  }
                  return reject('请输入有效的微信');
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
