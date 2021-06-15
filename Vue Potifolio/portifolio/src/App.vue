<template>
<div>
  <Portifolio />
  </div>
</template>

<script>
import Portifolio from './components/potifolio.vue'

export default {
  name: 'App',
  components: {
    Portifolio
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
