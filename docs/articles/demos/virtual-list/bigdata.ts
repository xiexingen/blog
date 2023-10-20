/**
 * 生成列表数据
 */
export const generateData = (length: number = 1000000) => {
  return Array.from({ length }).map((item, index) => {
    const id = index + 1;
    return {
      id,
      name: `name-${id}`,
      age: Math.floor(Math.random() * 100),
      address: `address-${id}`,
      salary: Math.floor(Math.random() * 10000),
    };
  });
};
