<template>
  <section class="about-section">
    <Banner :items="banner" />
    <Header :list="programmenu" />

    <Trending
      v-show="programmenu[0].active == true"
      :trending-events="trendingEvents"
    />
    <Upcoming
      v-show="programmenu[1].active == true"
      :upcoming-events="upcomingEvents"
    />
  </section>
</template>

<script>
import Banner from '../../components/helpers/Banner.vue'
import Header from '../../components/helpers/Header.vue'
import Trending from '../../components/departmens/event/Trending.vue'
import Upcoming from '../../components/departmens/event/Upcoming.vue'

export default {
  components: {
    Banner,
    Header,
    Trending,
    Upcoming,
  },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        img: require('@/static/admissiontest.png'),
        title: 'Events',
      },

      programmenu: [
        {
          name: 'Trending',
          url: '#',
          active: true,
        },
        {
          name: 'Upcoming',
          url: '#',
          active: false,
        },
      ],
      trendingEvents: [
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
      upcomingEvents: [
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
