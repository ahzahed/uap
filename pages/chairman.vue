<template>
  <section id="biographyAdministration">
    <Banner v-if="chairman.header" :banner="chairman.header" />
    <AnotherProfile v-if="chairman.message" :details="chairman.message" />
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
    store.dispatch('message/getChairman')
  },

  computed: {
    ...mapGetters('message', ['chairman']),
  },
}
</script>

<style></style>
