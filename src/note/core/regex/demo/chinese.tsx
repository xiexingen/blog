/**
 * title: 中文
 * desc: 可以含英文 特殊符号等
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { chinenseReg } from '..';

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
        initialValues={{ value: '刘德华' }}
      >
        <Form.Item
          name="value"
          label="中文"
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  if (chinenseReg.test(value)) {
                    return resolve(true);
                  }
                  return reject('请输入有效的中文');
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
