<template>
  <text-section
    id="contact"
    title="Contact" >
    <div style="text-align: center; font-size: 1.2em; color: white;">If you would like to contact me do not hesitate! Choose whatever you feel familiar with:</div>
    <list-contact />
  </text-section>
</template>

<script>
import TextSection from '@/components/section/TextSection'
import ListContact from '@/components/ListContact';
export default {
  components: { TextSection, ListContact }

}
</script>

<style lang="less">
#contact{
  position: relative;
  overflow: hidden;
  z-index: 3;
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
    filter: blur(14px) brightness(75%);
  }
}
</style>
