<template>
  <text-section
    id="projects"
    title="My Projects">
    <div class="sub-block">
      <img
        src="static/projects/friends.png"
        class="img-project img-left">
      <div class="text-block">
        <h2>Friendsweb.de (2009-2013)</h2>
        <span class="subtitle">A social network for everyone built from scratch
          <span class="stack">- PHP, MySQL, Bootstrap, jQuery</span>
        </span>
        <div>
          <p>Friendsweb was a social network built from scratch in my own cms system. Users were able to sign up, create a profile
          with your details, a cover photo and a profile picture. They also could post statusupdates, upload pictures, send
          messages, form groups, create sites for e.g. companies. It even features a realtime chat system.</p>
          <p>From the technical viewpoint, i used a PHP 5.x backend with a MySQL Database. For the UI I built a UI Framework first,
          later switched to Bootstrap. As a JavaScript framework jQuery was used.</p>
          I developed it as a replacement for my first social network called NDS-NETZ, which was my first Project ever developed in
          2008</p>
          <p>At it's peak friendsweb was used by about 70 active members, by about 1000 media objects as photos and videos. I
          closed it in 2013 as I wanted to focus on other projects, while not a single one of them was finished.</p>
        </div>
      </div>
    </div>

    <div class="sub-block">
      <img
        src="static/projects/saufcorn.png"
        class="img-project img-left">
      <div class="text-block">
        <h2>Saufcorn (2016)</h2>
        <span class="subtitle">A drinking game for iOS and Android
          <span class="stack">- ionic 3, Node.js, MongoDB, Angular 4, Bootstrap</span>
        </span>
        <div>
          <p>Saufcorn is a drinking game, develope for iOS and Android in ionic 3. Players can select special card packages to personalize their game .
          These packages can be obtained by sharing via QR Coded. The Idea was that a user can collect special cards, by visiting special places in real live and scanning QR Codes there. Upon this System never took of, a pack shop was developed, but not yet released.
          Saufcorn is the only drinking game with a pink Unicorn and features a really childish humour, paired with a lot of girly pink and purple colors. It has about 400 downloads in Total on iOS and Android.</p>
          <p>For card authors it has an online card editor that allows authors to create cards, customize and create new packages. All updates can be pushed to the the clients, so packages can update</p>
          <p>You can see the current version and download it on the <a
            href="https://saufcorn.tobibeck.de"
            target="_blank">saufcorn website (German only)</a></p>
        </div>
      </div>
    </div>

    <div class="sub-block">
      <img
        src="static/projects/fhapp.jpg"
        class="img-project img-left">
      <div class="text-block">
        <h2>FH Kufstein App (2016)</h2>
        <span class="subtitle">An application for all students of FH-Kufstein
          <span class="stack">- ionic 3</span>
        </span>
        <div>
          <p>2016 I talked to my coordinator at my university about this project. I wanted to build an app that could show you all the lectures a person had, what's server in the mensa for lunch, all the exam dates and you grades. After the university approved the concept, the app was realized as a students-project. We worked really hard, and had our first working prototype after 6 months.</p>
          <p>The App is based on ionic 3 and accesses the internal University API's via Rest. You can read more about this on the following links</p>
          <ul>
            <li><a
              href="https://www.fh-kufstein.ac.at/News/Neue-App-fuer-die-Studierenden-der-FH-Kufstein-Tirol"
              target="_blank">Article about our project (German)</a></li>
            <li><a
              href="https://www.fh-kufstein.ac.at/News/Neue-FH-App-bietet-Studierenden-noch-mehr-praktische-Infos"
              target="_blank">Article with links to the current store pages</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sub-block">
      <img
        src="static/projects/slothy.png"
        class="img-project img-left">
      <div class="text-block">
        <h2>Slothy (2017 - 2017)</h2>
        <span class="subtitle">Shared economy for everyone
          <span class="stack">- React-Native, GraphQL, Scaphold</span>
        </span>
        <div>
          <p>Slothy is your platform to find skilled people or tasks within your area - earn money or get lazy!

          Help is just one click away - Slothy connects you to every skilled person nearby and saves you time and money. On the other hand, it's as simple as never before to earn money or barter stuff -  just offer your skill and get rewarded.
          Slothy is not about money - set the reward yourself! Maybe you can help with something else in exchange or barter stuff you have at home - BE CREATIVE.</p>
          <p>I was responsible for the iOS deployment and developed the app with my co developer Georg Westner.</p>
        </div>
      </div>
    </div>
    <div class="sub-block">
      <img
        src="static/projects/swarm.png"
        class="img-project img-left">
      <div class="text-block">
        <h2>Project Swarm</h2>
        <span class="subtitle">Visual AI Analysation
          <span class="stack"/>
        </span>
        <div>
          <p>This is listed for the purpose of completeness. While Georg focused on AI Development, I focused on the development of a Realtime Analasys Platform. This gave me a lot of the input I had for developing Octo</p>
        </div>
      </div>
    </div>

    <div class="sub-block">
      <img
        src="static/projects/octo.svg"
        class="img-project img-left">
      <div class="text-block">
        <h2>Octo (2017-)</h2>
        <span class="subtitle">A realtime Analasys Platform
        </span>
        <div>
          <p>This is my current project I'm working on. It is basically a realtime Analasys Platform. More will be added here later</p>
        </div>
      </div>
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
.img-project {
      width: 20em;
      border-radius: 50%;
      margin-right: 20px;
      shape-outside: circle(50%);
    }
.img-left {
        float:left;
}
.img-right {
        float:right;
}

.sub-block{
  margin-top:50px;
  .subtitle {
    display:block;
    font-size: 1.2em;
    margin-bottom:0.5em;
    color: #80848f;
    .stack {
      color:#80848f;
    }
  }
  &:after{
    content: "";
    clear: both;
    display: table;
  }
}
</style>
