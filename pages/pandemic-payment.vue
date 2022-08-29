<template>
  <section id="pandemicPayment">
    <Banner :banner="pandemic_banner" />
    <Message :message="message" />
    <PaymentDownload :fee="fee" :deposit="deposit" />
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
    store.dispatch('pandemic/getMessage')
    store.dispatch('pandemic/getFee')
    store.dispatch('pandemic/getDeposit')
  },
  
  computed: {
    ...mapGetters('pandemic', ['pandemic_banner', 'message', 'fee', 'deposit']),
  },
}
</script>

<style></style>
