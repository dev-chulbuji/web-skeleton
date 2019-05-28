import IPage from "@/interface/IPage";
import api from "@/utils/api";

export default {
  init: async ({commit}: any, { page, perPage }: IPage) => {
    commit('initData', { page, perPage })
  },
  data: async ({ commit, getters }: any) => {
    const { page, perPage } = getters.getPagination

    commit('setLoading', true)

    const items = await api.get(`/incidents/${page}/${perPage}`)

    commit('setItems', items.data)
    commit('setTotal', 100)
    commit('setLoading', false)
  }
}
