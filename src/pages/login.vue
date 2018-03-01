<template>

<q-layout>
    <q-page-container>
<q-page class="flex flex-center">
 

    <div class="text-center col-sm-12">
    <!-- <img src="../assets/quasar-logo-full.svg" class="center-block logo">
			 -->
      <form >
        <div class="input-group">
          <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
          <input class="form-control" name="email" placeholder="Email" type="text" v-model="form.email">
        </div>

        <div class="input-group">
          <span class="input-group-addon"><i class="fa fa-lock"></i></span>
          <input class="form-control" name="password" placeholder="Password" type="password" v-model="form.pass">
        </div>
           <q-btn color="primary" @click="submit">Submit</q-btn>
			  <!-- <button type="submit" v-bind:class="'btn btn-primary btn-lg ' + loading">Submit</button> -->
      </form>

      <!-- errors -->
      <!-- <div v-if=response class="text-red"><p class="vertical-5p lead">{{response}}</p></div> -->
    </div>
 
</q-page>
    </q-page-container>
</q-layout>
</template>

<script>
//8fca92a4a5276109256648f2d9fc0dda23187c21
//4fc5583b5f14f6f999b4d5b071e708b52be23467

import { required, email } from "vuelidate/lib/validators"
import { Notify } from "quasar"
import auth from "../utils/auth"
import router from "../router"
const querystring = require('querystring');

export default {
	data() {
		return {
			form: {
				email: "ash@andrewscarpetcleaning.com",
				pass: "asdfasdf",
			},
			errors: [],
			error: false
		}
	},
	validations: {
		form: {
			email: { required, email },
			pass: { required },
		},
	},
	methods: {
		submit() {
			this.$v.form.$touch()

			if (this.$v.form.$error) {
				Notify.create("Please review fields again.")
				debugger
				return
			}
    var data =
    {
        email: this.form.email,
        password: this.form.pass,
        remember_me: true
	}
	var vm = this
	    localStorage.clear();

	 this.$axios.post("http://47.219.112.177/api/v2/user/session", querystring.stringify(data))
    .then(response => {
		window.localStorage.setItem('token',response.data.session_token);
		console.log(response.data.email)
		window.localStorage.setItem('loginEmail',response.data.email);
	
		 return this.$api.get(`/db/_table/Contact/`)
	}).then((response) => {
			let info = _.find(response.data.resource, function(o) { return o.email = window.localStorage.getItem('loginEmail') })
      // window.localStorage.setItem('userInfo',querystring.stringify(info))
      window.localStorage.setItem('userInfo', JSON.stringify(info))
      console.log(info)
			window.localStorage.setItem('id',JSON.stringify(info.id ))
		 return this.$api.get(`/db/_table/contact_info/`+ window.localStorage.getItem("id"))
	}).then((response) => {
			let _profile = response.data
			window.localStorage.setItem('profile', JSON.stringify(_profile))
			window.localStorage.setItem('image', "http://192.168.1.171/api/v2/files/aaa/employee_images/"+window.localStorage.getItem("id")+".jpg?api_key=b5cb82af7b5d4130f36149f90aa2746782e59a872ac70454ac188743cb55b0ba&session_token="+window.localStorage.getItem('token'))
				console.log('going ')
		 vm.$router.push({ path: "profile" })
	})
    .catch(e => {
      console.log('error found logging out from login', e)
      // this.errors.push(e)
     console.log('errror -=  ', e)
    })
	
	//  this.$axios.post("http://23.236.60.103/api/v2/user/session", querystring.stringify(data))
  //   .then(response => {
	// 	window.localStorage.setItem('token',response.data.session_token);
	// 	console.log(response.data.email)
	// 	window.localStorage.setItem('loginEmail',response.data.email);
	// 	console.log('going ')
  //    router.push({ path: "profile" })
	// })
  //   .catch(e => {
  //     console.log('error found logging out from login', e)
  //     this.errors.push(e)
  //     this.logOut()
  //   })
		},
	},
	directives: {
		focus: {
			// directive definition
			inserted: function(el) {
				el.focus()
			},
		},
	},
}
</script>

<style>
.error {
  color: red;
}
</style>
