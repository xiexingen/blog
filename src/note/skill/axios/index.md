---
title: axios
nav:
  title: 笔记
  path: /note
group:
  title: 技巧
  path: /skill
---

# axios

实现深度拷贝

## 无感刷新 token

https://wetrial.github.io/wetrials/core/request

## 请求、响应拦截

https://wetrial.github.io/wetrials/core/request

## 传输加密

https://wetrial.github.io/wetrials/core/request

## 自动 cancel

### 场景 1

用户频繁点击查询，将前面的取消掉
用户切换路由，取消上一个路由的请求

```tsx |pure
import axios, { CancelTokenSource, AxiosRequestConfig } from 'axios';

/**
 * 请求管理器，用于管理系统全局请求
 */
export class RequestManager {
  private tokens: Map<string, CancelTokenSource> = new Map();

  private getKey(config: AxiosRequestConfig) {
    // 如果传递了requestKey则直接使用
    let requestKey = config['requestKey'];
    // 没有则从url中解析
    if (!requestKey) {
      // 去掉url中的?后作为key
      const queryIndex = config.url?.indexOf('?');
      let urlKey = config.url;
      if (queryIndex !== -1) {
        urlKey = urlKey?.substring(0, queryIndex);
      }
      requestKey = urlKey;
    }

    return `${requestKey}-${config.method}`;
  }

  addToken(config: AxiosRequestConfig, token: CancelTokenSource) {
    const key = this.getKey(config);
    this.tokens.set(key, token);
  }

  removeToken(config: string): void;
  removeToken(config: AxiosRequestConfig): void;
  removeToken(config: string | AxiosRequestConfig): void {
    let key: string;
    if (typeof config !== 'string') {
      key = this.getKey(config);
    } else {
      key = config;
    }
    if (this.tokens.has(key)) {
      this.tokens.delete(key);
    }
  }

  clearToken() {
    this.tokens.clear();
  }

  cancelRequest(
    config: AxiosRequestConfig,
    cancelReason: string = 'auto cancel',
  ) {
    // if(process.server)return
    const key = this.getKey(config);
    const cancelToken = this.tokens.get(key);
    if (cancelToken) {
      cancelToken.cancel();
      this.removeToken(key);
    }
  }

  cancelAllRequest() {
    // if(process.server)return
    this.tokens.forEach((cancelToken: CancelTokenSource, key) => {
      this.removeToken(key);
      cancelToken.cancel();
    });
    this.clearToken();
  }
}

export const manager = new RequestManager();

// 定义axios拦截器，在请求开始时指定cancel token 结束后，移除token

// 请求拦截里面处理 重复的请求cancel之前的并往全局中记录
axios.interceptors.request.use(
  (config) => {
    manager.cancelRequest(config);
    const cancelTokenSource = axios.CancelToken.source();
    manager.addToken(config, cancelTokenSource);
    config.cancelToken = cancelTokenSource.token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应完成后 移除掉
axios.interceptors.response.use(
  (response) => {
    manager.removeToken(response.config);
    return response;
  },
  (error) => {
    const { response = {} } = error;
    response.config && manager.removeToken(response.config);
    // 忽略掉cancel掉的请求
    if (axios.isCancel(error)) {
      return;
    }
  },
);

// 再再全局的路由切换的时候去处理，比如切换路由的时候将队列中的全cancel掉，以vue的为例
// routers.beforeEach((_, __, next) => {
//   manager.cancelAllRequest()
//   next()
// })
```
