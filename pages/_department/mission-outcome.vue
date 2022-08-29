<template>
  <section id="missionOutcome">
    <Banner :banner="mission_banner" />
     <Curriculum :bsc-body="mission_body"/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
import Curriculum from '../../components/departmens/bsc-curriculum/Curriculum.vue'

export default {
  components: {
    Banner,
    Curriculum,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('depMissionOut/getMissionBanner', route.params.department)
    store.dispatch('depMissionOut/getMissionBody', route.params.department)
  
  },
  
   computed: {
    ...mapGetters('depMissionOut', ['mission_banner','mission_body']),
  },
}
</script>

<style></style>
