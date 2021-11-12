/**
 * title: 整数校验
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { integerReg } from '..';

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
        initialValues={{ value: 100 }}
      >
        <Form.Item
          name="value"
          label="整数"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (integerReg.test(value)) {
                    return resolve(true);
                  }
                  return reject('请输入有效的整数');
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
