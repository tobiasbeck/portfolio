<template>
  <text-section id="about-me" title="About Me">
    <img src="../../../assets/static/me.jpg" class="img-me">
    <div class="text-wrapper">
      <div class="text-block">
        <h3>Hello, my name is Tobias Beck, I'm {{ age }} years old.</h3>
        <p>
          I'm a full stack developer based in
          <a href="https://goo.gl/maps/Zo7hBtLjhZH2" target="_blank">Munich, Germany</a>. I wrote my first code when I was 11 and always stayed curious.
        </p>
        <p>I also worked on a few small projects, developed a social network called friendsweb.de, was a co-founder of Swarm Analytics and I'm now working on my own data solution called Octo 🐙</p>
        <p>I'm working a lot with Go, Vue.js and Node.js. But I also got knowledge in Go, React, Angular, PHP, CSS, HTML, Swift, Java, C and C#. I love building modern applications and thinking outside of the box.</p>
        <p>
          I studied "Web Business & Technology" at
          <a href="https://www.fh-kufstein.ac.at/" target="_blank">FH-Kufstein, Tyrol</a> and I'm now living in Munich, Germany.
        </p>
        <p style="margin-top:1.5em;">See what I'm working on here:</p>
      </div>
    </div>
    <list-contact/>
  </text-section>
</template>

<script>
import TextSection from "@/components/section/TextSection";
import ListContact from "@/components/ListContact";

export default {
  components: { TextSection, ListContact },
  data() {
    return {
      birthday: new Date(1996, 8, 16)
    };
  },
  computed: {
    age() {
      let difference = Date.now() - this.birthday.getTime();
      var adate = new Date(difference);

      return Math.abs(adate.getUTCFullYear() - 1970);
    }
  }
};
</script>

<style lang="less">
#about-me {
  &:before {
    content: "";
    position: absolute;
    background-color: red;
    transform: skewY(-6deg);
    background-color: white;
  }
}
.img-me {
  width: 10em;
  border-radius: 50%;
  margin-left: 24px;
  float: right;
  shape-outside: circle(50%);
}
</style>
