<template>
  <section id="examSchedule">
    <Banner :banner="academic_cal_banner" />
    <List :lists="academic_cal_body"/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import List from '../components/departmens/academic-calender/Calender.vue'

export default {
  components: {
    Banner,
    List,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('depAcademicCal/getAcademicCalBanner')
    store.dispatch('depAcademicCal/getAcademicCalBody')
  },
  
  computed: {
    ...mapGetters('depAcademicCal', ['academic_cal_banner','academic_cal_body']),
  },
}
</script>

<style></style>
