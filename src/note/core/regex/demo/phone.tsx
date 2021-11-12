/**
 * title: 手机号码校验
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { phoneReg } from '..';

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
        initialValues={{ value: '18569590930' }}
      >
        <Form.Item
          name="value"
          label="手机号码"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (phoneReg.test(value)) {
                    return resolve(true);
                  }
                  return reject('请输入有效的手机号码');
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
