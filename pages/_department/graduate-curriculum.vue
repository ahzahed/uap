<template>
  <section id="bscCurriculum">
    <Banner :banner="msc_banner" />
    <Curriculum :bsc-body="msc_body" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
import Curriculum from '../../components/departmens/bsc-curriculum/Curriculum.vue'

export default {
  components: {
    Banner,
    Curriculum,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('depMscCur/getMscBanner', route.params.department)
    store.dispatch('depMscCur/getMscBody', route.params.department)
  },
  data() {
    return {
      banner: {
        img: require('@/static/comittee.png'),
        title: 'BSc. Curriculum',
      },
    }
  },
  computed: {
    ...mapGetters('depMscCur', ['msc_banner', 'msc_body']),
  },
}
</script>

<style></style>
