/**
 * 去前后空格
 */
export const trimReg = /^\s*|\s*$/g;

/**
 * 数字千分位
 */
export const priceSplit = /\B(?=(\d{3})+(?!\d))/g;

/**
 * 手机号3-4-4分割
 */
export const phoneSplit = /(?=(\d{4})+$)/g;

/**
 * 手机号码
 */
export const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

/**
 * 身份证
 */
export const idCardReg =
  /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

/**
 * 邮箱
 */
export const emailReg =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

/**
 * url
 */
export const urlReg =
  /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

/**
 * ipv4
 */
export const ipv4Reg =
  /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

/**
 * 16进制颜色的校验
 */
export const color16Reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

/**
 * 日期 YYYY-MM-DD
 */
export const dateYMDReg = /^\d{4}(\-)\d{1,2}\1\d{1,2}$/;

/**
 * 日期 YYYY-MM-DD hh:mm:ss
 */
export const dateYMDHMSReg =
  /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;

/**
 * 整数
 */
export const integerReg = /^[-+]?\d*$/;

/**
 * 小数
 */
export const floatReg = /^[-\+]?\d+(\.\d+)?$/;

/**
 * 限定特定位小数
 */
export function limitPrecision(precision: Number) {
  if (precision === 0) {
    return new RegExp(`^(\\d+)$`);
  }
  return new RegExp(`^(\\d+\\.\\d{${precision}})$`);
}

/**
 * 邮政编号
 */
export const postalNoReg = /^\d{6}$/;

/**
 * QQ
 *  5-11位数字
 */
export const qqReg = /^[1-9][0-9]{4,10}$/;

/**
 * 微信
 *  6至20位，以字母开头，字母，数字，减号，下划线
 */
export const wxReg = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})$/;

/**
 * 车牌号
 */
export const carNoReg =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;

/**
 * 只含字母的字符串
 */
export const letterReg = /^[a-zA-Z]+$/;

/**
 * 包含中文的字符串
 */
export const chinenseReg = /[\u4E00-\u9FA5]/;

/**
 * 密码强度
 *  密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符
 */
export const passwordReg = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}/;

/**
 * 文件拓展名
 */
export function fileExt(arr: string[]) {
  const exts = arr.map((name) => `.${name}`).join('|');
  return new RegExp(`(${exts})$`);
}

/**
 * html中的img标签
 */
export const imgReg = /<img.*?src=[\"|\']?(.*?)[\"|\']?\s.*?>/gi;

/**
 * html中的注释
 */
export const noteReg = /<!--(.*?)-->/g;

/**
 * html 中的style
 */
export const styleReg = /style="[^=>]*"([(\s+\w+=)|>])/g;

/**
 * html 中的标签
 */
export const tagReg = /<("[^"]*"|'[^']*'|[^'">])*>/g;

/**
 * 重叠词 如:abcabc
 */
export const repeatReg = /(.+)\1+/g;
