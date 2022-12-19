/**
 * title: flat
 * desc: 打开控制台可以看到 requestByIps 请求只执行了一次
 */
import React, { useEffect, useState } from 'react';
import { Tag, Badge, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import MergeRequestManager from '..';

interface DataType {
  key: string;
  name: string;
  age: number;
  ip: string;
}

const requestByIps = (list): Promise<Array<any>> => {
  console.log('execute requestByIps:', list);
  return new Promise((resolve) => {
    setTimeout(() => {
      const newData = list.map((item) => {
        return {
          value: item,
          count: Math.ceil(Math.random() * 10),
        };
      });
      resolve(newData);
    }, 2000);
  });
};

const IPTag: React.FC<{ ip: string }> = ({ ip }) => {
  const [result, setResult] = useState<{ count: number; value: string }>();
  useEffect(() => {
    dataRequest();
  }, [ip]);

  const dataRequest = async () => {
    const result = await mergeRequestManager.createPayload(ip);
    setResult(result);
  };

  return (
    <Badge count={result?.count}>
      <Tag>{result?.value}</Tag>
    </Badge>
  );
};

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'ip',
    key: 'ip',
    dataIndex: 'ip',
    render: (_, { ip }) => {
      return <IPTag ip={ip} />;
    },
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    ip: '127.0.0.1',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    ip: '192.168.0.1',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    ip: '178.56.39.56',
  },
];

const mergeRequestManager = new MergeRequestManager({
  // comboInterval: 2,
  // maxComboSize: 2,
  cachePolicy: MergeRequestManager.CACHE_POLICY.CACHE_FIRST,
  async requestHandler(ips) {
    return await requestByIps(ips);
  },
});

export default () => {
  return <Table columns={columns} dataSource={data} />;
};
