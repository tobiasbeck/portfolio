<template>
  <base-section
    :is-text="true"
    :is-window="isWindow"
    :is-secondary="isSecondary">
    <h1 class="title">{{ title }}</h1>
    <slot/>
  </base-section>
</template>
<script>
import BaseSection from '@/components/section/BaseSection'
export default {
  components: { BaseSection },
  props: {
    title: {
      type: String,
      default: ''
    },
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
.title {
  color: #E14A37;
}
</style>
