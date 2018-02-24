<template>
  <q-page class="flex flex-center">
  LiveView
   <p>Yay you made it <b>{{info.username}}</b>!</p>
  </q-page>
</template>

<style>

</style>

<script>
import auth from "../utils/auth"
export default {
	name: "LiveView",
	data() {
		return {
			info: JSON.parse(auth.getUserInfo()),
		}
	},
}
</script>
