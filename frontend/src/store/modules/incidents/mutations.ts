export default {
	initData: async (state: any) => {
		state.headers = [{
			text: 'title',
			value: 'title',
			align: 'left',
			sortable: true,
		}, {
			text: 'content',
			value: 'content',
			align: 'left',
			sortable: true,
		}]
		state.selectedItems = []
		state.total = 0
		state.loading = false
		state.pagination = {
			descending: false,
			page: 1,
			rowsPerPage: 10,
			sortBy: '',
			totalItems: 0
		}
	},
	setLoading: (state: any, payload: boolean) => state.loading = payload,
	setTotal: (state: any, payload: number) => state.total = payload,
	setItems: (state: any, payload: any) => state.items = payload,
	setSelectedItems: (state: any, payload: any) => state.selectedItems = payload,
	setSearchTitle: (state:any, payload: any) => state.searchTitle = payload,
	setPagination: (state: any, payload: any) => state.pagination = payload,
	setPaginationPage: (state: any, payload: any) => state.pagination = {
		...state.pagination,
		page: payload
	},
}
