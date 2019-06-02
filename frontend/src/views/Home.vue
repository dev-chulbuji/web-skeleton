<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div>
		<v-card class="elevation-1">

			<incident-btn-controller></incident-btn-controller>
			<incident-search></incident-search>

			<v-data-table
				:headers="getHeaders"
				:items="items"
				:pagination.sync="pagination"
				:total-items="getTotal"
				:loading="isLoading"
				item-key="_id"
				v-model="selectedItems"
				select-all>
				<template v-slot:items="props">
					<tr @click="showDetail(props.item)">
						<td>
							<v-checkbox
								@click.stop="onClickSelected(props.item)"
								v-model="props.selected"
								primary
								hide-details></v-checkbox>
						</td>
						<td>{{ props.item._id }}</td>
						<td>{{ props.item.responsibility_part }}</td>
						<td>{{ props.item.responsibility_person }}</td>
						<td>{{ computeSymptom(props.item) }}</td>
					</tr>
				</template>
			</v-data-table>
		</v-card>

		<dialog-confirm/>
	</div>
</template>


<script>
	import {mapActions, mapGetters, mapMutations} from "vuex";

	export default {
		name: "Incident",
		data() {
			return {
				selected: []
			};
		},
		beforeMount() {
			this.initData
		},
		mounted() {
			this.getData
		},
		created() {
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
			...mapGetters("incidents", [
				"getHeaders",
				"getItems",
				"getSelectedItems",
				"getPagination",
				"getTotal",
				"isLoading"
			]),
			items: {
				get() {
					return this.getItems
				},
				set(items) {
					this.setItems(items)
				}
			},
			pagination: {
				get() {
					return this.getPagination
				},
				set(pagination) {
					this.setPagination(pagination);
				}
			},
			selectedItems: {
				get() {
					return this.getSelectedItems;
				},
				set(value) {
					this.setSelectedItems(value);
				}
			}
		},
		methods: {
			...mapMutations("incidents", [
				"setPagination",
				"setPaginationPage",
				"setItems",
				"setSearchTitle",
				"setSelectedItems",
			]),
			...mapMutations('detail', ['setItem']),
			...mapActions("incidents", ["getHeader", "getData", "initData"]),
			computeSymptom(item) {
				if (item.symptom.length > 70) {
					return item.symptom.substr(0, 70) + '...'
				}
				return item.symptom
			},
			showDetail(item) {
				this.setItem(item)
				this.$router.push('/detail')
			},
			onClickSelected(item) {
				if (this.selectedItems.find(x => x._id === item._id)) {
					this.selectedItems = this.selectedItems.filter(x => x._id !== item._id)
				} else {
					this.selectedItems.push(item)
				}
			}
		}
	};
</script>
