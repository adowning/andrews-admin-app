<template>
  <q-layout view="lHh Lpr fFf">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Andrews Group
          <!-- <div slot="subtitle">Administration Application v0.0.1</div> -->
        </q-toolbar-title>
        <q-search inverted v-model="search" color="none" class="q-mr-xl" />
                <q-btn flat round dense icon="exit to app" label="Logout" @click="logOut()">{{userInfo.first_name}}</q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      content-class="bg-grey-2"
    >
     <div id="profile">
       <div row>
   <img v-bind:src="imageURL" class="avatar img-thumbnail hidden-print inline-block" >
      <!--img src="../img/avatar-1.svg" id="avatar" class="inline-block"--> 
       
       </div>
       
      <!-- <div row> -->
           <div id="user-name">
        <span > {{userInfo.first_name}}</span>
        <hr>
        <span style="color: green"> Online </span>
        <hr>
      </div>
      </div> 
     </div>
     <div row>
     <q-list no-border link >
      <q-item to="/liveview"  >
        <q-item-side icon="local shipping" />
        <q-item-main label="Live View"  />
      </q-item>
       <q-item to="/dashboard"  >
        <q-item-side icon="local shipping" />
        <q-item-main label="Dashboard"  />
      </q-item>
  <q-collapsible indent icon="devices other" label="Assets" >
      
      <q-item to="/hardware">
        <q-item-main label="Hardware"  />
      </q-item>
           <q-item to="/consumables">
        <q-item-main label="Consumables"  />
      </q-item>
                 <q-item to="/groups">
        <q-item-main label="Groups"  />
      </q-item>
  </q-collapsible>
   <q-item to="/workshop">
        <q-item-side icon="build" />
        <q-item-main label="Work Shop"  />
      </q-item>
  <q-collapsible indent icon="person" label="Employees" >
      <q-item to="/directory">
        <q-item-main label="Directory"/>
      </q-item>
     <q-item to="/profile">
        <q-item-main label="Profile"/>
      </q-item>
  </q-collapsible>
   <q-item to="/documents">
        <q-item-side icon="assignment" />
        <q-item-main label="Documents"  />
      </q-item>
       <q-item to="/logs">
        <q-item-side icon="list" />
        <q-item-main label="Logs"  />
      </q-item>
</q-list>
</div>
    </q-list>
    
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-layout-footer v-model="footer"  >
     
      <q-toolbar :inverted="$q.theme === 'ios'" style="background-color: #31CCEC !important; color:#4c566a;">
        
        <q-toolbar-title class="q-caption">
          "If you can't measure it, you can't improve it."    Debug info: {{route}}
        </q-toolbar-title>
       
      </q-toolbar>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";
// import auth from '../utils/auth'
import router from '../router'
import { Notify } from 'quasar'
const querystring = require('querystring');

export default {
  name: "LayoutDefault",
  data() {
    return {
      leftDrawerOpen: false,
      footer: true,
      loggedIn: {},
      userInfo: {},
      route: "",
      imageURL: "",
      search: {},
      errors: []
    };
  },
  watch: {
    errors:  function (val){
      console.log('errors happened', val)
        // router.push({ path: "login" })
        this.logOut()
    }
  },
   created() {
    console.log(window.localStorage.getItem('loginEmail'))
    // this.route = this.$router.fullPath
    console.log(this.$router.path)
    if(!window.localStorage.getItem('loginEmail')  || window.localStorage.getItem('loginEmail') == 'undefined'){
          // router.push({ path: "login" })
        this.logOut()          
    }
    this.imageURL = window.localStorage.getItem('image')
    this.userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  },
  methods: {
    openURL,
     logOut() {
    
    Notify.create("You have been logged out");
    localStorage.clear();
    router.push({ path: "login" })
    
  },
  }
};
</script>

<style scoped>

footer {
  height: 30px !important;
  text-align: left;
  color: #000000 !important;
  background-color: #31CCEC !important
}
/* .q-toolbar{
  background-color: #31CCEC !important
} */
#profile {
  padding-top: 20px !important;
  height: 130px !important;
  width: 120px !important;
}
element.style {
  top: -50 !important;
  top: -20;
  top: -50px;
}
#user-name {
    left: 80px;
    bottom: 77px;
    position: relative;
    width: 125px;
    top: -72px;
    right: -70px;
}
#user-actions {
    left: 90px;
    bottom: 71px;
    position: relative;
    width: 171px;
}
img.avatar {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 1px 1px rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);
    vertical-align: middle;
}
.q-layout-footer {
  background-color: #31CCEC !important
  
}
</style>
