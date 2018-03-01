<template>
  <q-table
    ref="table"
    :data="serverData"
    :columns="columns"
    :filter="filter"
    row-key="name"
    :pagination.sync="serverPagination"
    :loading="loading"
    @request="request"
  >
    <template slot="top-right" slot-scope="props">
      <q-search hide-underline v-model="filter" />
    </template>
  </q-table>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      filter: '',
      loading: false,
      serverPagination: {
        page: 1,
        rowsNumber: 10 // specifying this determines pagination is server-side
      },

      serverData: [],
      columns: [
        {
          name: 'first_name',
          // required: true,
          label: 'Name',
          align: 'left',
          field: 'first_name',
          sortable: true
        },
        { name: 'last_name', label: 'Last Name', field: 'last_name', sortable: true },
        { name: 'email', label: 'Email', field: 'email', sortable: true },
        { name: 'department', label: 'Department', field: 'department' },
        // { name: 'protein', label: 'Protein (g)', field: 'protein' },
        // { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        // { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        // { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ]
    }
  },
  methods: {
    request ({ pagination, filter }) {
      // we set QTable to "loading" state
      this.loading = true

      // we do the server data fetch, based on pagination and filter received
      // (using Axios here, but can be anything; parameters vary based on backend implementation)

      this.$api
      // .get(`/data/${pagination.page}?sortBy=${pagination.sortBy}&descending=${pagination.descending}&filter=${filter}`)
      .get(`/db/_table/Contact/`)
      .then( data  => {
        // updating pagination to reflect in the UI
        this.serverPagination = pagination

        // we also set (or update) rowsNumber
        this.serverPagination.rowsNumber = data.rowsNumber

        // then we update the rows with the fetched ones
        console.log(data.data.resource)
        this.serverData = data.data.resource

        // finally we tell QTable to exit the "loading" state
        this.loading = false
      })
      .catch(error => {
        // there's an error... do SOMETHING
      console.log(error)
        // we tell QTable to exit the "loading" state
        this.loading = false
      })
    }
  },
  mounted () {
    // once mounted, we need to trigger the initial server data fetch
    this.request({
      pagination: this.serverPagination,
      filter: this.filter
    })
  }
}
</script>