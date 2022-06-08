<template>
  <section class="about-section">
    <Banner :items="banner" />
    <CDC :club-info="clubInfo" />
    <Event :event-title="eventTitle" :events="events" />
  </section>
</template>

<script>
import Banner from '../../../components/departmens/club/Banner.vue'
import CDC from '../../../components/departmens/club/cdc/CDC.vue'
import Event from '../../../components/departmens/club/cdc/Event.vue'
export default {
  components: {
    Banner,
    CDC,
    Event,
  },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        img: require('@/static/club/cdc-banner.png'),
        title: 'Career Development Club',
        logo: require('@/static/club/cdc-logo.png'),
        background: '#1cb6e9',
        color: '#f0f0fa',
      },
      clubInfo: {
        img: require('@/static/cdc.png'),
        info: 'Every semester, this club organizes different seminars and workshops to help the students prepare themselves for the future professional life which they are going to choose. The CDC-CSE invites expertise from different industries to share their on-hand knowledge in a real professional environment with our undergraduate and graduate students. The CDC-CSE supervises the students to build a strong network with alumni, different industries to collaborate with the other universities, academic departments, colleges, representatives, and relevant organizations in activities designed to further the aims of the service.',
        goal: 'To help undergraduate, graduate students and alumni of the university to make well-informed choices about their future working lives and to translate these effectively into appropriate decisions and actions. To maintain and develop links with the range of organizations providing appropriate opportunities for graduates, including further internship. To provide students with guidelines to plan for better careers. To introduce students with different sectors and job fields all around the globe. To guide students through their interests and make them ready for any job environment. Provide necessary scopes to develop and evaluate oneself based on current market standard. To help the University of Asia Pacific to achieve its mission.',
      },
      eventTitle: {
        title: "Career Development Club's Event",
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
