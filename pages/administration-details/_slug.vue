<template>
  <section id="biographyAdministration">
    <Banner :banner="administration_banner" />
    <Profile :details="administration_details" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
import Profile from '../../components/biographyAdministration/Profile.vue'
export default {
  components: {
    Banner,
    Profile,
  },
  layout: 'HomeLayout',

  asyncData({ store, route }) {
    store.dispatch('administration/getAdministrationBanner')
    store.dispatch('administration/getAdministrationDetails', route.params.slug)
  },
  data() {
    return {
      socalicons: [
        { img: require('../../static/images/faculty/facebook.png') },
        { img: require('../../static/images/faculty/twitter.png') },
        { img: require('../../static/images/faculty/linkedin.png') },
        { img: require('../../static/images/faculty/instagram.png') },
      ],
    }
  },

  computed: {
    ...mapGetters('administration', [
      'administration_banner',
      'administration_details',
    ]),
  },
}
</script>

<style></style>
