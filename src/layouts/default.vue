<template>
  <q-layout view="lHh Lpr lFf">
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
          <div slot="subtitle">Administration Application v0.0.1</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      content-class="bg-grey-2"
    >
     <div id="profile">
       <div row>
   <img src ="http://0.0.0.0:83/uploads/avatars/ash-downing.jpg" class="avatar img-thumbnail hidden-print inline-block" >
      <!--img src="../img/avatar-1.svg" id="avatar" class="inline-block"--> 
       
       </div>
       
      <!-- <div row> -->
           <div id="user-name">
        <span > Ash Downing </span>
        <hr>
        <span style="color: green"> Online </span>
        <hr>
      </div>
      <!-- </div> -->
  <!-- <div class="q-btn-group  "> -->
        <!-- <button tabindex="0" class="q-btn inline relative-position q-btn-item non-selectable q-btn-rectangle q-focusable q-hoverable bg-tertiary text-white">
          <div class="q-focus-helper"></div><div class="q-btn-inner row col items-center justify-center">
            <i aria-hidden="true" class="q-icon material-icons">timeline</i>
            </div></button> 
            <button tabindex="0" class="q-btn inline relative-position q-btn-item non-selectable q-btn-rectangle q-focusable q-hoverable bg-tertiary text-white">
              <div class="q-focus-helper"></div><div class="q-btn-inner row col items-center justify-center">
                <i aria-hidden="true" class="q-icon material-icons">visibility</i></div></button> 
                <button tabindex="0" class="q-btn inline relative-position q-btn-item non-selectable q-btn-rectangle q-focusable q-hoverable bg-tertiary text-white">
                  <div class="q-focus-helper"></div><div class="q-btn-inner row col items-center justify-center">
                    <i aria-hidden="true" class="q-icon material-icons">update</i></div></button> -->
                    <!-- </div> -->
      </div> 
     </div>
     <div row>
     <q-list no-border link>
      <q-item to="/liveview">
        <q-item-side icon="map" />
        <q-item-main label="Live View"  />
      </q-item>
  <q-collapsible indent icon="person" label="Assets" >
      
      <q-item to="/hardware">
        <q-item-side icon="record_voice_over" />
        <q-item-main label="Hardware"  />
      </q-item>
           <q-item to="/consumables">
        <q-item-side icon="record_voice_over" />
        <q-item-main label="Consumables"  />
      </q-item>
                 <q-item to="/consumables">
        <q-item-side icon="record_voice_over" />
        <q-item-main label="Groups"  />
      </q-item>
      <!-- <q-list separator> -->
  </q-collapsible>
  <q-collapsible indent icon="person" label="Employees" >
      <q-item to="/directory">
        <q-item-main label="Directory"/>
      </q-item>
     <q-item to="/profile">
        <q-item-main label="Profile"/>
      </q-item>
  </q-collapsible>
</q-list>
</div>
    </q-list>
    
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-layout-footer reveal v-if="$q.theme === 'ios'">
  <nav-tabs />
</q-layout-footer>
<q-layout-footer reveal v-if="$q.theme === 'electron'">
</q-layout-footer>
<q-layout-footer reveal v-if="$q.theme === 'mat'">
</q-layout-footer>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";

export default {
  name: "LayoutDefault",
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  methods: {
    openURL
  }
};
</script>

<style scoped>
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
</style>
