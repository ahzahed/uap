<template>
  <section id="biographyAdministration">
    <Banner v-if="vice_chancellor.header" :banner="vice_chancellor.header" />
    <AnotherProfile
      v-if="vice_chancellor.message"
      :details="vice_chancellor.message"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import AnotherProfile from '../components/biographyAdministration/AnotherProfile.vue'
export default {
  components: {
    Banner,
    AnotherProfile,
  },
  layout: 'HomeLayout',

  asyncData({ store }) {
    store.dispatch('message/getViceChancellor')
  },

  computed: {
    ...mapGetters('message', ['vice_chancellor']),
  },
}
</script>

<style></style>
