import IPage from "@/interface/IPage";
import api from "@/utils/api";

export default {
  initData: ({commit}: any) => {
    commit('initData')
  },
  getData: async ({ commit, getters }: any) => {
    const { _id } = getters.getItem

    commit('setLoading', true)

    const response = await api.get(`/incidents?id=${_id}`)
    const data = response.data

    commit('setItem', data)
    commit('setLoading', false)
  }
}
