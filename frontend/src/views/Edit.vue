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
						<v-flex xs6 d-block>
							<v-text-field
								type="text" label="Incident Number"
								disabled
								v-model="item._id.value"/>
						</v-flex>
						<v-flex xs6 d-block>
							<v-text-field
								type="text" label="발견자"
								:rules="item.finder.rules"
								v-model="item.finder.value"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								type="text" label="증상"
								auto-grow
								rows="1"
								:rules="item.symptom.rules"
								v-model="item.symptom.value"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								type="text" label="원인"
								auto-grow
								rows="1"
								:rules="item.cause.rules"
								v-model="item.cause.value"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								type="text" label="원인 파악 방법"
								auto-grow
								rows="1"
								:rules="item.find_cause_way.rules"
								v-model="item.find_cause_way.value"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								type="text" label="대응"
								auto-grow
								rows="1"
								:rules="item.action.rules"
								v-model="item.action.value"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								type="text" label="서비스영향"
								auto-grow
								rows="1"
								:rules="item.effect.rules"
								v-model="item.effect.value"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								type="text" label="방지방안"
								auto-grow
								rows="1"
								:rules="item.prevention_way.rules"
								v-model="item.prevention_way.value"/>
						</v-flex>
						<v-flex xs6 d-block>
							<v-text-field
								type="text" label="대상장비"
								:rules="item.target_device.rules"
								v-model="item.target_device.value"/>
						</v-flex>
						<v-flex xs6 d-block>
							<v-textarea
								type="text" label="인지방법"
								auto-grow
								rows="1"
								:rules="item.recognition_way.rules"
								v-model="item.recognition_way.value"/>
						</v-flex>
						<v-flex xs6>
							<v-text-field
								type="text" label="담당부서"
								:rules="item.responsibility_person.rules"
								v-model="item.responsibility_person.value"/>
						</v-flex>
						<v-flex xs6>
							<v-text-field
								type="text" label="담당자"
								:rules="item.responsibility_part.rules"
								v-model="item.responsibility_part.value"/>
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
										v-model="item.fined_at.value"
										label="발견일시"
										prepend-icon="event"
										readonly
										v-on="on"
									></v-text-field>
								</template>
								<v-date-picker v-model="item.fined_at.value" @input="dp1 = false"></v-date-picker>
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
										v-model="item.occured_at.value"
										label="발생일시"
										prepend-icon="event"
										readonly
										v-on="on"
									></v-text-field>
								</template>
								<v-date-picker v-model="item.occured_at.value" @input="dp2 = false"></v-date-picker>
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
										v-model="item.actioned_at.value"
										label="대응일시"
										prepend-icon="event"
										readonly
										v-on="on"
									></v-text-field>
								</template>
								<v-date-picker v-model="item.actioned_at.value" @input="dp3 = false"></v-date-picker>
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
										v-model="item.solved_at.value"
										label="해결일시"
										prepend-icon="event"
										readonly
										v-on="on"
									></v-text-field>
								</template>
								<v-date-picker v-model="item.solved_at.value" @input="dp4 = false"></v-date-picker>
							</v-menu>
						</v-flex>
						<v-flex xs12>
							<v-textarea
								type="text" label="세부사항"
								auto-grow
								rows="1"
								:rules="item.memo.rules"
								v-model="item.memo.value"/>
						</v-flex>
					</v-layout>

					<v-layout>
						<v-spacer></v-spacer>
						<v-btn color="error" dark @click="cancel">
							Cancel
							<v-icon right dark>cancel</v-icon>
						</v-btn>
						<v-btn color="primary" dark @click="update">
							Update Incident
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
		name: 'EditIncident',
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
		mounted() {
			this.getData()
		},
		watch: {
			requestDone: {
				handler() {
					if (this.getRequestDone) {
						this.$router.go(-1)
					}
				},
				deep: true
			}
		},
		computed: {
			...mapGetters('edit', ['getItem', 'getRequestDone']),
			item: {
				get() {
					return this.getItem
				},
				set(payload) {
					this.setItem(payload)
				}
			},
			requestDone: {
				get() {
					return this.getRequestDone
				},
				set(value) {
					this.setRequestDone(value)
				}
			}
		},
		methods: {
			...mapActions('edit', ['initData', 'getData', 'updateItem']),
			...mapMutations('edit', ['setRequestDone', 'setItem']),
			update() {
				if (this.$refs.form.validate()) {
					this.updateItem()
				}
			},
			cancel() {
				this.$router.go(-1)
			}
		}
	}
</script>
