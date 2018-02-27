// // import axios from 'axios'

// var querystring = require('querystring');
// import axios from 'axios'
// var _ = require('lodash');
// var api = axios.create({
//     baseURL: 'http://23.236.60.103',
//     timeout: 3000,
//     headers: {
//       "X-DreamFactory-API-Key": '867b722bfd2e45b460a97815b8b94f58924120bdfef26b56eec32732bb9e40f0',
//       "X-DreamFactory-Session-Token": localStorage.token
//   },
//   })
// export default {


     
//         register: function(firstname, lastname, email, password, callback) {
//             $.ajax({
//                 dataType: 'json',
//                 contentType: 'application/json; charset=utf-8',
//                 url: INSTANCE_URL + '/api/v2/user/register?login=true',
//                 data: JSON.stringify({
//                     "first_name": firstname,
//                     "last_name": lastname,
//                     "email": email,
//                     "new_password": password
//                 }),
//                 cache: false,
//                 method: 'POST',
//                 success: function (response) {
//                     callback(response);
//                 },
//                 error: function (response) {
//                     callback(response);
//                     return false;
//                 }
//             });
//         },

//         getRecords: function(table, params, token, callback) {
//             $.ajax({
//                 dataType: 'json',
//                 contentType: 'application/json; charset=utf-8',
//                 url: INSTANCE_URL + '/api/v2/db/_table/' + table,
//                 data: params,
//                 cache: false,
//                 method: 'GET',
//                 headers: {
//                     "X-DreamFactory-API-Key": APP_API_KEY,
//                     "X-DreamFactory-Session-Token": token
//                 },
//                 success: function (response) {
//                     if (typeof callback !== 'undefined') {
//                         if (response.hasOwnProperty('resource'))
//                             callback(response.resource);
//                         else
//                             callback(response);
//                     }
//                 },
//                 error: function (response) {
//                     callback(response);
//                     return false;
//                 }
//             });
//         },

//         getSnipeRecords: function(type, params, callback) {
//             $.ajax({
//                 dataType: 'json',
//                 contentType: 'application/json; charset=utf-8',
//                 url: INSTANCE_URL + '/api/v2/snipeapi/api/v1' +type,
//                 data: params,
//                 cache: false,
//                 method: 'GET',
//                 headers: {
//                     "X-DreamFactory-API-Key": APP_API_KEY,
//                     "X-DreamFactory-Session-Token": token
//                 },
//                 success: function (response) {
//                     if (typeof callback !== 'undefined') {
//                         if (response.hasOwnProperty('resource'))
//                             callback(response.resource);
//                         else
//                             callback(response);
//                     }
//                 },
//                 error: function (response) {
//                     callback(response);
//                     return false;
//                 }
//             });
//         },
//         getProfile: function(id, callback) {
//             api.get('/api/v2/db/_table/Contact/').then(({ data }) => {
//                 if (data.hasOwnProperty('resource')){
//                     callback(data.resource)
//                 }else{
//                     callback(data.resource)
//                 }
//                 //  console.log(data)
//                 //  console.log(id)
//                 //  if (typeof callback !== 'undefined') {
//                 //                  if (data.hasOwnProperty('resource')){
//                 //                      return data
//                 //                      if(id){
//                 //                     var result = _.findIndex(data.resource, function(o) { return o.first_name == 'Ash', o.last_name == 'Downing' });
//                 //                         // console.log(data.resource[result])
//                 //                         callback(data.resource[result])}
                                     
//                 //                      callback(data.resource)}
//                 //                  else
//                 //                      callback(data);
//                 //              }else{
//                 //                  callback(data)
//                 //              }
//              }).catch(err => this.isLoading = false )
//              // $.ajax({
//              //     dataType: 'json',
//              //     contentType: 'application/json; charset=utf-8',
//              //     url: INSTANCE_URL + '/api/v2/snipeapi/api/v1' +type,
//              //     data: params,
//              //     cache: false,
//              //     method: 'GET',
//              //     headers: {
//              //         "X-DreamFactory-API-Key": APP_API_KEY,
//              //         "X-DreamFactory-Session-Token": token
//              //     },
//              //     success: function (response) {
//              //         if (typeof callback !== 'undefined') {
//              //             if (response.hasOwnProperty('resource'))
//              //                 callback(response.resource);
//              //             else
//              //                 callback(response);
//              //         }
//              //     },
//              //     error: function (response) {
//              //         callback(response);
//              //         return false;
//              //     }
//              // });
//          },
//         setRecord: function(table, params, token, callback) {
//             $.ajax({
//                 dataType: 'json',
//                 contentType: 'application/json; charset=utf-8',
//                 url: INSTANCE_URL + '/api/v2/db/_table/' + table,
//                 data: params,
//                 cache: false,
//                 method: 'POST',
//                 headers: {
//                     "X-DreamFactory-API-Key": APP_API_KEY,
//                     "X-DreamFactory-Session-Token": token
//                 },
//                 success: function (response) {
//                     if (typeof callback !== 'undefined') {
//                         if (response.hasOwnProperty('resource'))
//                             callback(response.resource);
//                         else
//                             callback(response);
//                     }
//                 },
//                 error: function (response) {
//                     callback(response);
//                     return false;
//                 }
//             });
//         },

//         updateRecord: function(table, params, token, callback) {
//             $.ajax({
//                 dataType: 'json',
//                 contentType: 'application/json; charset=utf-8',
//                 url: INSTANCE_URL + '/api/v2/db/_table/' + table,
//                 data: params,
//                 cache: false,
//                 method: 'PATCH',
//                 headers: {
//                     "X-DreamFactory-API-Key": APP_API_KEY,
//                     "X-DreamFactory-Session-Token": token
//                 },
//                 success: function (response) {
//                     if (typeof callback !== 'undefined') {
//                         if (response.hasOwnProperty('resource'))
//                             callback(response.resource);
//                         else
//                             callback(response);
//                     }
//                 },
//                 error: function (response) {
//                     callback(response);
//                     return false;
//                 }
//             });
//         },

//         deleteRecord: function(table, params, token, callback) {
//             $.ajax({
//                 dataType: 'json',
//                 contentType: 'application/json; charset=utf-8',
//                 url: INSTANCE_URL + '/api/v2/db/_table/' + table + '?' + params,
//                 //data: params,
//                 cache: false,
//                 method: 'DELETE',
//                 headers: {
//                     "X-DreamFactory-API-Key": APP_API_KEY,
//                     "X-DreamFactory-Session-Token": token
//                 },
//                 success: function (response) {
//                     if (typeof callback !== 'undefined') {
//                         if (response.hasOwnProperty('resource'))
//                             callback(response.resource);
//                         else
//                             callback(response);
//                     }
//                 },
//                 error: function (response) {
//                     callback(response);
//                     return false;
//                 }
//             });
//         },

//         replaceRecord: function(table, params, token, callback) {
//             $.ajax({
//                 dataType: 'json',
//                 contentType: 'application/json; charset=utf-8',
//                 url: INSTANCE_URL + '/api/v2/db/_table/' + table,
//                 data: params,
//                 cache: false,
//                 method: 'PUT',
//                 headers: {
//                     "X-DreamFactory-API-Key": APP_API_KEY,
//                     "X-DreamFactory-Session-Token": token
//                 },
//                 success: function (response) {
//                     if (typeof callback !== 'undefined') {
//                         if (response.hasOwnProperty('resource'))
//                             callback(response.resource);
//                         else
//                             callback(response);
//                     }
//                 },
//                 error: function (response) {
//                     callback(response);
//                     return false;
//                 }
//             });
//         }
//     }
//     // }