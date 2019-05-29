<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<v-card class="elevation-1">
		
		<incident-btn-controller></incident-btn-controller>
		<incident-search></incident-search>

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
				<tr @click="showDetail(props.item)">
					<td>
						<v-checkbox
							v-model="props.selected"
							primary
							hide-details></v-checkbox>
					</td>
					<td>{{ props.item.title }}</td>
					<td>{{ props.item.content}}</td>
				</tr>
			</template>
		</v-data-table>
	</v-card>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "Incident",
  data() {
    return {
      selected: []
    };
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
    ...mapGetters("incidents", [
      "getHeaders",
      "getItems",
      "getSelectedItems",
      "getPagination",
      "getTotal",
      "getSearchTitle",
      "isLoading"
    ]),
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
      "setSearchTitle",
      "setSelectedItems"
		]),
		...mapMutations('detail', ['setItemIdx']),
		...mapActions("incidents", ["getHeader", "getData"]),
		showDetail(item) {
			this.setItemIdx(item.idx)
			this.$router.push('/detail')
		}
  }
};
</script>
