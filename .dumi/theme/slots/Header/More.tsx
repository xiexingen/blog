
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { css } from '@emotion/react';
import { Button, Dropdown } from 'antd';
// import { FormattedMessage } from 'dumi';


const useStyle = (rtl?: boolean) => ({
  smallStyle: css`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `,
  downOutlined: css`
    font-size: 9px;
    margin: ${rtl ? '-1px 2px 0 0' : '-1px 0 0 2px'};
    vertical-align: middle;
  `,
});


export const getEcosystemGroup = (): MenuProps['items'] => [
  {
    label: (
      <a href="http://old-blog.xxgtalk.cn" target="_blank" rel="noopener noreferrer">
        个人博客(老的)
      </a>
    ),
    key: 'old-blog',
  },
  {
    label: (
      <a href="https://www.cnblogs.com/xiexingen" target="_blank" rel="noopener noreferrer">
        博客园(已经不玩了)
      </a>
    ),
    key: 'cnblogs',
  },
  {
    label: (
      <a href="https://xiexingen.github.io/hand-tear-ahooks/hooks/async/use-request" target="_blank" rel="noopener noreferrer">
        手撕 ahooks
      </a>
    ),
    key: 'ahooks',
  },
  {
    label: (
      <a href="https://github.com/wetrial" target="_blank" rel="noopener noreferrer">
        Wetrial
      </a>
    ),
    key: 'wetrial',
  },
  {
    label: (
      <a href="https://xiexingen.github.io/topology-designable" target="_blank" rel="noopener noreferrer">
        拓扑图设计器
      </a>
    ),
    key: 'wetrial',
  },
  {
    label: (
      <a href="https://github.com/xiexingen" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    ),
    key: 'github',
  },
];

const More: React.FC = ({ isRTL }) => {
  const { downOutlined } = useStyle(isRTL);
  return (
    <span style={{ margin: '0 8px' }}>
      <Dropdown menu={{ items: getEcosystemGroup() }} placement="bottomRight">
        <Button size="small">
          更多
          <DownOutlined css={downOutlined} />
        </Button>
      </Dropdown>
    </span>
  );
};

export default More;
