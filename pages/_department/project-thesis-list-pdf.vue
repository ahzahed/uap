<template>
  <section id="projectThesis">
    <Banner :items="banner" />
    <Pdf />
  </section>
</template>

<script>
import Banner from '../../components/helpers/Banner.vue'
import Pdf from '../../components/departmens/project-thesis-list-pdf/Pdf.vue'

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
        title: 'Project & Thesis List',
      },
    }
  },
}
</script>

<style></style>
