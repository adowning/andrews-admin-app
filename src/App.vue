<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
require('dotenv').config()
import auth from "./utils/auth"
export default {
	data() {
		return {
			loggedIn: auth.loggedIn(),
			profile: {},
		}
	},
	created() {
		auth.onChange = loggedIn => {
			this.loggedIn = loggedIn
		}
		if(localStorage.token){
	auth.getProfile( profile => {
				if (!profile) {
					console.log(profile)
					this.error = true
				} else {
          console.log(profile)
          this.profile = profile
				}
			})
		}
	},
}
</script>

<style>

</style>
