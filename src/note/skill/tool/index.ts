/**
 * 金额格式化
 * @param value 要格式化的数值
 * @returns string 返回格式化后的字符串
 */
export function moneyFormat(value: number): string {
  return value.toString().replace(/(?!^)(?=(\d{3})+$)/g, ',');
}

/**
 * 密码长度是6-12位，由数字、小写字符和大写字母组成，但必须至少包括2种字符
 */
export function passwordVertify(password: string) {
  return /((?=.*\d)((?=.*[a-z])|(?=.*[A-Z])))|(?=.*[a-z])(?=.*[A-Z])^[a-zA-Z\d]{6,12}$/.test(
    password,
  );
}

/**
 * 手机号码 3-4-4 格式化
 * @param value 手机号码
 * @returns 格式化后的手机号码
 */
export function phoneFormat(value: string): string {
  return String(value)
    .slice(0, 11)
    .replace(/(?<=\d{3})\d+/, ($0) => '-' + $0)
    .replace(/(?<=[\d-]{8})\d{1,4}/, ($0) => '-' + $0);
}

/**
 * 生成一个不重复的id
 * @param length number id长度,不超过10位
 * @returns string 返回 随机字符串
 */
export function randomId(length: number): string {
  return Math.random().toString(36).substr(3, length);
}

/**
 * 小数位数精确
 * @param number 数值
 * @param decimal 要精确的位数
 * @returns 精确后的值
 */
export function roundNumber(number: number, decimal: number): number {
  return Math.round(number * 10 ** decimal) / 10 ** decimal;
}

/**
 * 在指定范围能生成随机数
 * @param min 最小值
 * @param max 最大值
 * @returns 生成的随机数
 */
export function rangeRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 返回传入的对象的类型
 * @param value 值
 * @returns 类型字符串
 */
export function type(value: any): string {
  return Object.prototype.toString
    .call(value)
    .replace(/\[object (\w+)\]/, '$1')
    .toLowerCase();
}

/**
 * 生成评分值
 * @param value 的分
 * @returns 星星级别字符串
 */
export function rate(value: number): string {
  return '★★★★★☆☆☆☆☆'.slice(5 - value, 10 - value);
}

/**
 * 将树结构转成对象结构
 * @param tree 要转换的数组对象
 * @param key 作为key的属性名
 * @param childrenProp 字节点属性名称
 * @returns Object
 */
export function treeToObject<T = any>(
  tree: T,
  key = 'id',
  childrenProp = 'childrens',
): { [key: string]: T } {
  let map: { [key: string]: T } = {};
  const dataKey = tree[key];
  const treeWithOutChildren = {
    ...tree,
    [childrenProp]: undefined,
  };
  map[dataKey] = treeWithOutChildren;
  const childrens = tree[childrenProp];
  if (childrens && childrens.length > 0) {
    map = childrens.reduce((map, item) => {
      const tmpMap = treeToObject(item, key, childrenProp);
      return {
        ...map,
        ...tmpMap,
      };
    }, map);
  }
  return map;
}

/**
 * 将数组转成对象结构
 * @param array 要转换的数组对象
 * @param key 作为key的属性名 默认为 value
 * @param valueConvert 值转换器，默认为对象 可以传入字符串，会使用对象中特定属性名的值作为值 默认为(item)=>item
 */
export function arrayToObject<T = any>(
  array: T[],
  key?: string,
  valueConvert?: string,
): { [key: string]: any };
export function arrayToObject<T = any>(
  array: T[],
  key?: string,
  valueConvert?: (item: T) => any,
): { [key: string]: any };
export function arrayToObject<T = any>(
  array: T[],
  key: string = 'value',
  valueConvert: string | ((item: T) => any) = (item: T) => item,
) {
  const result: { [key: string]: any } = {};
  array.forEach((item) => {
    const value =
      typeof valueConvert === 'function'
        ? valueConvert(item)
        : item[valueConvert];
    result[item[key]] = value;
  });

  return result;
}

/**
 * 将array转成tree格式
 * @param array 要转换的数组
 * @param option 配置项
 * @returns 返回tree数组，如果只要一棵树可以直接获取第一项
 */
export function arrayToTree<T = any>(
  array: T[],
  option?: {
    keyName?: string;
    childrenName?: string;
    parentName?: string;
  },
) {
  const defaultOptions = {
    keyName: 'id',
    childrenName: 'childrens',
    parentName: 'parentId',
  };
  const mergeOptions = { ...defaultOptions, ...option };
  const treeMap = arrayToObject(array, mergeOptions.keyName);
  const result: T[] = [];

  array.forEach((item) => {
    const parentId = item[mergeOptions.parentName];
    if (parentId !== null && parentId !== undefined && parentId !== '') {
      const parentNode = treeMap[parentId];
      if (!parentNode) {
        throw `not found ${parentId} in map`;
      }
      parentNode[mergeOptions.childrenName] =
        parentNode[mergeOptions.childrenName] || [];
      const siblings = parentNode[mergeOptions.childrenName];
      siblings.push(item);
    } else {
      result.push(treeMap[item[mergeOptions.keyName]]);
    }
  });

  return result;
}

/**
 * 计算两个日期之间的间隔
 * @param date1
 * @param date2
 */
export function distance(date1: Date, date2: Date) {
  return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
}

/**
 * 日期位于一年中的第几天
 * @param date
 */
export function dayOfYear(date: Date) {
  return Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /
      1000 /
      60 /
      60 /
      24,
  );
}

/**
 * 过滤html中的标签
 * @param html
 * @returns
 */
export function stripHtml(html: string) {
  return (
    new DOMParser().parseFromString(html, 'text/html').body.textContent || ''
  );
}
/**
 * 拷贝到粘贴板
 * @param text
 */
export function copyToClipborad(text: string) {
  navigator.clipboard.writeText(text);
}

/**
 * 获取选中的内容
 * @returns
 */
export function getSelectedText() {
  return window.getSelection()?.toString();
}
