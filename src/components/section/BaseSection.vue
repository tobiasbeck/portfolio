<template>
  <section
    :class="{
      section: true,
      'section-window': isWindow,
      'section-secondary': isSecondary
  }">
    <slot/>
  </section>
</template>
<script>
export default {
  props: {
    isWindow: {
      type: Boolean,
      default: false
    },
    isSecondary: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="less">
.section {
  padding-left: 50px;
  padding-right: 50px;

  h1.title {
      font-size: 24px;
      line-height: 32px;
      text-align: center;
  }

  &.section-window {
    height: 100vh;
  }
  

  &.section-secondary{
    background-color: #f8f8f9;
  }
}
</style>
