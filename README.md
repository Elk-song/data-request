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

