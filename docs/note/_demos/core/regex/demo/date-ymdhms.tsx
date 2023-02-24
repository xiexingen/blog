/**
 * title: YYYY-MM-DD hh:mm:ss
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { dateYMDHMSReg } from '..';

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
        initialValues={{ value: '2020-11-12 11:11:11' }}
      >
        <Form.Item
          name="value"
          label="YYYY-MM-DD hh:mm:ss"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (dateYMDHMSReg.test(value)) {
                    return resolve(true);
                  }
                  return reject('请输入有效的日期时间');
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
