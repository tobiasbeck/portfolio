<template>
  <text-section
    id="projects"
    title="My Projects">
    <div class="sub-block">
      <img
        src="../../../assets/static/projects/friends.png"
        class="img-project img-left">
      <div class="text-block">
        <h2>Friendsweb.de (2009-2013)</h2>
        <span class="subtitle">A social network for everyone built from scratch
          <span class="stack">- PHP, MySQL, Bootstrap, jQuery</span>
        </span>
        <div>
          <p>Friendsweb was a social network I built from scratch. Users were able to sign up, create a profile
          with their details, a cover photo and a profile picture. They also could post status updates, upload pictures, send messages, form groups and create sites for e.g. companies. It even featured a real-time chat system. The main idea was that users had total control about all the data they published ever and all the information we saved about them. Every user could view and delete all the database entries we had about them.</p>
          <p>From the technical viewpoint, I used a PHP 5.x backend with a MySQL Database. I built a UI Framework first,
          later switched to Bootstrap. As a JavaScript framework, I used jQuery.<p>
          I developed it as a replacement for my first social network called NDS-NETZ, which was the first project I ever developed in
          2008</p>
          <p>At its peak friendsweb had about 70 active members and about 1000 media objects such as photos and videos. I
          closed it in 2013 as I focused on other projects.</p>
        </div>
      </div>
    </div>

    <div class="sub-block">
      <img
        src="../../../assets/static/projects/saufcorn.png"
        class="img-project img-left">
      <div class="text-block">
        <h2>Saufcorn (2016)</h2>
        <span class="subtitle">A drinking game for iOS and Android
          <span class="stack">- ionic 3, Node.js, MongoDB, Angular 4, Bootstrap</span>
        </span>
        <div>
          <p>Saufcorn is a drinking game, I developed for iOS and Android in ionic 3. Players can select special card packages to personalize their game.
          These packages can be obtained by sharing QR Codes. The Idea was that players can collect special cards, by visiting places in real life and scanning QR Codes there. Upon this System never took off, I developed a package shop, but I did not release it yet.
          Saufcorn is the only drinking game with a pink Unicorn and features a really childish humor, paired with a lot of girly pink and purple colors. It has about 400 downloads in total on iOS and Android.</p>
          <p>For people who want to create their own cards and packages, it has an online card editor that allows authors to create cards, customize and create new packages. All updates can be pushed to the clients, and players can receive the latest versions of the packages</p>
          <p>You can see the current version and download it on the <a
            href="https://saufcorn.tobibeck.de"
            target="_blank">saufcorn website (currently German only)</a></p>
        </div>
      </div>
    </div>

    <div class="sub-block">
      <img
        src="../../../assets/static/projects/fhapp.jpg"
        class="img-project img-left">
      <div class="text-block">
        <h2>FH Kufstein App (2016)</h2>
        <span class="subtitle">An application for all students of FH-Kufstein
          <span class="stack">- ionic 3</span>
        </span>
        <div>
          <p>2016 I talked to my coordinator at my university about this project. I wanted to build an app that would show all the lectures a person had, what was served in the mensa for lunch, all the exam dates and your grades. After the university approved the concept, the app was realized as a students-project. We had our first working prototype after 6 months and the app got online after about 1 year</p>
          <p>The app is based on ionic 3 and accesses the internal University APIs via Rest. You can read more about this on the following links</p>
          <ul>
            <li><a
              href="https://www.fh-kufstein.ac.at/News/Neue-App-fuer-die-Studierenden-der-FH-Kufstein-Tirol"
              target="_blank">Article about our project (German)</a></li>
            <li><a
              href="https://www.fh-kufstein.ac.at/News/Neue-FH-App-bietet-Studierenden-noch-mehr-praktische-Infos"
              target="_blank">Article with links to the current store pages (German)</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sub-block">
      <img
        src="../../../assets/static/projects/slothy.png"
        class="img-project img-left">
      <div class="text-block">
        <h2>Slothy (March 2017 - May 2017)</h2>
        <span class="subtitle">Shared economy for everyone
          <span class="stack">- React-Native, GraphQL, Scaphold</span>
        </span>
        <div>
          <p>The App Store description described the app as following: Slothy is your platform to find skilled people or tasks within your area - earn money or get lazy!

          Help is just one click away - Slothy connects you to every skilled person nearby and saves you time and money. On the other hand, it's as simple as never before to earn money or barter stuff -  just offer your skill and get rewarded.
          Slothy is not about money - set the reward yourself! Maybe you can help with something else in exchange or barter stuff you have at home - BE CREATIVE.</p>
          <p>I was responsible for the iOS deployment and developed the app with Georg Westner, who was responsible for the Android optimization.</p>
        </div>
      </div>
    </div>
    <div class="sub-block">
      <img
        src="../../../assets/static/projects/swarm.png"
        class="img-project img-left">
      <div class="text-block">
        <h2>Project Swarm</h2>
        <span class="subtitle">Traffic analyzation on the base of Artificial Intelligence
          <span class="stack"/>
        </span>
        <div>
          <p>We developed a system for analyzing traffic. The system was built out of edge computing devices, analyzing the occurring traffic in real-time. On the backend, we had a realtime analyzation platform that interpreted the results in real-time. Because of internal reasons, I left Swarm at the end of 2017. My current project Octo is based on some of the concepts I had while working at Swarm.</p>
        </div>
      </div>
    </div>

    <div class="sub-block">
      <img
        src="../../../assets/static/projects/octo.svg"
        class="img-project img-left">
      <div class="text-block">
        <h2>Octo (2017-Today)</h2>
        <span class="subtitle">A real-time analytics platform - Go
        </span>
        <div>
          <p>This is my current project I'm working on. It is a realtime analysis platform. More will be added here later</p>
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
      width: 10em;
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
   display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  .text-block {
    flex-grow: 1;
  }
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
