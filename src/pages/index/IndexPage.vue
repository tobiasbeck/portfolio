<template>
  <div class="index">
    <section-welcome />
    <section-about-me />
    <section-timeline />
    <section-projects />
    <section-contact />
  </div>
</template>

<script>
import SectionAboutMe from './sections/SectionAboutMe'
import SectionWelcome from './sections/SectionWelcome'
import SectionTimeline from './sections/SectionTimeline'
import SectionProjects from './sections/SectionProjects'
import SectionContact from './sections/SectionContact'
export default {
  components: { SectionWelcome, SectionAboutMe, SectionTimeline, SectionProjects, SectionContact }
}
</script>
<style lang="less">
  .index{
    margin-top: -64px;
    flex: 1;
    flex-direction: column;
    align-items: stretch;

    .text-block {
      max-width: 75vw;
    }

    .col-center{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    }

    .media-button {
      font-size:2.2em;
      &:hover {
        background: none;
      }
    }
  }

  @keyframes animationCursor{
    from, to {
        background-color: transparent;
      }
      50% {
        background-color: #80848f;
      }
  }

</style>
