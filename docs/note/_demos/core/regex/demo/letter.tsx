/**
 * title: 纯字母
 * description: 连空格也不能包含
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { letterReg } from '..';

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
        initialValues={{ value: 'hello' }}
      >
        <Form.Item
          name="value"
          label="纯字母"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (letterReg.test(value)) {
                    return resolve(true);
                  }
                  return reject('请输入有效的纯字母');
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
