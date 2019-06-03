<template>
  <base-section class="section-text" :is-window="isWindow" :is-secondary="isSecondary">
    <h1 class="title">{{ title }}</h1>
    <slot/>
  </base-section>
</template>
<script>
import BaseSection from "@/components/section/BaseSection";
export default {
  components: { BaseSection },
  props: {
    title: {
      type: String,
      default: ""
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
};
</script>
<style lang="less">
.section-text {
  padding-top: 24px;
  padding-bottom: 24px;
  .title {
    color: #e14a37;
  }
  .text-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
