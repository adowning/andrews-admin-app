import axios from "axios";
const localStorage = window.localStorage;
import {Notify} from "quasar"
import router from '../router'
export default ({ Vue }) => {

  axios.interceptors.response.use(
    response => response,
    error => {
    console.log('interceptor initiated')      
    //   if (error.response) {
    //     if (error.response.status === 500) {
    //       console.log(error.response.data.error.message)
    //       Notify.create("Server Errror: "+ error.response.data.error.message);
    //       //TODO get a token and do it from here
    //     }
    //     if (error.response.status === 401) {
    //       Notify.create("Session expired, need to log back in");
    //       //TODO get a token and do it from here
		//  router.push({ path: "login" })
    //     } else return Promise.reject(error.response);
    //   } else if (error.request) notify("Server down");
    //   else Notify.create("Unexpected error");
    }
  )
  Vue.prototype.$axios = axios;

  var api = axios.create({
    baseURL: "http://47.219.112.177/api/v2",
    timeout: 3000,
    headers: {
      "X-DreamFactory-API-Key":
        "ee939e032dba64c6fa98f46ddb46a9bf0727effb1b8a342a7198224137d5ad8d",
      "X-DreamFactory-Session-Token": window.localStorage.getItem('token'),
      remember_me: true
    }
  })
  api.interceptors.request.use(
    config => {
      let _headers = {
        "X-DreamFactory-API-Key":
        "ee939e032dba64c6fa98f46ddb46a9bf0727effb1b8a342a7198224137d5ad8d",
      "X-DreamFactory-Session-Token": window.localStorage.getItem('token')
      }
      config.headers = _headers
      return config;
    },
    error => Promise.reject(error)
  )

  api.interceptors.response.use(
    response => response,
    error => {
    console.log('interceptor initiated')      
    //   if (error.response) {
    //     if (error.response.status === 500) {
    //       console.log(error.response.data.error.message)
    //       Notify.create("Server Errror: "+ error.response.data.error.message);
    //       //TODO get a token and do it from here
    //     }
    //     if (error.response.status === 401) {
    //       Notify.create("Session expired, need to log back in");
    //       //TODO get a token and do it from here
		//  router.push({ path: "login" })
    //     } else return Promise.reject(error.response);
    //   } else if (error.request) notify("Server down");
    //   else Notify.create("Unexpected error");
    }
  )

  Vue.prototype.$api = api;
};
