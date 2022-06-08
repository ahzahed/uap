<template>
  <section id="faq">
    <Banner :banner="faq_banner" />
    <AllFaq :faqs="faq_body"/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import AllFaq from '../components/faq/AllFaq.vue'
export default {
  components: { Banner, AllFaq },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('faqs/getFaqBanner')
    store.dispatch('faqs/getFaqBody')
  },
  data() {
    return {
      banner: {
        img: require('@/static/faq.png'),
        title: 'Freequently Ask question',
        details: 'Key dates for 2020 and 2021',
      },
    }
  },
   computed: {
    ...mapGetters('faqs', ['faq_banner','faq_body']),
  },
}
</script>

<style></style>
