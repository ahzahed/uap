<template>
  <section id="faq">
    <Banner :banner="important_banner" />
    <DatesandDeadlines :dates="dates" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import DatesandDeadlines from '../components/faq/DatesandDeadlines.vue'
export default {
  components: { Banner, DatesandDeadlines },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('importantDates/getImportantBanner')
    store.dispatch('importantDates/getDates')
  },
  data() {
    return {
      banner: {
        image: require('@/static/1.JPG'),
        title: 'Important Dates and Deadlines',
        details: 'Key dates for 2020 and 2021',
      },
    }
  },
  computed: {
    ...mapGetters('importantDates', ['important_banner', 'dates']),
  },
}
</script>

<style></style>
