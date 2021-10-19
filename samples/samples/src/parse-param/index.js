/**
 * 解析url中的query转换成对象
 * @param {string} url 要解析的url
 * @returns Object
 */
function parseQueryString(url) {
  // 提取url中？后面的字符串
  const queryStr = /.+\?(.+)$/.exec(url)[1];
  const queryArr = queryStr.split('&');
  const paramsObj = {};
  queryArr.forEach((param) => {
    if (/=/.test(param)) {
      // 使用= 分隔键和值
      let [key, val] = param.split('=');
      // 解码
      val = decodeURIComponent(val);
      // 判断是否数字，并转换
      val = /^\d+$/.test(val) ? parseFloat(val) : val;
      // 如果有重复的key，则转换为数组
      if (paramsObj.hasOwnProperty(key)) {
        paramsObj[key] = [].concat(paramsObj[key], val);
      } else {
        paramsObj[key] = val;
      }
    }
    // 没有=赋值的算作true
    else {
      paramsObj[param] = true;
    }
  });

  return paramsObj;
}

function stringifyObj(obj) {
  const result = [];
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      result.push(`${key}=${encodeURIComponent(value)}`);
    }
  }
  return result.join('&');
}

(function init() {
  const txtUrl = document.getElementById('url');
  const txtStringify = document.getElementById('stringify');

  // 将输入的url解析成对象
  document.getElementById('btnParse').onclick = function () {
    const url = txtUrl.value;
    const result = parseQueryString(url);
    txtStringify.value = JSON.stringify(result);
  };

  document.getElementById('btnStringify').onclick = function () {
    const obj = JSON.parse(txtStringify.value);
    const query = stringifyObj(obj);
    txtUrl.value = query;
  };
})();
