<template>
  <section id="biographyAdministration">
    <Banner
      v-if="pro_vice_chancellor.header"
      :banner="pro_vice_chancellor.header"
    />
    <AnotherProfile
      v-if="pro_vice_chancellor.message"
      :details="pro_vice_chancellor.message"
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
    store.dispatch('message/getProViceChancellor')
  },

  computed: {
    ...mapGetters('message', ['pro_vice_chancellor']),
  },
}
</script>

<style></style>
