import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"

export default ({ app, Vue }) => {
  // do some logic here...

  Vue.use(Vuetify)
  // ... then, kick off our Quasar website/app:
  new Vue(app)
  // "app" has everything cooked in by Quasar CLI,
  // you don't need to inject it with anything at this point
}
