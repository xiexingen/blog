/**
 * title: YYYY-MM-DD 日期格式
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { dateYMDReg } from '..';

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
        initialValues={{ value: '2020-11-12' }}
      >
        <Form.Item
          name="value"
          label="YYYY-MM-DD日期"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (dateYMDReg.test(value)) {
                    return resolve(true);
                  }
                  return reject('请输入有效的日期');
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
