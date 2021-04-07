/**
 * 解析url中的query转换成对象
 * @param {string} url 要解析的url
 * @returns Object
 */
function parseQueryString(url) {
  // 提取url中？后面的字符串
  const queryStr = /.+\?(.+)$/.exec(url)[1];
  const queryArr = queryStr.split("&");
  const paramsObj = {};
  queryArr.forEach((param) => {
    if (/=/.test(param)) {
      // 使用= 分隔键和值
      let [key, val] = param.split("=");
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
  return result.join("&");
}

/**
 * 根据axios的config 生成请求 Key
 * @param {Object} config axios的配置
 * @returns
 */
function generateRequestKey(config) {
  const { method, url, params, data } = config;
  return [method, url, stringifyObj(params), stringifyObj(data)].join("&");
}

const pendingRequest = new Map();
/**
 * 用于把当前请求信息添加到pendingRequest对象中
 * @param {Object} config  axios的配置
 */
function addPendingRequest(config) {
  const requestKey = generateRequestKey(config);
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingRequest.has(requestKey)) {
        pendingRequest.set(requestKey, cancel);
      }
    });
}

/**
 * 检查是否存在重复请求，若存在则取消已发的请求
 * @param {Object} config  axios的配置
 */
function removePendingRequest(config) {
  const requestKey = generateRequestKey(config);
  if (pendingRequest.has(requestKey)) {
    const cancelToken = pendingRequest.get(requestKey);
    cancelToken(requestKey);
    pendingRequest.delete(requestKey);
  }
}

// 设置请求拦截器
axios.interceptors.request.use(
  function (config) {
    removePendingRequest(config); // 检查是否存在重复请求，若存在则取消已发的请求
    addPendingRequest(config); // 把当前请求信息添加到pendingRequest对象中
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 设置响应拦截器
axios.interceptors.response.use(
  (response) => {
    removePendingRequest(response.config); // 从pendingRequest对象中移除请求
    return response;
  },
  (error) => {
    removePendingRequest(error.config || {}); // 从pendingRequest对象中移除请求
    if (axios.isCancel(error)) {
      console.log("已取消的重复请求：" + error.message);
    } else {
      // 添加异常处理
    }
    return Promise.reject(error);
  }
);

// 第一次请求
axios.request({
  method: "get",
  url: "/src/axios/",
  params: {
    a: 22,
    b: "333333",
  },
  data: {
    name: "xxg",
    age: 30,
    salary: 100000,
  },
}).then(result=>{
    console.log('-----------第一次请求-----------')
    console.log(result)
});

// 第二次请求
axios.request({
    method: "get",
    url: "/src/axios/",
    params: {
      a: 22,
      b: "333333",
    },
    data: {
      name: "xxg",
      age: 30,
      salary: 100000,
    },
}).then(result=>{
    console.log('-----------第二次请求-----------')
    console.log(result)
});