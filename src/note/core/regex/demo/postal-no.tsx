/**
 * title: 邮编
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { postalNoReg } from '..';

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
        initialValues={{ value: '500001' }}
      >
        <Form.Item
          name="value"
          label="邮编"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (postalNoReg.test(value)) {
                    return resolve(true);
                  }
                  return reject('请输入有效的邮编');
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
