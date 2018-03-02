<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import router from "./router";
import { Notify } from "quasar";
export default {
  data() {
    return {
      // loggedIn: auth.loggedIn(),
      // profile: {},
      appLoaded: false
    };
  },
  methods: {
    logOut(reason) {
      if (reason) {
        Notify.create(reason);
      }
      this.$router.push({ path: "login" });
      this.$router.go(this.$router.currentRoute)
    }
	},
	mounted(){
//  console.log(this.appLoaded);
//     // this.$once(this.appLoaded)
//     console.log(this.$router.history.current.fullPath);
//     if (!window.sessionStorage.getItem('loaded')) {
//       console.log("wer");
//       window.sessionStorage.setItem('loaded', true)
//       this.logOut("Starting Session");
//     }
	},
  created() {
   
  }
};
</script>

<style>

</style>
