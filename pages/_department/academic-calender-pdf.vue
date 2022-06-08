<template>
  <section id="projectThesis">
    <Banner :items="banner" />
    <Pdf />
  </section>
</template>

<script>
import Banner from '../../components/helpers/Banner.vue'
import Pdf from '../../components/departmens/academic-calender-pdf/Pdf.vue'

export default {
  components: {
    Banner,
    Pdf,
  },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        img: require('@/static/comittee.png'),
        title: 'Academic Calendar – Fall 2021',
      },
    }
  },
}
</script>

<style></style>
