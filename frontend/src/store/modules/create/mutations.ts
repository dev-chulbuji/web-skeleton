export default {
	initData: (state: any) => {
		state.request.symptom.rules = [ (v: any) => !!v || '필수입력 사항입니다.' ]
	},
}
