import IPage from "@/interface/IPage";
import api from "@/utils/api";

export default {
	createItem: async ({commit, getters}: any) => {
		commit('setLoading', true)

		const request = getters.getRequest
		const item = {}

		Object.keys(request).forEach((x: string) => {
			const key = x
			const value = request[x].value
			Object.assign(item, { [key]: value })
		})

		const response = await api.post(`/incidents`, { ...item })
		const {data} = response.data

		if (data > 0) {

		} else {

		}

		commit('setLoading', false)
		commit('setCreateDone', true)
	}
}
