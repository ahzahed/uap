<template>
  <section id="faq">
    <Banner :banner="academic_explore_banner" />
    <Explore :explore-info="academic_explore" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
import Explore from '../../components/departmens/explore/Explore.vue'
export default {
  components: {
    Banner,
    Explore,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch(
      'academicExplore/getAcademicExploreBanner',
      route.params.department
    )
    store.dispatch('academicExplore/getAcademicExplor', route.params.department)
  },
  
  computed: {
    ...mapGetters('academicExplore', [
      'academic_explore_banner',
      'academic_explore',
    ]),
  },
}
</script>

<style></style>
