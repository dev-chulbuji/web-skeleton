import api from "@/utils/api";

export default {
	getHeader: ({commit}: any) => {
		commit('initData')
	},
	getData: async ({commit, getters}: any) => {
		const {page, rowsPerPage, sortBy} = getters.getPagination
		const searchTitle = getters.getSearchTitle

		commit('setLoading', true)

		const response = await api.get(`/incidents/${page}/${rowsPerPage}`)
		const {items, currentPage, totalSize} = response.data

		const renderedItems = items.slice(0, rowsPerPage)
		const addOnItems = items.slice(rowsPerPage, items.length)

		commit('setItems', renderedItems)
		commit('setAddOnItems', addOnItems)
		commit('setTotal', totalSize)
		commit('setLoading', false)
	},
	deleteSelectedItem: async ({commit, getters}: any) => {
		const items = getters.getItems
		const selectedItems = getters.getSelectedItems
		const addOnItems = getters.getAddOnItems
		const deletedItemIds = selectedItems.map((x: any) => x._id)

		const response = await api({
			url: `/incidents`,
			method: 'delete',
			data: {
				ids: deletedItemIds
			}
		})

		const filteredItems = items.filter((x: any) => !selectedItems.find((y: any) => y._id === x._id))
		commit('setItems', filteredItems)
	}
}
