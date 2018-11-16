<template>
  <text-section
    id="aboutMe"
    title="About Me">
    <img
      src="static/me.jpg"
      class="img-me">
    <div class="text-block">
      <strong>Hello, my name is Tobias Beck (21),</strong>
      <p>and I'm a Full Stack Developer based in <a
        href="https://goo.gl/maps/Zo7hBtLjhZH2"
        target="_blank">Munich, Germany</a>. I started coding when I was 11 and always stayed curious.</p> <p>I worked on a few small projects, developed a Social Network called friendsweb.de, was co-founder of Swarm Analytics and I'm now working on my own Data Solution called Octo 🐙</p>
      <p>I'm working a lot with Vue.js and Node.js. But I also got knowledge in React, Angular, PHP, CSS, HTML, Swift, Java, C and C#. I love building modern Web Applications and thinking outside of the box.</p>
      <p>I'm studying "Web Business & Technology" at <a
        href="https://www.fh-kufstein.ac.at/"
        target="_blank">FH-Kufstein, Tyrol</a>, but currently I'm on a semester abroad in <a
          href="https://goo.gl/maps/12WVK1Z8W7w"
          target="_blank">Alicante, Spain.</a></p>
      <p style="margin-top:1.5em;">See what I'm working on here:</p>
      <Button
        type="text"
        size="large"
        class="media-button">
        <a
          href="https://github.com/tobiasbeck/"
          target="_blank">
          <Icon type="social-github"/>
        </a>
      </Button>
      <Button
        type="text"
        size="large"
        class="media-button">
        <a
          href="https://www.linkedin.com/in/tobias-beck-1131b976"
          target="_blank">
          <Icon type="social-linkedin"/>
        </a>
      </Button>
      <Button
        type="text"
        size="large"
        class="media-button">
        <a
          href="https://www.facebook.com/tobiasbeck25"
          target="_blank">
          <Icon type="social-facebook"/>
        </a>
      </Button>
      <Button
        type="text"
        size="large"
        class="media-button">
        <a
          href="https://twitter.com/TobiasBeck6"
          target="_blank">
          <Icon type="social-twitter"/>
        </a>
      </Button>
      <Button
        type="text"
        size="large"
        class="media-button">
        <a
          href="https://www.instagram.com/tobibekc/?hl=de"
          target="_blank">
          <Icon type="social-instagram"/>
        </a>
      </Button>
      <Button
        type="text"
        size="large"
        class="media-button">
        <a
          href="mailto:hello@tobibeck.io?subject=tobibeck.io Contact"
          target="_blank">
          <Icon type="email"/>
        </a>
      </Button>
    </div>
  </text-section>
</template>

<script>
import TextSection from '@/components/section/TextSection'
export default {
  components: { TextSection }
}
</script>

<style lang="less">
.img-me {
      width: 20em;
      border-radius: 50%;
      margin-right: 20px;
      float:left;
      shape-outside: circle(50%);
    }
</style>
