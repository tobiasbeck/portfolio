<template>
  <base-section
    :is-window="true"
    class="welcome"
    style="background-image: url(/static/wallpaper.jpg)">
    <h1 class="hello">Hello!</h1>
    <h2 class="hello-sub">My name is <strong>Tobias</strong> and i'm a <span class="changer">{{ changerText }}<span class="cursor"/></span></h2>
    <icon-scroll class="scroll" />
  </base-section>
</template>
<script>
import BaseSection from '@/components/section/BaseSection'
import IconScroll from '@/components/IconScroll'
export default {
  components: { BaseSection, IconScroll },
  props: {
    changer: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      visibleLetters: 0,
      selectedQuote: 0,
      doChangeText: false
    }
  },
  computed: {
    changerText () {
      if (this.changer[this.selectedQuote]) {
        return this.changer[this.selectedQuote].slice(0, this.visibleLetters)
      }
      return 'Web Developer'
    }
  },
  mounted () {
    this.changeText()
  },
  methods: {
    changeText () {
      let time = 1000
      if (this.changer[this.selectedQuote]) {
        let length = this.changer[this.selectedQuote].length
        if (this.visibleLetters === 0 && this.doChangeText === true) {
          this.selectedQuote++
          if (this.selectedQuote >= this.changer.length) {
            this.selectedQuote = 0
          }
          this.doChangeText = false
          this.visibleLetters = 0
          time = Math.floor(Math.random() * (150 - 80)) + 80
        } else if (this.visibleLetters < length && this.visibleLetters >= 0) {
          if (!this.doChangeText) {
            this.visibleLetters++
          } else {
            this.visibleLetters--
          }
          time = Math.floor(Math.random() * (60 - 40)) + 40
        } else if (this.visibleLetters === length) {
          if (this.doChangeText) {
            this.visibleLetters--
            time = Math.floor(Math.random() * (60 - 40)) + 40
          } else {
            time = 4000
            this.doChangeText = true
          }
        }
      }
      setTimeout(() => {
        this.changeText()
      }, time)
    }
  }
}
</script>
<style lang="less">
    .welcome{
      padding-top: 24vh;
      height: 100vh;
      background-size: cover;
      background-position: bottom center;
      // position: relative;
      .hello{
        font-size: 4em;
        color: white;
        display: block;
      }
      .hello-sub{
        font-size: 2.4em;
        font-weight: normal;
        .changer{
          font-weight: bold;
          .cursor {
            content: "";
            display: inline-block;
            height: 1em;
            width: 2px;
            background-color: #80848f;
            vertical-align: text-top;
            margin-left: 6px;
            animation: 1.3s animationCursor step-end infinite;
          }
        }
      }
      .scroll {
        position: absolute;
        bottom:60px;
        left: 0px;
        right: 0px;
        margin-left: auto;
        margin-right: auto;
      }
    }
</style>
