<template>

<q-layout >
	<q-page-container>
    <q-page padding class="row justify-center ">
    <div style="width: 600px; max-width: 90vw; ">
     

      <div class="flex-row-docs q-al-xl">
       
        <h4>Andrews Administration Application</h4>
  
        <div class="doc-container q-pa-xl">
     
          <div class="row justify-center ">
            
         <form  >
        <div class="input-group ">
          <span class="input-group-addon "><i class="fa fa-envelope"></i></span>
          <input class="form-control " name="email" placeholder="Email" type="text" v-model="form.email">
        </div>

        <div class="input-group  ">
          <span class="input-group-addon"><i class="fa fa-lock"></i></span>
          <input class="form-control" name="password" placeholder="Password" type="password" v-model="form.pass">
        </div>
		<div class="q-pa-sm">
           <q-btn  color="primary" @click="submit">Submit</q-btn>
		</div>
	  </form>
            </div>
           
          </div>
		       <div class="row justify-center">
        <q-alert
          color="warning"
          inline
          class="q-mb-lg"
        >
Sometimes you will need to click on the submit button twice, I cant seem to track the bug down        </q-alert>
      </div>
        </div>
      </div>
    </div>
    </q-page>

    </q-page-container>
</q-layout>
</template>

<script>
//8fca92a4a5276109256648f2d9fc0dda23187c21
//4fc5583b5f14f6f999b4d5b071e708b52be23467

import { required, email } from "vuelidate/lib/validators";
import { Notify } from "quasar";
import auth from "../utils/auth";
import router from "../router";
const querystring = require("querystring");
console.log(process.env);
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        email: "",
        pass: ""
      },
      errors: [],

      error: false
    };
  },
  validations: {
    form: {
      //   email: { required, email },
      pass: { required }
    }
  },
  created() {
    console.log("created");
  },
  methods: {
    submit() {
      // this.$v.form.$touch();
      // if (process.env.DEV) {
      //   this.form.email = "ash@andrewscarpetcleaning.com";
      //   this.form.pass = "asdfasdf";
      // }
      // if (this.$v.form.$error) {
      //   Notify.create("Please review fields again.");
      //   debugger;
      //   return;
      // }

      // var data = {
      //   // email: this.form.email,
      //   // password: this.form.pass,
      //    email:"ash@andrewscarpetcleaning.com",
      //     password:"asdfasdf",
      //   remember_me: true
      // };

      // localStorage.clear();
      // this.login(data);
      axios({
      method: 'post',
      url: 'http://47.219.112.177/api/v2/user/session', 
      data: {service:"googleoauth"}
      })
    },
//     login(data) {
//       console.log('LOGGING IN -=-==')
//       var vm = this
//       // console.log(this.form.email)
//       // console.log(this.form.pass)
//       // var data =  {email: 'ash@andrewscarpetcleaning.com', password:'asdfasdf'}
//       // var data = "email=ash@andrewscarpetcleaning.com&password=asdfasdf"

//             axios({
//   method: 'post',
//   url: 'http://47.219.112.177/api/v2/user/session',
//   headers: {
//    'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   data:  querystring.stringify(data)
// })
//   .then((response) => {
//     return this.$api.get(`/db/_table/Contact/`); // using response.data
//   })
//   .then((response) => {
//     console.log('Response', response);
//   });

  //       axios.post(
  //         "http://47.219.112.177/api/v2/user/session",
  //         querystring.stringify(data)
  //       )
  // .then(response => {
  //         try {
  //           window.localStorage.setItem("token", response.data.session_token);
  //         } catch (e) {
  //           console.log("relogging");
  //           setTimeout(this.login(data), 1000);
  //         }
  //         if (!window.localStorage.getItem("token")) {
  //           console.log("relogging");
  //           setTimeout(this.login(data), 1000);
  //         }
  //         window.localStorage.setItem("token", response.data.session_token);
  //         console.log(response.data.email);
  //         window.localStorage.setItem("loginEmail", response.data.email);

  //         return this.$api.get(`/db/_table/Contact/`);
  //       })


//       axios({
//   method: 'post',
//   url: 'http://47.219.112.177/api/v2/user/session/',
//   headers: {
//    'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   data: data
// }).then(function (response){
//   alert('asdf')
//    window.localStorage.setItem("token", response.data.session_token);
//    console.log(response.data.session_token)
//    console.log(this)
//    return this.$api.get(`/db/_table/Contact/`);
// }).catch(e => {
//           console.error("error found logging out from login", e);
//         })




        // .then(response => {
        //   let info = _.find(response.data.resource, function(o) {
        //     return (o.email = window.localStorage.getItem("loginEmail"));
        //   });
        //             // window.localStorage.setItem('userInfo',querystring.stringify(info))
        //   window.localStorage.setItem("userInfo", JSON.stringify(info));
        //   console.log(info);
        //   window.localStorage.setItem("id", JSON.stringify(info.id));

        //   return this.$api.get(
        //     `/db/_table/contact_info/` + window.localStorage.getItem("id")
        //   );
        // })

        // .post(
        //   "http://47.219.112.177/api/v2/user/session",
        //   querystring.stringify(data)
        // )
        // .then(response => {
        //   try {
        //     window.localStorage.setItem("token", response.data.session_token);
        //   } catch (e) {
        //     console.log("relogging");
        //     setTimeout(this.login(data), 1000);
        //   }
        //   if (!window.localStorage.getItem("token")) {
        //     console.log("relogging");
        //     setTimeout(this.login(data), 1000);
        //   }
        //   window.localStorage.setItem("token", response.data.session_token);
        //   console.log(response.data.email);
        //   window.localStorage.setItem("loginEmail", response.data.email);

        //   return this.$api.get(`/db/_table/Contact/`);
        // })
        // .catch(e => {
        //   console.log("error found logging out from login", e);
        //   // this.errors.push(e)
        //   console.log("errror -=  ", e);
        // })
        // .then(response => {
        //   let info = _.find(response.data.resource, function(o) {
        //     return (o.email = window.localStorage.getItem("loginEmail"));
        //   });
        //   // window.localStorage.setItem('userInfo',querystring.stringify(info))
        //   window.localStorage.setItem("userInfo", JSON.stringify(info));
        //   console.log(info);
        //   window.localStorage.setItem("id", JSON.stringify(info.id));

        //   return this.$api.get(
        //     `/db/_table/contact_info/` + window.localStorage.getItem("id")
        //   );
        // })
        // .then(response => {
        //   let _profile = response.data;
        //   window.localStorage.setItem("profile", JSON.stringify(_profile));
        //   window.localStorage.setItem(
        //     "image",
        //     "http://192.168.1.171/api/v2/files/aaa/employee_images/" +
        //       window.localStorage.getItem("id") +
        //       ".jpg?api_key=b5cb82af7b5d4130f36149f90aa2746782e59a872ac70454ac188743cb55b0ba&session_token=" +
        //       window.localStorage.getItem("token")
        //   );
        //   console.log("going ");
        //   vm.$router.push({ path: "profile" });
        // })
        // .catch(e => {
        //   console.log("error found logging out from login", e);
        //   // this.errors.push(e)
        //   console.log("errror -=  ", e);
        // });
    // }
  },
  directives: {
    // focus: {
    //   // directive definition
    //   inserted: function(el) {
    //     el.focus();
    //   }
    // }
  }
};
</script>

<style>
.error {
  color: red;
}
</style>
