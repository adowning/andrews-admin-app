import * as VueGoogleMaps from "vue2-google-maps";
export default ({ Vue }) => {
  Vue.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyAugMxD6TeU2vQ-y9e8K14LAR-RW8qtLOc"
    }
  });
};
