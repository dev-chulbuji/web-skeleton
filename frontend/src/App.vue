<template>
  <v-app id="inspire">
  <Drawer />
  <toolbar />

  <v-content>
    <v-container fluid fill-height>
      <v-layout
        justify-center
        align-center>
        <v-flex text-xs-center>
          <v-tooltip left>
            <v-btn slot="activator" :href="source" icon large target="_blank">
              <v-icon large>code</v-icon>
            </v-btn>
            <span>Source</span>
          </v-tooltip>
          <v-tooltip right>
            <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/rJdVMq" target="_blank">
              <v-icon large>mdi-codepen</v-icon>
            </v-btn>
            <span>Codepen</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
  </v-app>
</template>

<script>
import Drawer from "./components/core/Drawer";
import Toolbar from "./components/core/Toolbar";

export default {
  name: "App",
  components: {
    Drawer,
    Toolbar
  },
  data() {
    return {
    };
  },
  methods: {
    setDrawerMini() {
      this.$store.state.mini = !this.$store.state.mini
    }
  }
};
</script>


