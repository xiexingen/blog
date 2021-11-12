/**
 * title: 邮箱校验
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { emailReg } from '..';

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
        initialValues={{ value: '1002275364@qq.com' }}
      >
        <Form.Item
          name="value"
          label="邮箱"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (emailReg.test(value)) {
                    return resolve(true);
                  }
                  return reject('请输入有效的邮箱');
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
