// 也可以导入外部包
// import dayjs from 'dayjs';
import { calcSum } from '.';

// 注意 self
self.onmessage = ({ data }) => {
  const sum = calcSum(data);
  self.postMessage(sum);
};
