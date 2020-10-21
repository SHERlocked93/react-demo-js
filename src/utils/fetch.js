import axios from 'axios'

let baseURL = 'http://localhost:9038'

// 创建axios实例
const service = axios.create({
    baseURL,          // api的base_url
    timeout: 5000     // 请求超时时间5s
})

service.interceptors.request.use(
  config => {
      return config
  },
  err => {
      console.error('发送数据Error:  ', err)
      return Promise.reject(err)
  }
)

service.interceptors.response.use(
  response => {
      // console.log('返回数据Success：', response)
      return response.data
  },
  err => {
      console.error('返回数据Error:  ', err)
      return Promise.reject(err)
  }
)

export default service
