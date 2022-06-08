<template>
  <section class="about-section">
    <Banner :items="banner" />
    <Film :club-info="clubInfo" />
    <Event :event-title="eventTitle" :events="events" />
  </section>
</template>

<script>
import Banner from '../../../components/departmens/club/Banner.vue'
import Film from '../../../components/departmens/club/Film-Photography/Film-Photography.vue'
import Event from '../../../components/departmens/club/Film-Photography/Event.vue'
export default {
  components: {
    Banner,
    Film,
    Event,
  },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        img: require('@/static/club/flim-banner.png'),
        title: 'Film & Photography Club',
        logo: require('@/static/club/flim-logo.png'),
        background: '#f2f2f2',
        color: '#000000',
      },
      clubInfo: {
        img: require('@/static/club.jpg'),
        info: 'We (Sports Club) manage and organise various sports Events for our Department. Our Activities are- * Badminton Tournament * Cricket Tournament * Indoor Sports Tournament * Gaming Tournament * Football Tournament',
        goal: 'The Sports club is committed to provide a healthy sporting habit among the students. It helps to learn teamwork at work, coordination among diverse cultural & ethnic groups and mainly infuses discipline & instills the value system in one individual. Value of time, precision & competitiveness are the major learning points apart from communication, coordination & teamwork.',
      },
      eventTitle: {
        title: "Film & Photography Club's Event",
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
