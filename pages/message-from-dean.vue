<template>
  <section id="dealMessage">
    <Banner :banner="about_banner" />
    <Message />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import Message from '../components/messageDean/Message.vue'
export default {
  components: { Banner, Message },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('about/getAboutBanner')
  },

  computed: {
    ...mapGetters('about', ['about_banner']),
  },
}
</script>

<style></style>
