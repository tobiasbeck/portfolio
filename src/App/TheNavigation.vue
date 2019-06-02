<template>
  <a-layout-header id="the-navigation">
    <router-link to="/" tag="div" class="name">
      <strong>tobi</strong>beck
    </router-link>
  </a-layout-header>
</template>
<script>
export default {

}
</script>
<style lang="less">
  #the-navigation{
    z-index: 3;
    background-color: transparent;
    .name{
      font-size: 1.2em;
      cursor: pointer;
    }
  }
</style>
