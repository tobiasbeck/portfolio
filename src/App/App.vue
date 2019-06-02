<template>
  <div id="app">
     <a-layout>
    <the-navigation />
    <router-view/>
    <!--<cookie-law theme="tobibeckio"  button-link="/#/legal-notes" @accept="accepted()">-->
    </cookie-law>
     </a-layout>
  </div>
</template>

<script>
import TheNavigation from './TheNavigation'
import CookieLaw from 'vue-cookie-law'
export default {
  name: 'App',
  components: { 
    TheNavigation,
    CookieLaw
   },
   methods: {
     accepted() {
       console.log("called");
       this.$ga.enable();
     }
   }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Work+Sans');
#app {
  font-family: 'Work Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  font-size: 14px;
}
</style>
