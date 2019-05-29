<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<v-card>
		<v-card-title flat class="transparent">
			<span class="headline">Create Incident</span>
		</v-card-title>

		<v-divider></v-divider>

		<v-card-text>
			<v-container grid-list-lg>
				<v-form ref="form">
					<v-layout wrap justify-space-between>
						<v-flex xs12 d-block>
							<v-text-field
								type="text" label="title"
								:rules="getRequest.title.rules"
								v-model="getRequest.title.value"/>
						</v-flex >
						<v-flex xs12 d-block>
							<v-text-field
								type="text" label="content"
								:rules="getRequest.content.rules"
								v-model="getRequest.content.value"/>
						</v-flex>
					</v-layout>
					<!-- <v-layout wrap justify-space-between>
						<v-flex xs6 d-block>
							<v-text-field
								type="text" label="Incident Number"/>
						</v-flex>
						<v-flex xs6 d-block>
							<v-text-field
								type="text" label="발견자"
								:rules="getRequest.finder.rules"
								v-model="getRequest.finder.value"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								type="text" label="증상"
								auto-grow
								rows="1"
								:rules="getRequest.symptom.rules"
								v-model="getRequest.symptom.value"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								type="text" label="원인"
								auto-grow
								rows="1"
								:rules="getRequest.cause.rules"
								v-model="getRequest.cause.value"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								type="text" label="원인 파악 방법"
								auto-grow
								rows="1"
								:rules="getRequest.find_cause_way.rules"
								v-model="getRequest.find_cause_way.value"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								type="text" label="대응"
								auto-grow
								rows="1"
								:rules="getRequest.action.rules"
								v-model="getRequest.action.value"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								type="text" label="서비스영향"
								auto-grow
								rows="1"
								:rules="getRequest.effect.rules"
								v-model="getRequest.effect.value"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								type="text" label="방지방안"
								auto-grow
								rows="1"
								:rules="getRequest.prevention_way.rules"
								v-model="getRequest.prevention_way.value"/>
						</v-flex>
						<v-flex xs6 d-block>
							<v-text-field
								type="text" label="대상장비"
								:rules="getRequest.target_device.rules"
								v-model="getRequest.target_device.value"/>
						</v-flex>
						<v-flex xs6 d-block>
							<v-textarea
								type="text" label="인지방법"
								auto-grow
								rows="1"
								:rules="getRequest.recognition_way.rules"
								v-model="getRequest.recognition_way.value"/>
						</v-flex>
						<v-flex xs6>
							<v-text-field
								type="text" label="담당부서"
								:rules="getRequest.responsibility_person.rules"
								v-model="getRequest.responsibility_person.value"/>
						</v-flex>
						<v-flex xs6>
							<v-text-field
								type="text" label="담당자"
								:rules="getRequest.responsibility_part.rules"
								v-model="getRequest.responsibility_part.value"/>
						</v-flex>
						<v-flex xs3>
							<v-menu
								v-model="dp1"
								:close-on-content-click="true"
								:nudge-right="40"
								lazy
								transition="scale-transition"
								offset-y
								full-width
								min-width="290px"
							>
								<template v-slot:activator="{ on }">
									<v-text-field
										v-model="getRequest.fined_at.value"
										label="발견일시"
										prepend-icon="event"
										readonly
										v-on="on"
									></v-text-field>
								</template>
								<v-date-picker v-model="getRequest.fined_at.value" @input="dp1 = false"></v-date-picker>
							</v-menu>
						</v-flex>
						<v-flex xs3>
							<v-menu
								v-model="dp2"
								:close-on-content-click="true"
								:nudge-right="40"
								lazy
								transition="scale-transition"
								offset-y
								full-width
								min-width="290px"
							>
								<template v-slot:activator="{ on }">
									<v-text-field
										v-model="getRequest.occured_at.value"
										label="발생일시"
										prepend-icon="event"
										readonly
										v-on="on"
									></v-text-field>
								</template>
								<v-date-picker v-model="getRequest.occured_at.value" @input="dp2 = false"></v-date-picker>
							</v-menu>
						</v-flex>
						<v-flex xs3>
							<v-menu
								v-model="dp3"
								:close-on-content-click="true"
								:nudge-right="40"
								lazy
								transition="scale-transition"
								offset-y
								full-width
								min-width="290px"
							>
								<template v-slot:activator="{ on }">
									<v-text-field
										v-model="getRequest.actioned_at.value"
										label="대응일시"
										prepend-icon="event"
										readonly
										v-on="on"
									></v-text-field>
								</template>
								<v-date-picker v-model="getRequest.actioned_at.value" @input="dp3 = false"></v-date-picker>
							</v-menu>
						</v-flex>
						<v-flex xs3>
							<v-menu
								v-model="dp4"
								:close-on-content-click="true"
								:nudge-right="40"
								lazy
								transition="scale-transition"
								offset-y
								full-width
								min-width="290px"
							>
								<template v-slot:activator="{ on }">
									<v-text-field
										v-model="getRequest.solved_at.value"
										label="해결일시"
										prepend-icon="event"
										readonly
										v-on="on"
									></v-text-field>
								</template>
								<v-date-picker v-model="getRequest.solved_at.value" @input="dp4 = false"></v-date-picker>
							</v-menu>
						</v-flex>
						<v-flex xs12>
							<v-textarea
								type="text" label="세부사항"
								auto-grow
								rows="1"
								:rules="getRequest.memo.rules"
								v-model="getRequest.memo.value"/>
						</v-flex>
					</v-layout> -->

					<v-layout>
						<v-spacer></v-spacer>
						<v-btn color="error" dark @click="cancel">
							Cancel
							<v-icon right dark>cancel</v-icon>
						</v-btn>
						<v-btn color="primary" dark @click="create">
							Create Incident
							<v-icon right dark>check_circle</v-icon>
						</v-btn>
					</v-layout>
				</v-form>
			</v-container>
		</v-card-text>
	</v-card>
</template>

<script>
	import {mapActions, mapGetters, mapMutations} from 'vuex'

	export default {
		name: 'CreateIncident',
		data() {
			return {
				dp1: '',
				dp2: '',
				dp3: '',
				dp4: '',
			}
		},
		beforeMount() {
			this.initData()
		},
		computed: {
			...mapGetters('create', ['getRequest'])
		},
		methods: {
			...mapActions('create', ['createItem']),
			...mapMutations('create', ['initData']),
			create() {
				if (this.$refs.form.validate()) {
					this.createItem()
				}
			},
			cancel() {
				this.$router.replace(this.$route.query.redirect || '/')
			}
		}
	}
</script>
