/* globals localStorage */
import axios from 'axios'
import { Cookies } from "quasar"
import  assets  from "../utils/assets"
var _ = require('lodash');
import { Notify } from 'quasar'
import router from '../router'
import Vue from 'vue'
const apiBase = axios.create({
    baseURL: 'http://23.236.60.103',
    timeout: 3000,
    headers: {
      "X-DreamFactory-API-Key": '867b722bfd2e45b460a97815b8b94f58924120bdfef26b56eec32732bb9e40f0',
      "X-DreamFactory-Session-Token": window.localStorage.getItem('token'),
      remember_me: true
  },
  })

var querystring = require('querystring');

export default {
  login(email, pass, cb) {
    // console.log(arguments[arguments.length -1])
    // cb = arguments[arguments.length - 1]
    if (window.localStorage.getItem('token')) {
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
      // console.log(axios.get('http://23.236.60.103/api/v2/system/environment'))
      let json = await apiBase.post("/api/v2/user/session", querystring.stringify(data))
      return json
    }
    getJSONAsync().then(function (result) {
      if(result.status == 200){
        window.localStorage.setItem('token',result.data.session_token);
      cb(result)
      }else{
        this.logOut()
        // cb(result)

      }
      
    });
  },

  // getProfile(cb) {
  //   var profile = {}    
  //   async function getJSONAsync() {
  //     var profile = {}
  //     let json = await apiBase.get("/api/v2/db/_table/Contact/")
  //     var id = _.find(json.data.resource, function(o) { return o.email == window.localStorage.getItem('loginEmail') })
  //     profile.id = id
  //     profile.basic = json.data.resource[id]
  //     let json2 = await apiBase.get("/api/v2/db/_table/contact_info/"+profile.id)
  //     profile.detail = json2.data
  //   return profile
  //   }
  //    getJSONAsync().then(function (result) {
  //     cb(result)
  //     })
  // },

  logOut(cb) {
    if (cb) cb()
    this.onChange(false)
    Notify.create("You have been logged out from auth")
    localStorage.clear();
    router.push({ path: "login" })
    
  },
  loggedIn() {
    return !!window.localStorage.getItem('token')
  },
  onChange() { },

   routerExceptionHandler (to, from, next) { 
    return error => {
        switch (error.response.status) {
            case 401: 
                return next({ name: 'login', replace: true });
            case 404: 
                return next({ name: '404', params: [to.path], replace: true })
            default: 
                return next(error);
        }
    };
  }

}


// function removeToken(key) {

//   $.api.logout(function (data) {
//     if (data.success) {
//       localStorage.removeItem(key);
//       $.route('index');
//     }
//     else {
//       var response = parseResponse(data);
//       messageBox(response.code, response.message, response.error);
//     }
//   });
// }