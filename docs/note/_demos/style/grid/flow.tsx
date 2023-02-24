/**
 * grid-auto-flow
 * description: 通过grid-auto-flow控制超出item项填充方向和填充方式(定义的是一个3行3列的grid)
 */

import React from 'react';
import { InfoCircleFilled } from '@ant-design/icons';
import { Row, Col, Card, Tooltip } from 'antd';
import style from './flow.less';

const GridComponent = ({ className }) => {
  return (
    <div className={className}>
      <div className="item item-1">1</div>
      <div className="item item-2">2</div>
      <div className="item item-3">3</div>
      <div className="item item-4">4</div>
      <div className="item item-5">5</div>
      <div className="item item-6">6</div>
      <div className="item item-7">7</div>
      <div className="item item-8">8</div>
      <div className="item item-9">9</div>
    </div>
  );
};

export default () => {
  return (
    <Row gutter={16} justify="space-around">
      <Col span={12}>
        <Card title="row" bordered={false}>
          <GridComponent className={style.row} />
        </Card>
      </Col>
      <Col span={12}>
        <Card title="row dense" bordered={false}>
          <GridComponent className={style.rowDense} />
        </Card>
      </Col>
      <Col span={12}>
        <Card
          title="row 带跨列的情况"
          extra={
            <Tooltip title="row 会依次往后，不会填充上面的位置">
              <InfoCircleFilled />
            </Tooltip>
          }
          bordered={false}
        >
          <GridComponent className={style.rowWithColumnSpan} />
        </Card>
      </Col>
      <Col span={12}>
        <Card
          title="row dense 带跨列的情况"
          extra={
            <Tooltip title="row dense 会从最开始的位置开始填充">
              <InfoCircleFilled />
            </Tooltip>
          }
          bordered={false}
        >
          <GridComponent className={style.rowDenseWithColumnSpan} />
        </Card>
      </Col>
      <Col span={12}>
        <Card title="column" bordered={false}>
          <GridComponent className={style.column} />
        </Card>
      </Col>
      <Col span={12}>
        <Card title="column dense" bordered={false}>
          <GridComponent className={style.columnDense} />
        </Card>
      </Col>
      <Col span={12}>
        <Card
          title="column 带跨行的情况"
          extra={
            <Tooltip title="column 会依次往后，不会填充左边的位置">
              <InfoCircleFilled />
            </Tooltip>
          }
          bordered={false}
        >
          <GridComponent className={style.columnWithRowSpan} />
        </Card>
      </Col>
      <Col span={12}>
        <Card
          title="column dense 带跨行的情况"
          extra={
            <Tooltip title="column dense 会从最开始的位置开始填充">
              <InfoCircleFilled />
            </Tooltip>
          }
          bordered={false}
        >
          <GridComponent className={style.columnDenseWithRowSpan} />
        </Card>
      </Col>
    </Row>
  );
};
