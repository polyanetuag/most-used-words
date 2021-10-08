<template>
  <v-app>
    <v-app-bar
      app
      color="#ea256c"
      dark
    >
    <v-toolbar-title>Most Used Words in Squid Game</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //
  }),
};
</script>
