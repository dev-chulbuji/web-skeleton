import moment from 'moment'

export default {
	initData: (state: any) => {
	},
	setItem: (state: any, payload: boolean) => {
		Object.keys(payload).forEach((key) => {
			if (key.includes('_at')) {
				payload[key] = moment(payload[key]).format('YYYY-MM-DD')
			}
		})
		state.item = payload
	},
	setLoading: (state: any, payload: boolean) => state.loading = payload,
}
