<template>
  <v-toolbar fixed app dark color="primary">
    <v-toolbar-side-icon @click="toggleMini"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Past-Incident Review</v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn> -->
  </v-toolbar>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  components: {
  },
  data() {
  },
  methods: {
    ...mapMutations(['toggleMini']),
  }
};
</script>


