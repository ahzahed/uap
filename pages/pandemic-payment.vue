<template>
  <section id="pandemicPayment">
    <Banner :banner="pandemic_banner" />
    <Message />
    <PaymentDownload />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import Message from '../components/pandemicPayment/Message.vue'
import PaymentDownload from '../components/pandemicPayment/PaymentDownload.vue'
export default {
  components: { Banner, Message, PaymentDownload },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('pandemic/getPandemicBanner')
  },
  data() {
    return {
      banner: {
        img: require('@/static/comittee.png'),
        title: 'Pandemic Payment Policy and Option',
        details: 'Pandemic & Special Fee Structure',
      },
    }
  },
  computed: {
    ...mapGetters('pandemic', ['pandemic_banner']),
  },
}
</script>

<style></style>
