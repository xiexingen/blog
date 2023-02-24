/**
 * title: 数字千分位
 */

import React from 'react';
import { Button, Form, Input } from 'antd';
import { priceSplit } from '..';

export default () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    const phone = values.value?.replace(priceSplit, ',');
    alert(phone);
  };

  return (
    <>
      <Form
        onFinish={handleFinish}
        form={form}
        layout="inline"
        initialValues={{ value: '10000000' }}
      >
        <Form.Item help="将会转换成千分位的数字" name="value" label="金额">
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
