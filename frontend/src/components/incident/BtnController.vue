<template>
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
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters('incidents', ['getSelectedItems']),
    visibilityDeleteBtn: {
      get() {
        return this.getSelectedItems.length > 0;
      }
    }
  },
  methods: {
    ...mapMutations("incidents", ["setSelectedItems"]),
    onClickCreateItem() {
      this.$router.push("/create");
    },
    onClickDeleteItem() {}
  }
});
</script>
