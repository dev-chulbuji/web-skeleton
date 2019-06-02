<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<v-container grid-list-md style="padding: 4em 0">
		<v-layout wrap>
			<v-flex xs8 offset-xs2>
				<v-text-field
					label="증상"
					type="text"
					v-model="searchTitle"
					v-on:keyup.enter="onClickSearch"/>
			</v-flex>
			<v-flex xs1>
				<v-tooltip top>
					<template v-slot:activator="{ on }">
						<v-btn fab dark small color="teal" v-on="on"
									 @click.stop="onClickSearch">
							<v-icon dark>search</v-icon>
						</v-btn>
					</template>
					<span>조회</span>
				</v-tooltip>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import {mapMutations, mapActions, mapGetters} from 'vuex'

	export default {
		name: 'IncidentSearch',
		computed: {
			...mapGetters('incidents', ['getSearchTitle']),
			searchTitle: {
				get() {
					return this.getSearchTitle
				},
				set(value) {
					this.setSearchTitle(value)
				}
			}
		},
		methods: {
			...mapMutations('incidents', ['setSearchTitle', 'setPaginationPage']),
			...mapActions('incidents', ['getData']),
			onClickSearch() {
				this.setSearchTitle(this.getSearchTitle)
				this.setPaginationPage(1)
			},
		}
	};
</script>
d