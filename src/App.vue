<template>
  <v-app>
      <Navbar/>

  </v-app>
</template>

<script>
import Navbar from './components/NavBar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
