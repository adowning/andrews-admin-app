<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import auth from "./utils/auth"
export default {
	data() {
		return {
			loggedIn: auth.loggedIn(),
			profile: auth.getProfile(),
		}
	},
	created() {
		auth.onChange = loggedIn => {
			this.loggedIn = loggedIn
		}
	},
}
</script>

<style>

</style>
