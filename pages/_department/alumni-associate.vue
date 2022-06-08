<template>
  <section id="projectThesis">
    <Banner :banner="aa_banner" />
    <Pdf :file="aa_body"/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
import Pdf from '../../components/departmens/academic-calender-pdf/Pdf.vue'

export default {
  components: {
    Banner,
    Pdf,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('alumniAsso/getAaBanner', route.params.department)
    store.dispatch('alumniAsso/getAaBody', route.params.department)
  },
  data() {
    return {
      banner: {
        img: require('@/static/comittee.png'),
        title: 'Academic Calendar – Fall 2021',
      },
    }
  },
  computed: {
    ...mapGetters('alumniAsso', ['aa_banner', 'aa_body']),
  },
}
</script>

<style></style>
