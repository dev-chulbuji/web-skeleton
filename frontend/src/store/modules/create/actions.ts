import IPage from "@/interface/IPage";
import api from "@/utils/api";

export default {
  createItem: async ({ commit, getters }: any) => {
    const { title, content } = getters.getRequest

    commit('setLoading', true)

    const response = await api.post(`/incidents`, {
      headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      title: title.value, 
      content: content.value,
    })
    const { data } = response.data

    if (data > 0) {

    } else {

    }

    commit('setLoading', false)
  }
}
