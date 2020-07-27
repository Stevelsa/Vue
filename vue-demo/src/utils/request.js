import axios from 'axios'
import { Message } from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
  withCredentials: true
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // do something with request error
    console.log(error);
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /*根据success判断请求是否出错
    response.data的结构为
    {
        "data":{},
        "success":,
        "message":,
        "detail":
    }*/
    const res = response.data
    if (!res.suceess) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    } else {
      return res
    }
  },
  error => {
    Message({
      message: res.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
