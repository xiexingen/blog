/**
 * title: 属性获取比对
 * desc: 请打开浏览器控制台查看结果
 */

import React, { useState } from 'react';
import { Button, Space } from 'antd';

function createUser() {
  const user = {
    name: 'xxg',
    [Symbol('gender')]: '男',
  };

  Object.defineProperties(user, {
    isHallofFame: {
      enumerable: false,
      value: true,
    },
    [Symbol('ScoreKingTime')]: {
      enumerable: false,
      value: 4,
    },
  });

  Object.defineProperties(user.__proto__, {
    worker: {
      enumerable: true,
      value: '长沙',
    },
    team: {
      enumerable: false,
      value: '76ers',
    },
    [Symbol('country')]: {
      enumerable: true,
      value: 'USA',
    },
    [Symbol('hometown')]: {
      enumerable: false,
      value: 'Virginia',
    },
  });
  return user;
}

export default () => {
  const [user, setUser] = useState(() => {
    return createUser();
  });

  const forIn = () => {
    console.log(
      '----for in 包含自身以及原型上所有可枚举的属性，【不包括Symbol属性】------',
    );
    for (const key in user) {
      console.log(`key:${key}`);
    }
  };

  const forInWithHasOwnProperty = () => {
    console.log(
      '--------------通过for in + hasOwnProperty过滤原型上的属性-------------',
    );
    for (const key in user) {
      if (Object.hasOwnProperty.call(user, key)) {
        console.log(`key:${key}`);
      }
    }
  };

  const objectKeys = () => {
    console.log(
      '--------------Object.keys 返回所有自身可枚举的属性(不含Symbol属性)，不包含原型上的任何属性-------------',
    );
    console.log(Object.keys(user));
  };

  const objectGetOwnPropertyNames = () => {
    console.log(
      '--------------Object.getOwnPropertyNames 所有自身的属性（包含不可枚举属性但不包含 Symbol 属性），不包含原型上的任何属性-------------',
    );
    console.log(Object.getOwnPropertyNames(user));
  };

  const objectGetOwnPropertySymblos = () => {
    console.log(
      '--------------Object.getOwnPropertySymblos 返回自身所有Symbol属性(包含不可枚举的)，但不含原型上的任何属性-------------',
    );
    console.log(Object.getOwnPropertySymbols(user));
  };

  const reflectOwnKeys = () => {
    console.log(
      '--------------Reflect.ownKeys 返回自身所有属性(包含不可枚举的以及所有Symbol属性)，不包含原型上的任何属性-------------',
    );
    console.log(Reflect.ownKeys(user));
  };

  return (
    <>
      <Space>
        <Button onClick={forIn}>for...in</Button>
        <Button onClick={forInWithHasOwnProperty}>
          for...in hasOwnProperty
        </Button>
        <Button onClick={objectKeys}>Object.keys</Button>
        <Button onClick={objectGetOwnPropertyNames}>
          Object.getOwnPropertyNames
        </Button>
        <Button onClick={objectGetOwnPropertySymblos}>
          Object.getOwnPropertySymblos
        </Button>
        <Button onClick={reflectOwnKeys}>Reflect.ownKeys</Button>
      </Space>
    </>
  );
};
