<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">Sorry, nothing here...<strong>(404)</strong></p>
    <span>{{r}}</span>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/login')"
    >Go back</q-btn>
  </div>
</template>

<script>
export default {
  name: "LayoutDefault",
  data() {
  
  },
    computed: {
 
    r () {
   
        return this.$router
      }
    }
};
</script>

