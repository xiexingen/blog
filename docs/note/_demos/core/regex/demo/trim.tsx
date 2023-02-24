/**
 * title: trim效果
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { trimReg } from '..';

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
        initialValues={{ value: '' }}
      >
        <Form.Item
          name="value"
          label="去前后空格"
          help="会自动去掉前后空格"
          normalize={(v) => v?.replace(trimReg, '')}
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
