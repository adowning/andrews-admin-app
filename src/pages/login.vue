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
import { required, email } from "vuelidate/lib/validators"
import { Notify } from "quasar"
import auth from "../utils/auth"
import router from "../router"
export default {
	data() {
		return {
			form: {
				email: "ashdowning@gmail.com",
				pass: "asdfasdf",
			},
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
				console.log(window.localStorage.getItem("token"))
			
			auth.login(this.form.email, this.form.pass, loggedIn => {
				console.log(window.localStorage.getItem("token"))
				if (!window.localStorage.getItem("token")) {
					console.log(loggedIn)
					this.error = true
				} else {
					console.log(loggedIn)
					router.push({ path: "profile" })

					// this.$router.replace(
					// 	this.$route.query.redirect || "/profile",
					// )
				}
			})
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