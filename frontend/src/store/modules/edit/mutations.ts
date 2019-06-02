export default {
	initData: (state: any) => {
		state.item.symptom = {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		}
		state.item.cause = {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		}
		state.item.find_cause_way = {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		}
		state.item.action = {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		}
		state.item.effect = {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		}
		state.item.prevention_way = {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		}
		state.item.target_device = {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		}
		state.item.recognition_way = {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		}
		state.item.responsibility_person = {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		}
		state.item.responsibility_part = {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		}
		state.item.memo = {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		}
		state.item.occured_at = {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		}
		state.item.fined_at = {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		}
		state.item.actioned_at = {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		}
		state.item.solved_at = {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		}
		state.item.finder = {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		}
		state.loading = false
		state.requestDone = false
	},
	setLoading: (state: any, payload: boolean) => state.loading = payload,
	setRequestDone: (state: any, payload: boolean) => state.requestDone = payload,
	setItem: (state: any, payload: any) => state.item = payload,
	setResponse: (state: any, payload: any) => {
		const item = {}
		Object.keys(state.item).forEach((x: string) => {
			const key = x
			const value = payload[key]
			const rule = state.item[key].rule

			item[key] = { value, rule }
		})

		state.item = item
	},
	setItemId: (state: any, payload: any) => {
		state.item._id = {
			value: payload,
			rules: []
		}
	}
}
