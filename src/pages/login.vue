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
          <input class="form-control " name="email" placeholder="Email" type="text" model="form.email">
        </div>

        <div class="input-group  ">
          <span class="input-group-addon"><i class="fa fa-lock"></i></span>
          <input class="form-control" name="password" placeholder="Password" type="password" model="form.pass">
        </div>
		<div class="q-pa-sm">
           <q-btn  color="primary" @click="onSignin">Submit</q-btn>
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
// import auth from "../utils/auth";
import router from "../router";
// const querystring = require("querystring");
// console.log(process.env);
// import axios from 'axios'


  export default {
    data () {
      return {
        email: '',
        password: '',
        login: true
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/profile')
        }
      }
    },
    methods: {
      onSignin () {
        // this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
        window.localStorage.clear()
        this.$store.dispatch('signUserIn', {email: 'd@d.com', password: 'asdfasdf'})
      },
        registerUser () {
        // this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
        this.$store.dispatch('registerUser', {email: 'd@d.com', password: 'asdfasdf', username: this.username, photoURL:this.photoURL})
      },
      onDismissed () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>

<style>
.error {
  color: red;
}
</style>
