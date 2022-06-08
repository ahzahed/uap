<template>
  <section id="whatIsRequired">
    <Banner :items="banner" />
    <Header :list="supportService" />
    <Overview v-show="supportService[0].active == true" />
    <ServiceChart v-show="supportService[1].active == true" />
    <DownloadForm v-show="supportService[2].active == true" />
    <ServiceFees v-show="supportService[3].active == true" />
    <OfficeTime v-show="supportService[4].active == true" />
  </section>
</template>

<script>
import Banner from '../components/helpers/Banner.vue'
import Header from '../components/helpers/Header.vue'
import DownloadForm from '../components/supportService/DownloadForm.vue'
import OfficeTime from '../components/supportService/OfficeTime.vue'
import Overview from '../components/supportService/Overview.vue'
import ServiceChart from '../components/supportService/ServiceChart.vue'
import ServiceFees from '../components/supportService/ServiceFees.vue'
export default {
  components: {
    Banner,
    Header,
    OfficeTime,
    Overview,
    DownloadForm,
    ServiceChart,
    ServiceFees
  },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        img: require('@/static/comittee.png'),
        title: 'What is required',
        details:
          'Undergraduate admission Criteria and Application Fee Payment Procedure',
      },
      supportService: [
        {
          section: 'Overview',
          url: '#',
          active: true,
        },
        {
          section: 'Service chart & fAQ',
          url: '#',
          active: false,
        },
        {
          section: 'Download Forms',
          url: '#',
          active: false,
        },
        {
          section: 'Service Fees',
          url: '#',
          active: false,
        },
        {
          section: 'Office Time',
          url: '#',
          active: false,
        },
      ],
    }
  },
}
</script>

<style></style>
