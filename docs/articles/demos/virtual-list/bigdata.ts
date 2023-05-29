/**
 * 生成列表数据
 */
export const generateData = (length: number = 1000000) => {
  return Array.from({ length }).map((item, index) => {
    return {
      id: index,
      name: `name-${index}`,
      age: Math.floor(Math.random() * 100),
      address: `address-${index}`,
      salary: Math.floor(Math.random() * 10000),
    };
  });
};
