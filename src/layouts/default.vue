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
     <q-list no-border link inset-separator>
      <!-- <q-list-header>Essential Links</q-list-header> -->
      <q-item to="/liveview">
        <q-item-side icon="map" />
        <q-item-main label="Live View"  />
      </q-item>
      <q-item to="/hardware">
        <q-item-side icon="record_voice_over" />
        <q-item-main label="Hardware"  />
      </q-item>
           <q-item to="/consumables">
        <q-item-side icon="record_voice_over" />
        <q-item-main label="Consumables"  />
      </q-item>
      <q-list separator>
  <q-collapsible indent icon="person" label="Employees" >
      <q-item to="/directory">
        <q-item-main label="Directory"/>
      </q-item>
     <q-item to="/profile">
        <q-item-main label="Profile"/>
      </q-item>
  </q-collapsible>
</q-list>
    </q-list>
    
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar"

export default {
	name: "LayoutDefault",
	data() {
		return {
			leftDrawerOpen: false,
		}
	},
	methods: {
		openURL,
	},
}
</script>

<style>

</style>
