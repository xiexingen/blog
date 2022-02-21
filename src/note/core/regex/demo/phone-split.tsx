/**
 * title: 手机号码3-4-4
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { phoneSplit } from '..';

export default () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    const phone = values.value?.replace(phoneSplit, '-');
    alert(phone);
  };

  return (
    <>
      <Form
        onFinish={handleFinish}
        form={form}
        layout="inline"
        initialValues={{ value: '18569590930' }}
      >
        <Form.Item
          help="将会转换成3-4-4格式的手机号"
          name="value"
          label="手机号"
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
