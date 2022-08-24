<template>
  <section id="mscCurriculum">
    <Banner :banner="bsc_banner" />
    <Curriculum :bsc-body="bsc_body" />
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
    store.dispatch('depBscCur/getBscBanner', route.params.department)
    store.dispatch('depBscCur/getBscBody', route.params.department)
  },
  data() {
    return {
      banner: {
        img: require('@/static/comittee.png'),
        title: 'MSc. Curriculum',
      },
    }
  },
  computed: {
    ...mapGetters('depBscCur', ['bsc_banner', 'bsc_body']),
  },
}
</script>

<style></style>