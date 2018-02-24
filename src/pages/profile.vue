<template>
  <q-page>
  
    <div class="row">
      <div class="col-1">
      </div>
      <div class="col-10">
  
        <q-toolbar color="yellow" class="text-dark">
          <q-btn flat round dense icon="assignment_ind" />
          <q-toolbar-title>
            Toolbar
            <!-- <span slot="subtitle">Subtitle</span> -->
          </q-toolbar-title>
          <q-btn flat round dense icon="sim_card" />
          <q-btn flat round dense icon="gamepad" />
        </q-toolbar>
      </div>
      <div class="col-1">
      </div>
  
    </div>
  
    <div class="row gutter-sm">
      <div class="col-1">
      </div>
      <div class="col-2">
        <!-- <img src="0.0.0.0:83/uploads/avatars/ash-downing.jpg" class="avatar img-thumbnail hidden-print"> -->
        <img src="http://0.0.0.0:83/uploads/avatars/ash-downing.jpg" />
  
      </div>
      <div class="col-6">
        <q-list highlight>
          <!-- <q-list-header>Recent chats</q-list-header> -->
          <q-item>
            <q-item-side label>(650) 555 - 1234 </q-item-side>
            <q-item-main>
              <q-item-tile label>(650) 555 - 1234</q-item-tile>
              <!-- <q-item-tile sublabel>Mobile</q-item-tile> -->
            </q-item-main>
            <!-- <q-item-side right icon="chat_bubble" color="green" /> -->
          </q-item>
        </q-list>
      </div>
  
      <div class="col-2 ">
        <div q-list>
          <q-btn color="primary" class="full-width" label="Full-width" />
          <q-btn color="secondary" class="full-width" label="Full-width" />
  
          </q-list>
        </div>
        <div class="col-1">
        </div>
      </div>
    </div>
    </div>
  
  
  
  </q-page>
</template>

<style>
  
</style>

<script>
  export default {
    name: "Profile",
    data: () => ({
      tableData: []
    }),
    async created() {
      try {
        const response = await axios.get(
          `http://jsonplaceholder.typicode.com/posts`
        );
        this.posts = response.data;
      } catch (e) {
        this.errors.push(e);
      }
    }
  };
</script>

<style lang="stylus">
.docs-btn {
  .q-btn {
margin: 5px;
  }

  .btn-fixed-width {
    width: 200px;
  }
}
</style>
// Name
// Username
// Groups
// Job
// Employee No.
// Manager
// Email
// Phone
// Location
// Created at