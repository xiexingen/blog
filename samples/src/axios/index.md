## axios 的cancel

### 使用

- 通过 Axios 内部提供的 CancelToken 来取消请求

    ``` js
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios.post('/api/user/save', {
        name: 'xxg'
    }, {
        cancelToken: source.token
    })

    source.cancel('cancel by user'); // 取消请求，参数是可选的
    ```

- 调用 CancelToken 的构造函数来创建 CancelToken
    
    ``` js
    const CancelToken = axios.CancelToken;
    let cancel;

    axios.get('/api/user/get', {
        cancelToken: new CancelToken(function executor(c) {
            cancel = c;
        })
    });

    cancel(); // 取消请求
    ```