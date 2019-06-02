<template>
   <v-navigation-drawer
      fixed
      :mini-variant.sync="mini"
      width="200px"
      app>
      <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>Johnny</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-toolbar>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-tile :to="{path: '/'}">
          <v-list-tile-action>
            <v-icon>view_list</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Incidents</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>description</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Analysis</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
</template>

<script>
  import {mapActions, mapGetters, mapMutations} from "vuex";

  export default {
    computed: {
      ...mapGetters("app", ['getMini']),
      mini: {
        get() {
          return this.getMini
        },
        set(value) {
          this.toggleMini()
        }
      }
    },
    methods: {
      ...mapMutations("app", ['toggleMini']),
    }
  }
</script>