# 数据请求

### 参数泛型：

T： params参数类型
R： 返回数据类型
D： data数据类型

### 参数释义：

|   参数名   | 参数类型 | 参数描述 |
| :--------: | :------: | :------: |
|  **url**   |  string  | 接口url  |
| **params** |    T     |   参数   |
|  **data**  |    D     | body传值 |

### 方法描述：

|      方法名       | 携带泛型 |       参数        |  方法描述  |
| :---------------: | :------: | :---------------: | :--------: |
|  **getRequest**   |   R，T   |    url，params    |  get请求   |
| **deleteRequest** |   R，T   |    url，params    | delete请求 |
|  **postRequest**  | R, D, T  | url，data，params |  post请求  |
|  **putRequest**   | R, D, T  | url，data，params |  put请求   |
| **patchRequest**  | R, D, T  | url，data，params | patch请求  |

### 设计描述：

#### 1. 为什么单例中要求传入Axios实例？

源代码单例截图：

![image-20200902172538792](https://picbucket-1301820142.cos.ap-shanghai.myqcloud.com/img/image-20200902172538792.png)

传入的request是当前项目进行的基础的axios封装，比如拦截器，鉴于项目的不同，后期更新的不同，基础封装的axios作为参数传入。

**request文件示例：**

```typescript
import axios from "axios";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API // url = base url + request url
});

// Request interceptors
service.interceptors.request.use(
  config => {
    // // Add Authorization header to every request, you can add other custom headers here
    // if (UserModule.token) {
    //   config.headers["Authorization"] = `Bearer ${UserModule.token}`;
    // }
      ...//
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptors
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data;
    } else {
        ...//
      console.error(`request failed error： ${response}`);
    }
  },
  error => {
    const response = error.response;
    ....//
    return Promise.reject(error);
  }
);

export default service;

```

#### 2. 项目如何引用

##### 2.1 安装插件

```
npm i data-request --save
```

##### 2.2 引入使用

![image-20200902173547131](https://picbucket-1301820142.cos.ap-shanghai.myqcloud.com/img/image-20200902173547131.png)

在业务的入口管理处进行定义。

使用示例：

![image-20200902175619191](https://picbucket-1301820142.cos.ap-shanghai.myqcloud.com/img/image-20200902175619191.png)

