/**
 * title: 车牌号
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { carNoReg } from '..';

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
        initialValues={{ value: '湘A88888' }}
      >
        <Form.Item
          name="value"
          label="车牌号"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (carNoReg.test(value)) {
                    return resolve(true);
                  }
                  return reject('请输入有效的车牌号');
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
