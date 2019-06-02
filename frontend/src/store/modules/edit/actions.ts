import IPage from "@/interface/IPage";
import api from "@/utils/api";

export default {
	initData: ({commit}: any) => {
		commit('initData')
	},
	getData: async ({commit, getters}: any) => {
		const { _id } = getters.getItem

		commit('setLoading', true)

		const response = await api.get(`/incidents?id=${_id.value}`)
		const { item, histories } = response.data

		commit('setResponse', item)
		commit('setLoading', false)
	},
	updateItem: async ({ commit, getters }: any) => {
		commit('setLoading', true)

		const request = getters.getItem
		const item = {}

		Object.keys(request).forEach((x: string) => {
			const key = x
			const value = request[x].value
			Object.assign(item, { [key]: value })
		})

		const response = await api.put(`/incidents`, { ...item })
		const { data } = response.data

		if (data > 0) {

		} else {

		}

		commit('setLoading', false)
		commit('setRequestDone', true)
	}
}
