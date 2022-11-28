<template>
  <section id="classSchedule">
    <Banner :banner="class_schedule_banner" />
    <List :programs="programs"/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
import List from '../../components/departmens/class-schedule/Schedule.vue'

export default {
  components: {
    Banner,
    List,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('classSchedule/getClassScheduleBanner', route.params.department)
    store.dispatch('classSchedule/getPrograms', route.params.department)
    // store.dispatch('classSchedule/getSections', route.params.department)
  },
  
  computed: {
    ...mapGetters('classSchedule', ['class_schedule_banner','programs']),
  },
}
</script>

<style></style>
