/* globals localStorage */
import axios from "axios"
import { Cookies } from "quasar"
import { assets } from "../utils/assets"
// import api from './api'
var apibase = axios.create({
  baseURL: "http://47.219.112.177",
  method: "POST",
  timeout: 5000,
  headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   'Content-Type': 'application/json'

  },
})

var querystring = require('querystring');

export default {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.session_token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    var data =
    {
        email: email,
        password: pass,
        remember_me: false
    }
    async function getJSONAsync() {
      console.log(data)

      let json = await apibase.post("/api/v2/user/session", querystring.stringify(data))
      return json
    }
    getJSONAsync().then(function (result) {
      console.log(result.status)
      if(result.status = 200){
      localStorage.token = result.data.session_token     
      cb(true)
      return true
      }else{
        cb(false)

        return false
      }
      
    });
  },
  getToken() {
    return localStorage.token
  },

  getProfile() {
    return assets.getProfile()
  },

  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },
  loggedIn() {
    return !!localStorage.token
  },
  onChange() { },
}

function setToken(key, value) {
  sessionStorage.setItem(key, value);
}

function getToken(key) {
  return sessionStorage.getItem(key);
}

function removeToken(key) {

  $.api.logout(function (data) {
    if (data.success) {
      sessionStorage.removeItem(key);
      $.route('index');
    }
    else {
      var response = parseResponse(data);
      messageBox(response.code, response.message, response.error);
    }
  });
}