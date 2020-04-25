<template>
  <text-section
    id="timeline"
    :is-secondary="true"
    class="facts"
    title="Facts Sheet" >
    <a-row
      type="flex"
      class="facts-row">
      <a-col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="8">
      <h2>My graduations</h2>
      <a-timeline pending>
        <a-timeline-item>
          <span slot="dot"><user-icon /></span>
          <p class="time">1996</p>
          <p class="content">
            I was born :)
          </p>
        </a-timeline-item>
        <a-timeline-item>
          <span slot="dot"><user-icon /></span>
          <p class="time">1997-2006</p>
          <p class="content">
            I enjoyed my childhood
          </p>
        </a-timeline-item>
        <a-timeline-item>
          <span slot="dot"><book-icon /></span>
          <p class="time">2007-2015</p>
          <p class="content">
            Anne Frank Gymnasium Erding (Abitur, A-Levels)
          </p>
        </a-timeline-item>
        <a-timeline-item>
          <span slot="dot"><book-icon /></span>
          <p class="time">Sept. 2018 - Feb 2019</p>
          <p class="content">
            
            ERASMUS at <a target="_blank" href="https://www.ua.es/">Universidad de Alicante</a>
          </p>
        </a-timeline-item>
        <a-timeline-item>
          <span slot="dot"><check-circle-icon /></span>
          <p class="time">2015 - Sept 2019</p>
          <p class="content">
            Study at FH-Kufstein
          </p>
        </a-timeline-item>
        <a-timeline-item>
          <p class="time"/>
          <p class="content">
            more to come...
          </p>
        </a-timeline-item>
      </a-timeline>
    </a-col>
      <a-col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="8">
      <h2>Technical stuff</h2>
      <a-timeline pending>
        <a-timeline-item>
          <span slot="dot"><award-icon /></span>
          <p class="time">2012</p>
          <p class="content">
            2<sup>nd</sup> place at Cross Media Competition
            (My first ever award I got for one of my projects)
          </p>
        </a-timeline-item>
        <a-timeline-item>
          <span slot="dot"><code-icon /></span>
          <p class="time">March - May 2017</p>
          <p class="content">
            Co-Founder and developer of Slothy for iOS (React)
          </p>
        </a-timeline-item>
        <a-timeline-item>
          <span slot="dot">‍<code-icon /></span>
          <p class="time">May - October 2017</p>
          <p class="content">
            Co-Founder and developer at Swarm Analytics (Node.js, React)
          </p>
        </a-timeline-item>
        <a-timeline-item>
          <span slot="dot"><code-icon /></span>
          <p class="time">December 2017 - today</p>
          <p class="content">
            Chief Software Architect and Go, Vue.js and Node.js developer at cxomni GmbH
          </p>
        </a-timeline-item>
        <a-timeline-item>
          <p class="time"/>
          <p class="content">
            more to come...
          </p>
        </a-timeline-item>
      </a-timeline>
    </a-col>
      <a-col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="8">
      <h2>Other things</h2>
      <div>
        <h3>I speak</h3>
        <ul class="fact-list">
          <li>🇩🇪 German (Deutsch)</li>
          <li>🇬🇧 English</li>
          <li>🥨 Bavarian (Bayrisch)</li>
          <li>🇪🇸 A little bit Spanish (un poco Español)</li>
        </ul>
      </div>
      <div style="margin-top:0.5em;">
        <h3>Funfacts</h3>
        <ul class="fact-list">
          <li>I walked the Camino to Santiago (Way of St. James)</li>
          <li>I have 10 toes and 10 fingers</li>
          <li>I traveled by a Volkswagen Bus through Europe</li>
          <li>A good bottle of wine only is a good one if it is shared</li>
          <li>I hiked the highest mountain on the Iberian Peninsula, the Mulhacén (3479m) </li>
          <li>Always have your towel with you</li>
        </ul>
      </div>
    </a-col>
    </a-row>
  </text-section>
</template>

<script>
import TextSection from '@/components/section/TextSection'
import { AwardIcon, CodeIcon, BookIcon, CheckCircleIcon, UserIcon } from 'vue-feather-icons';
export default {
  components: { TextSection, AwardIcon, CodeIcon, BookIcon, CheckCircleIcon, UserIcon }

}
</script>

<style lang="less" >
#timeline {
  .ant-timeline-item-head {
    background: #f8f8f9;
    padding-left:2px;
    svg{
      width:14px;
      height: 14px;
    }
  }
}
  .time{
    font-size: 14px;
    font-weight: bold;
  }
  .content{
    font-size: 14px;
  }
  .fact-list{
    font-size:14px;
    list-style:none;
    padding-left: 8px;
  }
  .facts {
    h2 {
      margin-bottom:1em;
    }
    h3 {
      margin-bottom:0.5em;
    }
  }
</style>
