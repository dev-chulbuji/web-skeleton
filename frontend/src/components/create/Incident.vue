<template>
	<v-navigation-drawer
		v-model="drawer"
		right
		app
		temporary
		width="450px">
	</v-navigation-drawer>
</template>
<script>
	export default {
		data() {
			return {
				drawer: true
			}
		}
	}
</script>
