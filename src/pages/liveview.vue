<template>
  <q-page class="flex flex-center">
<template>
  <gmap-map
    :center="center"
    :zoom="7"
    style="width: 100%; height: 600px; "
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>
  </q-page>
</template>

<style>

</style>

<script>
import auth from "../utils/auth"
export default {
	name: "LiveView",
	
    data () {
      return {
        center: {lat: 10.0, lng: 10.0},
        markers: [{
          position: {lat: 10.0, lng: 10.0}
        }, {
          position: {lat: 11.0, lng: 11.0}
        }]
      }
	},
	  mqtt: {
    'owntracks/#': function(val) {
      console.log(val.toString())
	},
	  },
	  created(){
		     this.$mqtt.subscribe('owntracks/#')
	  }
}
</script>
