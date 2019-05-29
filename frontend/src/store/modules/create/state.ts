export default {
	request: {
		incidentNum: '',
		symptom: {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		},
		cause: {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		},
		find_cause_way: {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		},
		action: {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		},
		effect: {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		},
		prevention_way: {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		},
		target_device: {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		},
		recognition_way: {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		},
		responsibility_person: {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		},
		responsibility_part: {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		},
		memo: {
			value: 'N/A',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		},
		occured_at: {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		},
		fined_at: {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		},
		actioned_at: {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		},
		solved_at: {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		},
		finder: {
			value: '',
			rules: [(v: any) => !!v || '필수입력 사항입니다.']
		},
	}
}
