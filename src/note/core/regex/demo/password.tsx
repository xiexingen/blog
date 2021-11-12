/**
 * title: 密码强度
 * desc: 密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { passwordReg } from '..';

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
        initialValues={{ value: '1q2w3E4r*' }}
      >
        <Form.Item
          name="value"
          label="密码"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (passwordReg.test(value)) {
                    return resolve(true);
                  }
                  return reject('密码强度不符合要求');
                });
              },
            },
          ]}
        >
          <Input.Password style={{ width: 300 }} />
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
