<template>
  <v-app>
      <NavBar/>
      <main>
        <router-view></router-view>
      </main>
  </v-app>
</template>

<script>
import NavBar from './components/Includes/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data () {
    return {
      //
    }
  }
}
</script>
