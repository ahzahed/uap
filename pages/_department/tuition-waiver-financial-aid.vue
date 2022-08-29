<template>
  <section class="about-section">
    <Banner :banner="tuition_waiver_banner" />
    <Header :list="programmenu" />
    <Overview
      v-show="programmenu[0].active == true"
      :overview-informations="overview"
    />
    <NewStudent
      v-show="programmenu[1].active == true"
      :new-student-informations="new_student"
      :specials="new_student_note"
    />
    <CurrentStudent
      v-show="programmenu[2].active == true"
      :current-student-informations="current_student"
      :current-special="current_student_note"
    />
    <SpecialWaiver
      v-show="programmenu[3].active == true"
      :special-waiver-informations="special_waiver"
    />
    <General
      v-show="programmenu[4].active == true"
      :general-informations="general_criteria"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../../components/helpers/StaticHeader.vue'
import Banner from '../../components/helpers/Banner.vue'
import Overview from '../../components/financial-aid/Overview.vue'
import CurrentStudent from '../../components/financial-aid/Current-student.vue'
import NewStudent from '../../components/financial-aid/New-student.vue'
import SpecialWaiver from '../../components/financial-aid/Special-waiver.vue'
import General from '../../components/financial-aid/General.vue'
export default {
  components: {
    Banner,
    Header,
    Overview,
    NewStudent,
    CurrentStudent,
    SpecialWaiver,
    General,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch(
      'depTuitionWaiverFinancial/getTuitionWaiverBanner',
      route.params.department
    )
    store.dispatch(
      'depTuitionWaiverFinancial/getOverview',
      route.params.department
    )

    store.dispatch(
      'depTuitionWaiverFinancial/getNewStudent',
      route.params.department
    )
    store.dispatch(
      'depTuitionWaiverFinancial/getNewStudentNote',
      route.params.department
    )
    store.dispatch(
      'depTuitionWaiverFinancial/getCurrentStudent',
      route.params.department
    )
    store.dispatch(
      'depTuitionWaiverFinancial/getCurrentStudentNote',
      route.params.department
    )
    store.dispatch(
      'depTuitionWaiverFinancial/getSpecialWaiver',
      route.params.department
    )
    store.dispatch(
      'depTuitionWaiverFinancial/getGeneralCriteria',
      route.params.department
    )
  },
  
  computed: {
    ...mapGetters('depTuitionWaiverFinancial', [
      'tuition_waiver_banner',
      'overview',
      'new_student',
      'new_student_note',
      'current_student',
      'current_student_note',
      'special_waiver',
      'general_criteria',
    ]),
  },
}
</script>
