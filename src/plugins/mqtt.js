import mqtt from "mqtt"
import Vue from "vue"
// import store from '../store'


let client = null

export const startSub = () => {
  client = mqtt.connect("ws://47.219.112.177:9001")
  client.on("connect", () => {
    client.subscribe("msgNotice")  
    client.subscribe("/devices/#")  
    console.log("链接mqtt成功，并已订阅相关主题")
  }).on('error', err => {
    console.log("链接mqtt报错", err)
    client.end()
    client.reconnect()  
  }).on("message", (topic, message) => {
    console.log('topic', topic);
    // message is Buffer
    if (topic + '' === 'msgNotice') {   
      // Notification({
      //   title: '通知',
      //   type: "success",
      //   message: JSON.parse(message.toString()).msg
      // })
    } else {    
      const devId = topic.substring(9);
      const arg = {
        devId,
        msg: message.toString()
      }
      console.log('收到设备上传消息：', arg);
      // store.commit('setDevArgsMsg', arg);
    }
  })

  Vue.prototype.$mqtt = client   
}

export const closeSub = () => {
  client && client.end()
}
// import VueMqtt from 'vue-mqtt';


// export default ({ Vue }) => {
//   Vue.use(VueMqtt,'ws://47.219.112.177:9001')


// }
