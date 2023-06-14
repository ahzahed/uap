<template>
  <section id=" mscCurriculum">
    <Banner :banner="msc_banner" />
    <!-- <Curriculum :bsc-body="msc_body" /> -->
    <Header
      :list="section"
      :department="$nuxt.$route.params.department"
      page="graduate-curriculum"
    />
    <nuxt-child></nuxt-child>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
import Header from '~/halpers/Header.vue'
// import Curriculum from '../../components/departmens/bsc-curriculum/Curriculum.vue'

export default {
  components: {
    Banner,
    Header,
    // Curriculum,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('depMscCur/getMscBanner', route.params.department)
    store.dispatch('depMscCur/getMscBody', route.params.department)
  },
  
  computed: {
    ...mapGetters('depMscCur', ['msc_banner', 'section']),
  },
  watch: {
    $route(to, from) {
      if (!to.query.id) {
        this.getAllSections()
      }
    },
  },
  created() {
    this.getAllSections()
  },
  methods: {
    getAllSections() {
      this.$store
        .dispatch('depMscCur/getAllSections', this.$route.params.department)
        .then((res) => {
          if (res.data.length) {
            this.$router.push(
              `/${this.$route.params.department}/graduate-curriculum/${res?.data[0]?.slug}?id=${res?.data[0]?.id}`
            )
          }
        })
    },
  },
}
</script>

<style></style>
