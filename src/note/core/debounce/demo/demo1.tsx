/**
 * title: 简单使用防抖
 * desc: 请打开浏览器查看效果
 */
import React, { useState, useMemo } from 'react';
import { Input, AutoComplete, Form } from 'antd';
import { SelectProps } from 'antd/es/select';
import { debounce } from '..';

function getRandomInt(max: number, min: number = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}
// 模拟一个ajax请返回数据
const searchResult = (query: string) => {
  return new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });
};

export default () => {
  const [options, setOptions] = useState<SelectProps<object>['options']>([]);

  const handleSearch = (value: string) => {
    console.log('-----------触发搜索------------');
    setOptions(value ? searchResult(value) : []);
  };

  const handleDebounceSearch = useMemo(() => {
    return debounce((value: string) => {
      console.log('-----------带防抖搜索(400ms)------------');
      setOptions(value ? searchResult(value) : []);
    }, 400);
  }, []);
  return (
    <Form
      labelCol={{
        style: {
          width: 120,
        },
      }}
    >
      <Form.Item label="普通搜索">
        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{ width: 300 }}
          options={options}
          onSearch={handleSearch}
        >
          <Input.Search placeholder="input here" enterButton />
        </AutoComplete>
      </Form.Item>
      <Form.Item label="带防抖功能">
        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{ width: 300 }}
          options={options}
          onSearch={handleDebounceSearch}
        >
          <Input.Search placeholder="input here" enterButton />
        </AutoComplete>
      </Form.Item>
    </Form>
  );
};
