<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import auth from "./auth"
export default {
	data() {
		return {
			loggedIn: auth.loggedIn(),
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
