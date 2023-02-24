/**
 * title: 保留指定位数小数
 */

import React, { useState } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import { limitPrecision } from '..';

export default () => {
  const [form] = Form.useForm();
  const [count, setCount] = useState(1);

  const handleFinish = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <>
      <Form
        onFinish={handleFinish}
        form={form}
        layout="inline"
        initialValues={{ value: 100.2 }}
      >
        <Form.Item label="小数位数">
          <InputNumber value={count} onChange={setCount} />
        </Form.Item>
        <Form.Item
          name="value"
          label={`${count}位小数`}
          rules={[
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  const reg = limitPrecision(count);
                  if (reg.test(value)) {
                    return resolve(true);
                  }
                  return reject(`请输入${count}位小数`);
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
