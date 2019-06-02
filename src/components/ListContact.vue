<template>
   <div class="list-contact"> 
        <a
          href="https://github.com/tobiasbeck/"
          target="_blank">
          <github-icon />
        </a>
        <a
          href="https://www.linkedin.com/in/tobias-beck-1131b976"
          target="_blank">
          <linkedin-icon />
        </a>
        <a
          href="https://www.facebook.com/tobiasbeck25"
          target="_blank">
          <FacebookIcon />
        </a>
        <a
          href="https://twitter.com/TobiasBeck6"
          target="_blank">
          <TwitterIcon />
        </a>

        <a
          href="https://www.instagram.com/tobibekc/?hl=de"
          target="_blank">
          <InstagramIcon />
        </a>

        <a
          href="mailto:hello@tobibeck.io?subject=tobibeck.io Contact"
          target="_blank">
          <MailIcon />
        </a>
        </div>
</template>

<script>
import { GithubIcon, LinkedinIcon, TwitterIcon , FacebookIcon, MailIcon, InstagramIcon } from 'vue-feather-icons'

export default {
  components: { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon, MailIcon, InstagramIcon },
}
</script>

<style lang="less">
  .list-contact {
    margin-top:24px;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
  }
</style>
