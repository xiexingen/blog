/**
 * title: qq
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { qqReg } from '..';

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
        initialValues={{ value: '1002275364' }}
      >
        <Form.Item
          name="value"
          label="qq"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (qqReg.test(value)) {
                    return resolve(true);
                  }
                  return reject('请输入有效的qq');
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
