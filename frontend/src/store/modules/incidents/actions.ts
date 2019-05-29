import IPage from "@/interface/IPage";
import api from "@/utils/api";

export default {
  getHeader: ({commit}: any) => {
    commit('initData')
  },
  getData: async ({ commit, getters }: any) => {
    const { page, rowsPerPage, sortBy } = getters.getPagination
    const searchTitle = getters.getSearchTitle

    commit('setLoading', true)

    const response = await api.get(`/incidents/${page}/${rowsPerPage}`)
    const { items, currentPage, totalSize } = response.data

    commit('setItems', items)
    commit('setTotal', totalSize)
    commit('setLoading', false)
  }
}
