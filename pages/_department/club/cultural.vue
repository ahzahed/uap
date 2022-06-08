<template>
  <section class="about-section">
    <Banner :items="banner" />
    <Cultural :club-info="clubInfo" />
    <Event :event-title="eventTitle" :events="events" />
  </section>
</template>

<script>
import Banner from '../../../components/departmens/club/Banner.vue'
import Cultural from '../../../components/departmens/club/cultural/Cultural.vue'
import Event from '../../../components/departmens/club/cultural/Event.vue'
export default {
  components: {
    Banner,
    Cultural,
    Event,
  },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        img: require('@/static/club/cultural-banner.png'),
        title: 'CSE  Cultural Club',
        logo: require('@/static/club/cultural-logo.png'),
        background: '#3a6b59',
        color: '#f0f0fa',
      },
      clubInfo: {
        img: require('@/static/cultural.png'),
        info: 'The Cultural Club is formed with the aim to create an environment of creativity and cultural prospects in dept. of CSE, University of Asia Pacific. It arranges different cultural programs to improve communication, creativity, patriotism and different skills of the students. It helps to develop different skills of the students besides the academic curriculum. It arranges different traditional programs in order to create a relationship of love, trust and uniqueness with the tradition and customs of our country.',
        goal: 'Creating a proper, comfortable and healthy environment to practice and develop personal skills  Organizing activities pertaining to performing arts, and promoting leadership, organizational and communication skills through it.  Last but not the least, providing students with a vibrant campus experience alongside with the long-winded pedagogical journey.',
      },
      eventTitle: {
        title: "CSE  Cultural Club's Event",
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
