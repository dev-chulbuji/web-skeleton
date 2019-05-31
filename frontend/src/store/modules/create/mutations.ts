export default {
	initData: (state: any) => {
		state.request = {
			symptom: {
				value: '프로세스를 진행 중인 고객에게 "계좌개설이 진행중입니다." 파업 노출 후 진행 불가 약관동의 화면으로 재진입되어야 하는데, 다시 CDD로 진행 되면서 약관동의 다음에서 오류 발생. 즉, 프로세스 중 이탈없이 계좌개설을 완료한 고객은 문제가 없었으나, 프로세스 중 이탈을 하였던 일부 고객에게만 문제가 발생함.',
				rules: [(v: any) => !!v || '필수입력 사항입니다.']
			},
			cause: {
				value: 'master 브랜치 빌드 중 의도하지 않은 브랜치로 변경되어 해당 브랜치의 소스로 빌드 됨.',
				rules: [(v: any) => !!v || '필수입력 사항입니다.']
			},
			find_cause_way: {
				value: 'git pull',
				rules: [(v: any) => !!v || '필수입력 사항입니다.']
			},
			action: {
				value: '09:40 ~ 10:10 > 빌드된 형상과 배포된 형상 비교 및 코드 이상 유무 확인 \n' +
					'10:10 ~ 10:15 > 빌드된 형상과 배포된 형상 불일치 확인 후 대응 방법 논의 \n' +
					'10:15 ~ 10:25 > 선조치가 필요하다는 결론에 빌드된 형상과 일치하는 내부 BT 형상으로 운영 적응 및 재시작 \n' +
					'10:25 이후 정상화',
				rules: [(v: any) => !!v || '필수입력 사항입니다.']
			},
			effect: {
				value: '계좌개설 이어하기 진행 불가 \\n * 피해 고객 : 고객번호 단위로 418명 \\n * 피해 금액 : N/A',
				rules: [(v: any) => !!v || '필수입력 사항입니다.']
			},
			prevention_way: {
				value: 'master 브랜치로 재빌드한 형상과 배포된 형상의 불일치로 인지',
				rules: [(v: any) => !!v || '필수입력 사항입니다.']
			},
			target_device: {
				value: 'sp-chn-bst01 ~ sp-chn-bst12 (12ea)',
				rules: [(v: any) => !!v || '필수입력 사항입니다.']
			},
			recognition_way: {
				value: 'CS 인입',
				rules: [(v: any) => !!v || '필수입력 사항입니다.']
			},
			responsibility_person: {
				value: 'dj.kim',
				rules: [(v: any) => !!v || '필수입력 사항입니다.']
			},
			responsibility_part: {
				value: '기술기획',
				rules: [(v: any) => !!v || '필수입력 사항입니다.']
			},
			memo: {
				value: 'N/A',
				rules: [(v: any) => !!v || '필수입력 사항입니다.']
			},
			occured_at: {
				value: '2019/03/14 06:06',
				rules: [(v: any) => !!v || '필수입력 사항입니다.']
			},
			fined_at: {
				value: '2019/03/14 06:06',
				rules: [(v: any) => !!v || '필수입력 사항입니다.']
			},
			actioned_at: {
				value: '2019/03/14 06:06',
				rules: [(v: any) => !!v || '필수입력 사항입니다.']
			},
			solved_at: {
				value: '2019/03/14 06:06',
				rules: [(v: any) => !!v || '필수입력 사항입니다.']
			},
			finder: {
				value: 'brown.oh',
				rules: [(v: any) => !!v || '필수입력 사항입니다.']
			},
		}
		state.loading = false
		state.createDone = false
	},
	setLoading: (state: any, payload: boolean) => state.loading = payload,
	setCreateDone: (state: any, payload: boolean) => state.createDone = payload
}
