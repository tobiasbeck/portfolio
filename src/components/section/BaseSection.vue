<template>
  <section
    :class="{
      section: true,
      'section-window': isWindow,
      'section-text': isText,
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
    isText: {
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
      font-size: 2.4em;
      text-align: center;
  }

  &.section-window {
    height: 100vh;
  }
  &.section-text{
    padding-top: 50px;
    padding-bottom: 50px;
    .ivu-row-flex {
      margin-top:15px;
    }
  }

  &.section-secondary{
    background-color: #f8f8f9;
  }
}
</style>
