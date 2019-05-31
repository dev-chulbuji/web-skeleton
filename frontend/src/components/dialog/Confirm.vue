<template>
	<v-layout row justify-center>
		<v-dialog
			v-model="visible"
			max-width="400"
		>
			<v-card>
				<v-card-title class="headline">Confirm Dialog</v-card-title>
				<v-card-text>
					r u sure delete items?
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn
						color="green darken-1"
						flat="flat"
						@click="visible = false"
					>
						Disagree
					</v-btn>

					<v-btn
						color="green darken-1"
						flat="flat"
						@click="onClickDeleteItems"
					>
						Agree
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script>
	import {mapMutations, mapActions, mapGetters} from 'vuex'
	export default {
		computed: {
			...mapGetters('confirm', ['getVisible']),
			visible: {
				get() {
					return this.getVisible
				},
				set(value) {
					this.setVisible(value)
				}
			}
		},
		methods: {
			...mapMutations('confirm', ['setVisible']),
			...mapActions('incidents', ['deleteSelectedItem']),
			onClickDeleteItems() {
				this.deleteSelectedItem()
				this.setVisible(false)
			}
		}
	};
</script>