/**
 * title: url校验
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { urlReg } from '..';

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
        initialValues={{ value: 'https://www.google.com' }}
      >
        <Form.Item
          name="value"
          label="url"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (urlReg.test(value)) {
                    return resolve(true);
                  }
                  return reject('请输入有效的url');
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
