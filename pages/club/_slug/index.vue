<template>
  <section class="about-section">
    <Banner :banner="club_banner" />
    <CDC :club-info="club_body" />
    <Event  :events="club_events" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../../components/departmens/club/Banner.vue'
import CDC from '../../../components/departmens/club/cdc/CDC.vue'
import Event from '../../../components/departmens/club/cdc/GeneralEvent.vue'
export default {
  components: {
    Banner,
    CDC,
    Event,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('club/getClubBanner', route.params.slug)
    store.dispatch('club/getClubBody', route.params.slug)
    store.dispatch('club/getClubEvents', route.params.slug)
  },

  
  computed: {
    ...mapGetters('club', ['club_banner', 'club_body', 'club_events']),
  },
}
</script>
