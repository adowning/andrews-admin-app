import axios from "axios";
const localStorage = window.localStorage;
import {Notify} from "quasar"
import router from '../router'
export default ({ Vue }) => {
  Vue.prototype.$axios = axios;

  var api = axios.create({
    baseURL: "http://23.236.60.103",
    timeout: 3000,
    headers: {
      "X-DreamFactory-API-Key":
        "867b722bfd2e45b460a97815b8b94f58924120bdfef26b56eec32732bb9e40f0",
      "X-DreamFactory-Session-Token": window.localStorage.token
    }
  });

  api.interceptors.response.use(
    response => response,
    error => {
      if (error.response) {
        if (error.response.status === 401) {
          // dispatch('logOut');
          Notify.create("Your session has timed out");
          localStorage.clear();
          router.push({ path: "login" });
          return error;
        } else return Promise.reject(error.response);
      } else if (error.request) notify("Server down");
      else Notify.create("Unexpected error");
    }
  );

  Vue.prototype.$api = api;
};
