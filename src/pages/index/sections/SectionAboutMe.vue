<template>
  <text-section
    id="aboutMe"
    title="About Me">
    <img
      src="../../../assets/static/me.jpg"
      class="img-me">
    <div class="text-block">
      <h3>Hello, my name is Tobias Beck, I'm {{ age }} years old,</h3>
      <p>and I'm a full stack developer based in <a
        href="https://goo.gl/maps/Zo7hBtLjhZH2"
        target="_blank">Munich, Germany</a>. I wrote my first code when I was 11 and always stayed curious.</p> <p>I also worked on a few small projects, developed a social network called friendsweb.de, was a co-founder of Swarm Analytics and I'm now working on my own data solution called Octo 🐙</p>
      <p>I'm working a lot with Go, Vue.js and Node.js. But I also got knowledge in Go, React, Angular, PHP, CSS, HTML, Swift, Java, C and C#. I love building modern applications and thinking outside of the box.</p>
      <p>Currently I'm finishing my studies in "Web Business & Technology" at <a
        href="https://www.fh-kufstein.ac.at/"
        target="_blank">FH-Kufstein, Tyrol</a>.</p>
      <p style="margin-top:1.5em;">See what I'm working on here:</p>
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
      <Button
        type="text"
        size="large"
        class="media-button">
        <a
          href="mailto:hello@tobibeck.io?subject=tobibeck.io Contact"
          target="_blank">
          <Icon type="ios-mail"/>
        </a>
      </Button>
    </div>
  </text-section>
</template>

<script>
import TextSection from '@/components/section/TextSection'
export default {
  components: { TextSection },
  data() {
    return {
      birthday: new Date(1996, 8, 16)
    }
  },
  computed: {
    age() {
      let difference = Date.now() - this.birthday.getTime();
      var adate = new Date(difference); 
  
      return Math.abs(adate.getUTCFullYear() - 1970);
    }
  }
}
</script>

<style lang="less">
.img-me {
      width: 10em;
      border-radius: 50%;
      margin-right: 20px;
      float:left;
      shape-outside: circle(50%);
    }
</style>
