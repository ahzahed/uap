<template>
  <section id="examSchedule">
    <Banner :banner="exam_schedule_banner" />
    <List :programs="programs" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
import List from '../../components/departmens/class-schedule/ExamSchedule.vue'

export default {
  components: {
    Banner,
    List,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch(
      'examSchedule/getExamScheduleBanner',
      route.params.department
    )
    store.dispatch('examSchedule/getPrograms', route.params.department)
    // store.dispatch('classSchedule/getSections', route.params.department)
  },

  computed: {
    ...mapGetters('examSchedule', ['exam_schedule_banner', 'programs']),
  },
}
</script>

<style></style>
