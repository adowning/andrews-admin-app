/* globals localStorage */
import axios from "axios"
import { Cookies } from "quasar"

export default {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendRequest(email, pass, res => {
      if (res.authenticated) {
        localStorage.token = res.token
        console.log(res)
        // localStorage.userData = res
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken() {
    return localStorage.token
  },
  getUserInfo() {
    return localStorage.profile
    // var api = axios.create({
    //   baseURL: "http://47.219.112.177:3001/api",
    //   method: "POST",
    //   timeout: 5000,
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // })
    // api.get("/profile").then(response => {
    //     console.log(response.data)
    // })
  },

  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {},
}

function pretendRequest(email, pass, cb) {
  var api = axios.create({
    baseURL: "http://47.219.112.177:3001/api",
    method: "POST",
    timeout: 5000,
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    // },
  })
  var data = {}
  data.logemail = email
  data.logpassword = pass
  api.post("/login", data).then(response => {
    if (response.data.asset_api_key) {
      console.log(response.data)
      localStorage.userData = JSON.stringify(response.data)
      cb({ authenticated: true })
    } else {
      cb({ authenticated: false })
    }
  })
}
