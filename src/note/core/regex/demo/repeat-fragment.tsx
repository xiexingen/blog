/**
 * title: 重复片段
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { repeatReg } from '..';

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
        initialValues={{ value: 'abcabc' }}
      >
        <Form.Item
          name="value"
          label="重叠词"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (repeatReg.test(value)) {
                    return resolve(true);
                  }
                  return reject('非有效的重叠词');
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
