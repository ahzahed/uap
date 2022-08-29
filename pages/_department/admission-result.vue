<template>
  <section id="bscCurriculum">
    <Banner :banner="admission_result_banner" />
    <Curriculum
      :written="written_test"
      :final="final_result"
      :waiting="waiting_list"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
import Curriculum from '../../components/departmens/admission-result/AdmissionResult.vue'

export default {
  components: {
    Banner,
    Curriculum,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch(
      'depAdmissionResult/getAdmissionResultBanner',
      route.params.department
    )
    store.dispatch('depAdmissionResult/getWrittenTest', route.params.department)
    store.dispatch('depAdmissionResult/getFinalResult', route.params.department)
    store.dispatch('depAdmissionResult/getWaitingList', route.params.department)
  },
 
  computed: {
    ...mapGetters('depAdmissionResult', [
      'admission_result_banner',
      'written_test',
      'final_result',
      'waiting_list',
    ]),
  },
}
</script>

<style></style>
