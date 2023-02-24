/**
 * title: 通过content-visibility实现虚拟渲染
 * description: 注意查看右边的例子，滚动试试【其实组件还是初始化了，只是浏览器渲染的时候有区别】
 */
import React from 'react';
import { Card, Row, Col } from 'antd';
import style from './demo1.less';

const CardComponent = ({ item, type }) => {
  console.log(`${type}${item} rendered`);
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Card.Meta
        title={`Europe Street beat${item}`}
        description="www.instagram.com"
      />
    </Card>
  );
};

export default () => {
  const arr = Array.from({ length: 200 }, (v, i) => i);
  return (
    <Row gutter={8}>
      <Col span={12}>
        <Card
          bodyStyle={{ maxHeight: 600, overflow: 'auto' }}
          title="正常渲染200个元素"
        >
          {arr.map((item) => {
            return (
              <div key={item} className={style.card}>
                <CardComponent item={item} type="normal" />
              </div>
            );
          })}
        </Card>
      </Col>
      <Col span={12}>
        <Card
          bodyStyle={{ maxHeight: 600, overflow: 'auto' }}
          title="使用了content-visibility:auto渲染200个元素"
        >
          {arr.map((item) => {
            return (
              <div key={item} className={style.cardVirtual}>
                <CardComponent item={item} type="auto" />
              </div>
            );
          })}
        </Card>
      </Col>
    </Row>
  );
};
