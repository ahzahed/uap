<template>
  <div>
    <Banner :banners="banners" />
    <About />
    <Choose />
    <Admission />
    <Apply />
    <Student />
    <LatestNews />
    <UpcomingEvents />
    <CampusTour />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '~/components/frontend/Banner.vue'
import About from '~/components/frontend/About.vue'
import Choose from '~/components/frontend/Choose.vue'
import Admission from '~/components/frontend/Admission.vue'
import Apply from '~/components/frontend/Apply.vue'
import Student from '~/components/frontend/Student.vue'
import LatestNews from '~/components/frontend/LatestNews.vue'
import UpcomingEvents from '~/components/frontend/UpcomingEvents.vue'
import CampusTour from '~/components/frontend/CampusTour.vue'
export default {
  components: {
    Banner,
    LatestNews,
    UpcomingEvents,
    CampusTour,
    About,
    Choose,
    Admission,
    Apply,
    Student,
  },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('home/getBanner')
    // store.dispatch('quickLinks/getLinks')
  },

  computed: {
    ...mapGetters('home', ['banners']),
  },
  methods: {},
}
</script>
