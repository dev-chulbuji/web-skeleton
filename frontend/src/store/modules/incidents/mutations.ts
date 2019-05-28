import axios from "axios";
import api from "@/utils/api";
import IPage from "@/interface/IPage";


export default {
  initData: async (state: any) => {
      // const items = await api.get(`incidents/${page}/${perPage}`)
      // state.incidents = items
    state.headers = [{
      text: 'title',
      align: 'center',
      sortable: true,
      value: 'title'
    },{
      text: 'content',
      align: 'center',
      sortable: true,
      value: 'content'
    }]
    state.total = 0
    state.loading = false
  },
  setLoading: (state: any, payload: boolean) => state.loading = payload,
  setTotal: (state: any, payload: number) => state.total = payload,
	setPagination: (state: any, payload: any) => state.pagination = payload,
  setItems: (state: any, payload: any) => {
    console.log(payload)
    state.items = payload
  },
}
