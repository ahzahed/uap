<template>
  <section class="about-section">
    <Banner :items="banner" />
    <Math :club-info="clubInfo" />
    <Event :event-title="eventTitle" :events="events" />
  </section>
</template>

<script>
import Banner from '../../../components/departmens/club/Banner.vue'
import Math from '../../../components/departmens/club/math/Math.vue'
import Event from '../../../components/departmens/club/math/Event.vue'
export default {
  components: {
    Banner,
    Math,
    Event,
  },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        img: require('@/static/club/math-banner.png'),
        title: 'CSE Math Club',
        logo: require('@/static/club/math-logo.png'),
        background: '#19bcb2',
        color: '#f0f0fa',
      },
      clubInfo: {
        img: require('@/static/club.jpg'),
        info: 'Math Club deals with the competitive mathematical problem solving.Members of this club will be guided and inspired for mathematics competition and programming contest. We believe active members will be able to understand the relationship between Computer Science and Mathematics through their participation to different events organized by the club.',
        goal: "The Purpose of Math Club is to develop students' level of Math skills and knowledge for understanding computer science, competitive programming and math olympiads in a better way. This will be accomplished by familiarizing the students on the topics through workshops and competitions. Students will cooperatively work to complete Logic and Math related problems of computer science field.",
      },
      eventTitle: {
        title: "CSE Maths Club's Event",
      },
      events: [
        {
          img: require('@/static/event/event.jpg'),
          title: 'Research Methodology',
          date: 'September 30, 2021',
          type: 'Research',
        },
        {
          img: require('@/static/event/event.jpg'),
          title: 'Online Digital Universe Exposition 2021 (Season 4)',
          date: 'September 30, 2021',
          type: 'Universe Exposition',
        },
        {
          img: require('@/static/event/event.jpg'),
          title: 'Research Methodology',
          date: 'September 30, 2021',
          type: 'Research',
        },
        {
          img: require('@/static/event/event.jpg'),
          title: 'Research Methodology',
          date: 'September 30, 2021',
          type: 'Research',
        },
        {
          img: require('@/static/event/event.jpg'),
          title: 'Online Digital Universe Exposition 2021 (Season 4)',
          date: 'September 30, 2021',
          type: 'Universe Exposition',
        },
        {
          img: require('@/static/event/event.jpg'),
          title: 'Research Methodology',
          date: 'September 30, 2021',
          type: 'Research',
        },
      ],
    }
  },
}
</script>
