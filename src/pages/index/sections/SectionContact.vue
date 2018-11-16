<template>
  <text-section
    id="contact"
    title="Contact" >
    <div style="text-align: center; font-size: 1.2em; color: white;">If you would like to contact me do not hesitate! You can use one of the following ways:</div>
    <div style="display: flex; flex-direction: row; justify-content: center;">
      <Button
        type="text"
        size="large"
        class="media-button">
        <a href="mailto:hello@tobibeck.io?subject=tobibeck.io Contact">
          <Icon type="ios-mail"/>
        </a>
      </Button>
      <Button
        type="text"
        size="large"
        class="media-button">
        <a
          href="https://github.com/tobiasbeck/"
          target="_blank">
          <Icon type="logo-github"/>
        </a>
      </Button>
      <Button
        type="text"
        size="large"
        class="media-button">
        <a
          href="https://www.linkedin.com/in/tobias-beck-1131b976"
          target="_blank">
          <Icon type="logo-linkedin"/>
        </a>
      </Button>
      <Button
        type="text"
        size="large"
        class="media-button">
        <a
          href="https://www.facebook.com/tobiasbeck25"
          target="_blank">
          <Icon type="logo-facebook"/>
        </a>
      </Button>
      <Button
        type="text"
        size="large"
        class="media-button">
        <a
          href="https://twitter.com/TobiasBeck6"
          target="_blank">
          <Icon type="logo-twitter"/>
        </a>
      </Button>
      <Button
        type="text"
        size="large"
        class="media-button">
        <a
          href="https://www.instagram.com/tobibekc/?hl=de"
          target="_blank">
          <Icon type="logo-instagram"/>
        </a>
      </Button>
    </div>
  </text-section>
</template>

<script>
import TextSection from '@/components/section/TextSection'
export default {
  components: { TextSection }

}
</script>

<style lang="less">
#contact{
  position: relative;
  overflow: hidden;
  &:before{
    content: "";
    position:absolute;
    left: -25px;
    right: -25px;
    top: -25px;
    bottom: -25px;
    background-image: url(../../../assets/static/contact.jpg);
    background-position: center center;
    background-size: cover;
    z-index: -1;
    filter: blur(10px);
  }
}
</style>
