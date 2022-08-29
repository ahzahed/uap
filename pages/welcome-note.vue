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
  
  computed: {
    ...mapGetters('welcomeNote', ['welcome_banner']),
  },
}
</script>

<style></style>
