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
// import tableData from "assets/table-data"

export default {
	data() {
		return {
			filter: "",
			loading: false,
			serverPagination: {
				page: 1,
				rowsNumber: 10, // specifying this determines pagination is server-side
			},

			serverData: [],
			columns: [
				{
					name: "desc",
					required: true,
					label: "Dessert (100g serving)",
					align: "left",
					field: "name",
					sortable: true,
				},
				{
					name: "calories",
					label: "Calories",
					field: "calories",
					sortable: true,
				},
				{ name: "fat", label: "Fat (g)", field: "fat", sortable: true },
				{ name: "carbs", label: "Carbs (g)", field: "carbs" },
				{ name: "protein", label: "Protein (g)", field: "protein" },
				{ name: "sodium", label: "Sodium (mg)", field: "sodium" },
				{
					name: "calcium",
					label: "Calcium (%)",
					field: "calcium",
					sortable: true,
					sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
				},
				{
					name: "iron",
					label: "Iron (%)",
					field: "iron",
					sortable: true,
					sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
				},
			],
		}
	},
	methods: {
		request({ pagination, filter }) {
			// we set QTable to "loading" state
			this.loading = true

			// we do the server data fetch, based on pagination and filter received
			// (using Axios here, but can be anything; parameters vary based on backend implementation)

			// axios
			// 	.get(
			// 		`/data/${pagination.page}?sortBy=${
			// 			pagination.sortBy
			// 		}&descending=${pagination.descending}&filter=${filter}`,
			// 	)
			// 	// .then({ data } => {
			// 	//   // updating pagination to reflect in the UI
			// 	//   this.serverPagination = pagination

			// 	//   // we also set (or update) rowsNumber
			// 	//   this.serverPagination.rowsNumber = data.rowsNumber

			// 	//   // then we update the rows with the fetched ones
			// 	//   this.serverData = data.rows

			// 	//   // finally we tell QTable to exit the "loading" state
			// 	//   this.loading = false
			// 	// })
			// 	.catch(error => {
			// 		// there's an error... do SOMETHING

			// 		// we tell QTable to exit the "loading" state
			// 		this.loading = false
			// 	})
		},
	},
	mounted() {
		// once mounted, we need to trigger the initial server data fetch
		this.request({
			pagination: this.serverPagination,
			filter: this.filter,
		})
	},
}
</script>