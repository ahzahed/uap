<template>
  <section class="about-section">
    <Banner v-if="banner" :banner="admission_banner" />

    <AdmissionDetails />
    <GeneralTiming />
    <Procedure />
    <OfficeContact :address="admission_address" />
    <NecessaryLinks :admission_necessary_list='admission_necessary_list'/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import AdmissionDetails from '../components/admissionAtUap/AdmissionDetails.vue'
import GeneralTiming from '../components/admissionAtUap/GeneralTiming.vue'
import Procedure from '../components/admissionAtUap/Procedure.vue'
import OfficeContact from '../components/admissionAtUap/OfficeContact.vue'
import NecessaryLinks from '../components/admissionAtUap/NecessaryLinks.vue'
export default {
  components: {
    AdmissionDetails,
    GeneralTiming,
    Procedure,
    OfficeContact,
    NecessaryLinks,
    Banner,
  },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('admission/admissionBanner')
    store.dispatch('admission/admissionAddress')
    store.dispatch('admission/getAdmissionNecessaryList')
  },
  data() {
    return {
      banner: {
        img: require('@/static/admission.png'),
        title: 'Admission at UAP',
        details:
          'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
      },
    }
  },
  computed: {
    ...mapGetters('admission', [
      'admission_banner',
      'admission_address',
      'admission_necessary_list',
    ]),
  },
}
</script>

<style lang="scss" scoped></style>
