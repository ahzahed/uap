<template>
  <section id="whatIsRequired">
    <Banner :banner="what_is_required_banner" />
    <Header :list="whatIsRequired" />
    <Graduate v-show="whatIsRequired[0].active == true" />
    <Undergraduate v-show="whatIsRequired[1].active == true" />
    <Payment v-show="whatIsRequired[2].active == true" />
    <AdmissionCriteria v-show="whatIsRequired[3].active == true" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import Header from '../components/helpers/StaticHeader.vue'
import Graduate from '../components/whatIsRequire/Graduate.vue'
import Undergraduate from '../components/whatIsRequire/Undergraduate.vue'
import Payment from '../components/whatIsRequire/Payment.vue'
import AdmissionCriteria from '../components/whatIsRequire/AdmissionCriteria.vue'
export default {
  components: {
    Banner,
    Header,
    Graduate,
    Undergraduate,
    Payment,
    AdmissionCriteria,
  },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('whatIsRequired/getWhatIsRequiredBanner')
  },
  data() {
    return {
      
      whatIsRequired: [
        {
          name: 'Graduate admission criteria',
          url: '#',
          active: true,
        },
        {
          name: 'Undergraduate admission criteria',
          url: '#',
          active: false,
        },
        {
          name: 'Application fee payment procedure',
          url: '#',
          active: false,
        },
        {
          name: 'Direct admission criteria',
          url: '#',
          active: false,
        },
      ],
    }
  },
  computed: {
    ...mapGetters('whatIsRequired', ['what_is_required_banner']),
  },
}
</script>

<style></style>
