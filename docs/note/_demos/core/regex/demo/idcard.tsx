/**
 * title: 身份证校验
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { idCardReg } from '..';

export default () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <>
      <Form onFinish={handleFinish} form={form} layout="inline">
        <Form.Item
          name="value"
          label="身份证"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (idCardReg.test(value)) {
                    return resolve(true);
                  }
                  return reject('请输入有效的身份证号码');
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
