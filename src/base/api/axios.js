/** axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
// import service from 'axios'
import axios from 'axios'
import QS from 'qs'
// import { Toast } from 'va
let serviceConfig = 'http://192.168.31.69:8080'

// const axios = service.create({
//   baseURL: serviceConfig // api的base_url
//   /* baseURL: "http://192.168.0.107:9090", */ // api的base_url
// })
// 环境的切换
if (process.env.NODE_ENV === 'development') {
  //   axios.defaults.baseURL = serviceConfig // 'api'
  axios.defaults.baseURL = 'api'
} else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = ''
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = serviceConfig
  //   axios.defaults.baseURL = '/api'
}

// 请求超时时间
axios.defaults.timeout = 2000

// post请求头
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.headers.patch['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'

export const get = (url, ...params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export const post = (url, ...params) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, QS.stringify(...params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
export const delet = url => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

export const patch = (url, params) => {
  var formData = new FormData()
  formData.append('username', params.username)
  formData.append('password', params.password)
  return new Promise((resolve, reject) => {
    axios
      .patch(url, formData)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
