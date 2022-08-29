<template>
  <section class="about-section">
    <Banner :banner="dep_club_banner" />
    <CDC :club-info="dep_club_body" />
    <Event :event-title="eventTitle" :events="dep_club_events" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../../../components/departmens/club/Banner.vue'
import CDC from '../../../../components/departmens/club/cdc/CDC.vue'
import Event from '../../../../components/departmens/club/cdc/Event.vue'
export default {
  components: {
    Banner,
    CDC,
    Event,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('depClub/getDepClubBanner', route.params)
    store.dispatch('depClub/getDepClubBody', route.params)
    store.dispatch('depClub/getDepClubEvents', route.params)
  },

 
  computed: {
    ...mapGetters('depClub', ['dep_club_banner', 'dep_club_body','dep_club_events']),
  },
}
</script>
