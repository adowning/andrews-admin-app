<template>
  <q-page padding class="row justify-center">

      <div v-if="okShow" style="width: 800px; max-width: 90vw;" >
    

      <q-tabs inverted color="secondary" align="justify">
        <q-tab default name="mails" slot="title" icon="business" label="Basic Info" />
        <q-tab name="alarms" slot="title" icon="devices other" label="Checked Assets" />
        <q-tab name="movies" slot="title" icon="history" label="History" />

        <q-tab-pane name="mails">
                    <div class="row">  
 <div class="col-md-3 col-lg-3 " >    
                         <img v-bind:src="imageURL" style="height: 160px;"> 
                  
                         </div>
        <div class=" col-md-9 col-lg-9 "> 
                  <q-list highlight>
                      <q-item>
                        <q-item-side label>Position:</q-item-side>
                       <q-item-main>
                        <q-item-tile>{{userInfo.department}}</q-item-tile>
                         </q-item-main>
                      </q-item>
                      <q-item>
                        <q-item-side label>Hire date:</q-item-side>
                       <q-item-main>
                        
                        <q-item-tile>{{userInfo.hire_date}}</q-item-tile>
                       </q-item-main>

                      </q-item>
                
                        <q-item>
                        <q-item-side label>Home Address:</q-item-side>
               <q-item-main>
                 {{profile.address}}
                 <br>{{profile.city}}
                 <br> {{profile.country}}
                 </q-item-main>  
                      </q-item>
                      <q-item>
                        <q-item-side label>Email:</q-item-side>
                        <q-item-main><a href="mailto:"profile.email>{{profile.email}}</a></q-item-main>
                      </q-item>
                      <q-item>
                        <q-item-side label>Phone Number:</q-item-side>
                        <q-item-main>{{profile.phone}}
                        </q-item-main>
                      </q-item>
                     
                  </q-list>
                
                </div>
                    </div>
        </q-tab-pane>
        <q-tab-pane name="alarms">Checked Assets</q-tab-pane>
        <q-tab-pane name="movies">History</q-tab-pane>
      </q-tabs>
      </div>
    </div>
    
</q-page>
    </template>
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js">
</script>
<script src="//code.jquery.com/jquery-1.11.1.min.js">
</script>


<script>
import auth from "../utils/auth";
import store from "../store";

export default {
  name: "Profile",
  data: () => ({
    profile: {},
    userInfo: {},
    imageURL: "",
    okShow: false,
    errors: []
  }),
  created() {
    console.log('loaded profile')
    //if(window.localStorage.getItem('token')){
    this.getUserProfile();
    // }else{
    //  router.push({ path: "login" })
    //  }
  },
  methods: {

    getUserProfile() {
    if(window.localStorage.getItem("userInfo")){
      this.profile = JSON.parse(window.localStorage.getItem("profile"))
      this.imageURL = window.localStorage.getItem("image")
      this.userInfo = JSON.parse(window.localStorage.getItem("userInfo"))
      this.okShow = true
console.log(this.okShow)
    }
    }
  }
};
</script>

<style scoped>
img.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
  vertical-align: middle;
}
.panel-heading {
  background: #8fbcbb;
}
.panel-footer {
  background: #ffffff;
}
.q-item-side {
  width: 120px;
  color: #8fbcbb;
}
</style>
