<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<v-container fluid fill-height class="grey lighten-4">

		<v-fade-transition mode="out-in">
			<v-data-table class="elevation-1"
											:headers="getHeaders"
											:items="getItems"
											:pagination.sync="pagination"
											:total-items="getTotal"
											:loading="isLoading">
					<template v-slot:items="props">
						<td class="text-xs-center">{{ props.item.title }}</td>
						<td class="text-xs-center">{{ props.item.content}}</td>
						<td class="text-xs-center">
							<v-tooltip top>
								<template v-slot:activator="{ on }">
									<v-btn fab dark small color="success"
												 v-on="on"
												 @click.stop="handleViewClick(props.item)">
										<v-icon dark>email</v-icon>
									</v-btn>
								</template>
								<span>email 확인</span>
							</v-tooltip>
						</td>
					</template>
				</v-data-table>
		</v-fade-transition>
	</v-container>
</template>

<script>
	import {mapActions, mapGetters, mapMutations} from 'vuex'

	export default {
		beforeMount() {
			this.init()
		},
		mounted() {
			this.data()
		},
		watch: {
			pagination: {
				handler() {
					this.data()
				},
				deep: true
			}
		},
		computed: {
			...mapGetters('incidents', ['getHeaders', 'getItems', 'getPagination', 'getTotal', 'isLoading']),
			pagination: {
				get() {
					return this.getPagination
				},
				set(pagination) {
					this.setPagination(pagination)
				}
			}
		},
		methods: {
			...mapMutations('incidents', ['setPagination']),
			...mapActions('incidents', ['init', 'data']),
		}
	}
</script>
