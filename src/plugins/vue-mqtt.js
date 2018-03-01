import VueMqtt from 'vue-mqtt';
export default ({ Vue }) => {
  Vue.use(VueMqtt,'ws://47.219.112.177:9001');
}
