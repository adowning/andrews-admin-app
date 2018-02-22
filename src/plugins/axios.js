import axios from "axios"

export default ({ Vue }) => {
  Vue.prototype.$axios = axios

  var api = axios.create({
    baseURL: "http://47.219.112.177:3001/api",
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  })
  Vue.prototype.$api = api
}
