/**
 * title: 小数校验
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { floatReg } from '..';

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
        initialValues={{ value: 100.12 }}
      >
        <Form.Item
          name="value"
          label="小数"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (floatReg.test(value)) {
                    return resolve(true);
                  }
                  return reject('请输入有效的小数');
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
