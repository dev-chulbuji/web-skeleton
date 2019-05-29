import IPage from "@/interface/IPage";
import api from "@/utils/api";

export default {
  initData: ({commit}: any) => {
    commit('initData')
  },
  getData: async ({ commit, getters }: any) => {
    const { idx } = getters.getItem

    commit('setLoading', true)

    const response = await api.get(`/incidents/${idx}`)
    const data = response.data

    commit('setItem', data)
    commit('setLoading', false)
  }
}
