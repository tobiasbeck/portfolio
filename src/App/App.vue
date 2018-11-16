<template>
  <div id="app">
    <the-navigation />
    <router-view/>
  </div>
</template>

<script>
import TheNavigation from './TheNavigation'
export default {
  name: 'App',
  components: { TheNavigation }
}
</script>

<style>
#app {
  font-family: 'Work Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  font-size: 13px;
}
</style>
