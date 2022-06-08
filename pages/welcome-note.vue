<template>
  <section id="welcomeNote">
    <Banner :banner="welcome_banner" />
    <Welcome />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import Welcome from '../components/welcomeNote/Welcome.vue'
export default {
  components: { Banner, Welcome },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('welcomeNote/getWelcomeBanner')
  },
  data() {
    return {
      banner: {
        img: require('@/static/note.png'),
        title: 'Welcome Note',
        details:
          'We Are One of The Largest, Most Diverse Universities in The Bangladesh',
      },
    }
  },
  computed: {
    ...mapGetters('welcomeNote', ['welcome_banner']),
  },
}
</script>

<style></style>
