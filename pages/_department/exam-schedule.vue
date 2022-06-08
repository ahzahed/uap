<template>
  <section id="classSchedule">
    <Banner :banner="exam_schedule_banner" />
    <List :semesters="semesters"/>
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
    store.dispatch('examSchedule/getExamScheduleBanner', route.params.department)
    store.dispatch('examSchedule/getSemesters', route.params.department)
    // store.dispatch('classSchedule/getSections', route.params.department)
  },
  data() {
    return {
      banner: {
        img: require('@/static/comittee.png'),
        title: 'Class Schedule',
      },
    }
  },
  computed: {
    ...mapGetters('examSchedule', ['exam_schedule_banner','semesters']),
  },
}
</script>

<style></style>
