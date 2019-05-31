<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<v-card>
		<v-card-title flat class="transparent">
			<span class="headline">Detail Incident</span>
		</v-card-title>

		<v-divider></v-divider>

		<v-card-text>
			<v-container grid-list-lg>
				<v-form ref="form">
					<v-layout wrap justify-space-between>
						<v-flex xs6 d-block>
							<v-text-field
								disabled
								v-model="getItem._id"
								type="text" label="Incident Number"/>
						</v-flex>
						<v-flex xs6 d-block>
							<v-text-field
								disabled
								type="text" label="발견자"
								v-model="getItem.finder"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								disabled
								type="text" label="증상"
								auto-grow
								rows="1"
								v-model="getItem.symptom"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								disabled
								type="text" label="원인"
								auto-grow
								rows="1"
								v-model="getItem.cause"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								disabled
								type="text" label="원인 파악 방법"
								auto-grow
								rows="1"
								v-model="getItem.find_cause_way"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								disabled
								type="text" label="대응"
								auto-grow
								rows="1"
								v-model="getItem.action"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								disabled
								type="text" label="서비스영향"
								auto-grow
								rows="1"
								v-model="getItem.effect"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								disabled
								type="text" label="방지방안"
								auto-grow
								rows="1"
								v-model="getItem.prevention_way"/>
						</v-flex>
						<v-flex xs6 d-block>
							<v-text-field
								disabled
								type="text" label="대상장비"
								v-model="getItem.target_device"/>
						</v-flex>
						<v-flex xs6 d-block>
							<v-textarea
								disabled
								type="text" label="인지방법"
								auto-grow
								rows="1"
								v-model="getItem.recognition_way"/>
						</v-flex>
						<v-flex xs6>
							<v-text-field
								disabled
								type="text" label="담당부서"
								v-model="getItem.responsibility_person"/>
						</v-flex>
						<v-flex xs6>
							<v-text-field
								disabled
								type="text" label="담당자"
								v-model="getItem.responsibility_part"/>
						</v-flex>
						<v-flex xs3>
							<v-text-field
										disabled
										v-model="getItem.fined_at"
										label="발견일시"
										prepend-icon="event"
										readonly
									></v-text-field>
						</v-flex>
						<v-flex xs3>
							<v-text-field
										disabled
										v-model="getItem.occured_at"
										label="발생일시"
										prepend-icon="event"
										readonly
									></v-text-field>
						</v-flex>
						<v-flex xs3>
							<v-text-field
										disabled
										v-model="getItem.actioned_at"
										label="대응일시"
										prepend-icon="event"
										readonly
									></v-text-field>
						</v-flex>
						<v-flex xs3>
							<v-text-field
										disabled
										v-model="getItem.solved_at"
										label="해결일시"
										prepend-icon="event"
										readonly
									></v-text-field>
						</v-flex>
						<v-flex xs12>
							<v-textarea
								disabled
								type="text" label="세부사항"
								auto-grow
								rows="1"
								v-model="getItem.memo"/>
						</v-flex>
					</v-layout>

					<v-layout>
						<v-spacer></v-spacer>
						<v-btn color="error" dark @click="cancel">
							Incidents List
							<v-icon right dark>cancel</v-icon>
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
		name: 'DetailIncident',
		beforeMount() {
			this.initData()
		},
		mounted() {
			this.getData()
		},
		computed: {
			...mapGetters('detail', ['getItem']),
			item: {
				get() {
					return this.getItem
				},
				set(payload) {
					this.setItem(payload)
				}
			}
		},
		methods: {
			...mapMutations('detail', ['setItem']),
			...mapActions('detail', ['getData', 'initData']),
			cancel() {
				this.$router.replace(this.$route.query.redirect || '/')
			}
		}
	}
</script>
