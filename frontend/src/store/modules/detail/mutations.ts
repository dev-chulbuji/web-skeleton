export default {
	setItem: (state: any, payload: boolean) => state.item = payload,
	setItemIdx: (state: any, idx: number) => state.item = {
		...state.item, 
		idx
	},
	setLoading: (state: any, payload: boolean) => state.loading = payload,
}
