<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<v-card class="elevation-1">
		<v-toolbar flat color="white" style="padding-top: 9px">
			<v-toolbar-title>Manage Incidents</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn color="error" dark @click="onClickDeleteItem" v-if="visibilityDeleteBtn">
				delete incident
			</v-btn>
			<v-btn color="primary" dark @click="onClickCreateItem">
				create incident
			</v-btn>
		</v-toolbar>

		<search-incident></search-incident>

		<v-data-table
			:headers="getHeaders"
			:items="getItems"
			:pagination.sync="pagination"
			:total-items="getTotal"
			:loading="isLoading"
			item-key="title"
			v-model="selectedItems"
			select-all>
			<template v-slot:items="props">
				<td>
					<v-checkbox
						v-model="props.selected"
						primary
						hide-details
					></v-checkbox>
				</td>
				<td>{{ props.item.title }}</td>
				<td>{{ props.item.content}}</td>
			</template>
		</v-data-table>
	</v-card>
</template>

<script>
	import {mapActions, mapGetters, mapMutations} from 'vuex'

	export default {
		name: 'Incident',
		data() {
			return {
				selected: []
			}
		},
		beforeMount() {
			this.getHeader()
		},
		mounted() {
			this.getData()
		},
		watch: {
			pagination: {
				handler() {
					this.getData()
				},
				deep: true
			}
		},
		computed: {
			...mapGetters('incidents', ['getHeaders', 'getItems', 'getSelectedItems',
				'getPagination', 'getTotal', 'getSearchTitle', 'isLoading']),
			pagination: {
				get() {
					return this.getPagination
				},
				set(pagination) {
					this.setPagination(pagination)
				}
			},
			selectedItems: {
				get() {
					return this.getSelectedItems
				},
				set(value) {
					this.setSelectedItems(value)
				}
			},
			visibilityDeleteBtn: {
				get() {
					return this.selectedItems.length > 0
				}
			}
		},
		methods: {
			...mapMutations('incidents', ['setPagination', 'setPaginationPage', 'setSearchTitle', 'setSelectedItems']),
			...mapActions('incidents', ['getHeader', 'getData']),
			onClickCreateItem() {
				this.$router.push('/create')
			},
			onClickDeleteItem() {

			},
		}
	}
</script>
