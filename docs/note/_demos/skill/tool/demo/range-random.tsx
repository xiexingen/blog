/**
 * title: 指定范围内生成随机数
 * description: 修改滑动条，会生成在滑动条范围内的值中的随机数
 */

import React, { useState } from 'react';
import { Slider } from 'antd';
import { rangeRandom } from '..';

export default () => {
  const [range, setRante] = useState<[number, number]>([10, 20]);
  const random = rangeRandom(range[0], range[1]);
  return (
    <>
      <p>random value:{random}</p>
      <Slider
        range={true}
        min={0}
        max={100}
        step={1}
        value={range}
        onChange={(v) => setRante(v)}
      />
    </>
  );
};
