<template>
  <text-section
    id="timeline"
    :is-secondary="true"
    class="facts"
    title="Facts Sheet" >
    <Row
      type="flex"
      class="facts-row">
      <Col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="8">
      <h2>My graduations</h2>
      <Timeline pending>
        <TimelineItem>
          <span slot="dot">👶</span>
          <p class="time">1996</p>
          <p class="content">
            I was born :)
          </p>
        </TimelineItem>
        <TimelineItem>
          <span slot="dot">👦</span>
          <p class="time">1997-2006</p>
          <p class="content">
            I enjoyed my childhood
          </p>
        </TimelineItem>
        <TimelineItem>
          <span slot="dot">🏫</span>
          <p class="time">2007-2015</p>
          <p class="content">
            Anne Frank Gymnasium Erding (Abitur, A-Levels)
          </p>
        </TimelineItem>
        <TimelineItem>
          <span slot="dot">🎓</span>
          <p class="time">Sept. 2018 - Feb 2019</p>
          <p class="content">
            
            ERASMUS at <a target="_blank" href="https://www.ua.es/">Universidad de Alicante</a>
          </p>
        </TimelineItem>
        <TimelineItem>
          <span slot="dot">🎓</span>
          <p class="time">2015 - (2019)</p>
          <p class="content">
            Study at FH-Kufstein
          </p>
        </TimelineItem>
        <TimelineItem>
          <p class="time"/>
          <p class="content">
            more to come...
          </p>
        </TimelineItem>
      </Timeline>
    </Col>
      <Col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="8">
      <h2>Technical stuff</h2>
      <Timeline pending>
        <TimelineItem>
          <span slot="dot">🏆</span>
          <p class="time">2012</p>
          <p class="content">
            2<sup>nd</sup> place at Cross Media Competition
            (My first ever award I got for one of my projects)
          </p>
        </TimelineItem>
        <TimelineItem>
          <span slot="dot">👨‍💻</span>
          <p class="time">March - May 2017</p>
          <p class="content">
            Co-Founder and developer of Slothy for iOS (React)
          </p>
        </TimelineItem>
        <TimelineItem>
          <span slot="dot">👨‍💻</span>
          <p class="time">May - October 2017</p>
          <p class="content">
            Co-Founder and developer at Swarm Analytics (Node.js, React)
          </p>
        </TimelineItem>
        <TimelineItem>
          <span slot="dot">👨‍💻</span>
          <p class="time">December 2017 - today</p>
          <p class="content">
            Go, Vue.js, Node.js and PHP developer at cx/omni
          </p>
        </TimelineItem>
        <TimelineItem>
          <p class="time"/>
          <p class="content">
            more to come...
          </p>
        </TimelineItem>
      </Timeline>
    </Col>
      <Col
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
    </Col>
    </Row>
  </text-section>
</template>

<script>
import TextSection from '@/components/section/TextSection'
export default {
  components: { TextSection }

}
</script>

<style lang="less" >
#timeline {
  .ivu-timeline-item-head {
    background: transparent;
    padding-left:4px;
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
  }
  .facts {
    h2 {
      margin-bottom:1em;
    }
    h3 {
      margin-bottom:0.5em;
    }
  }
  .ivu-timeline-item-head {
    background-color: transparent;
  }
</style>
