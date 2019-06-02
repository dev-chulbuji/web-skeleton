<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<v-card>
		<v-card-title flat class="transparent">
			<span class="headline">Detail Incident</span>

			<v-spacer />

			<v-btn color="primary" dark @click="onClickEdit">
				Edit Incident
				<v-icon right dark>folder_open</v-icon>
			</v-btn>
		</v-card-title>

		<v-divider></v-divider>

		<v-card-text>
			<v-container grid-list-lg>
				<v-form ref="form">
					<v-layout wrap justify-space-between>
						<v-flex xs6 d-block>
							<v-text-field
								disabled
								v-model="item._id"
								type="text" label="Incident Number"/>
						</v-flex>
						<v-flex xs6 d-block>
							<v-text-field
								disabled
								type="text" label="발견자"
								v-model="item.finder"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								disabled
								type="text" label="증상"
								auto-grow
								rows="1"
								v-model="item.symptom"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								disabled
								type="text" label="원인"
								auto-grow
								rows="1"
								v-model="item.cause"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								disabled
								type="text" label="원인 파악 방법"
								auto-grow
								rows="1"
								v-model="item.find_cause_way"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								disabled
								type="text" label="대응"
								auto-grow
								rows="1"
								v-model="item.action"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								disabled
								type="text" label="서비스영향"
								auto-grow
								rows="1"
								v-model="item.effect"/>
						</v-flex>
						<v-flex xs12 d-block>
							<v-textarea
								disabled
								type="text" label="방지방안"
								auto-grow
								rows="1"
								v-model="item.prevention_way"/>
						</v-flex>
						<v-flex xs6 d-block>
							<v-text-field
								disabled
								type="text" label="대상장비"
								v-model="item.target_device"/>
						</v-flex>
						<v-flex xs6 d-block>
							<v-textarea
								disabled
								type="text" label="인지방법"
								auto-grow
								rows="1"
								v-model="item.recognition_way"/>
						</v-flex>
						<v-flex xs6>
							<v-text-field
								disabled
								type="text" label="담당부서"
								v-model="item.responsibility_person"/>
						</v-flex>
						<v-flex xs6>
							<v-text-field
								disabled
								type="text" label="담당자"
								v-model="item.responsibility_part"/>
						</v-flex>
						<v-flex xs3>
							<v-text-field
								disabled
								v-model="item.fined_at"
								label="발견일시"
								prepend-icon="event"
								readonly
							></v-text-field>
						</v-flex>
						<v-flex xs3>
							<v-text-field
								disabled
								v-model="item.occured_at"
								label="발생일시"
								prepend-icon="event"
								readonly
							></v-text-field>
						</v-flex>
						<v-flex xs3>
							<v-text-field
								disabled
								v-model="item.actioned_at"
								label="대응일시"
								prepend-icon="event"
								readonly
							></v-text-field>
						</v-flex>
						<v-flex xs3>
							<v-text-field
								disabled
								v-model="item.solved_at"
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
								v-model="item.memo"/>
						</v-flex>
					</v-layout>

					<v-layout>
						<v-spacer></v-spacer>
						<v-btn color="error" dark @click="cancel">
							Show Incidents List
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
			...mapMutations('edit', ['setItemId']),
			...mapActions('detail', ['getData', 'initData']),
			cancel() {
				this.$router.replace(this.$route.query.redirect || '/')
			},
			onClickEdit() {
				this.setItemId(this.getItem._id)
				this.$router.push('/edit')
			}
		}
	}
</script>
