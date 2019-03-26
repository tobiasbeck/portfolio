<template>
  <welcome-section :changer="changer" />
</template>
<script>
import WelcomeSection from '@/components/section/WelcomeSection'
export default {
  components: { WelcomeSection },
  data () {
    return {
      changer: ['Fullstack Developer', 'Code Lover', 'climber', 'hiker', 'problemsolver', 'outside of the box thinker' , 'JavaScript Enthusiast', 'Node.js Nerd']
      // web Enwickler, js lover, node.js nerd, wanderer, kletterer, kreativer, um die ecke denker, problemlöser
    }
  }
}
</script>
<style lang="less">

</style>
