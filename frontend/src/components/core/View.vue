<template>
  <v-content>
    <v-container id="core-view">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-container>
  </v-content>
</template>