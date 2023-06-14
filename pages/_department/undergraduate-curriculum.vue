<template>
  <section id="bscCurriculum">
    <Banner :banner="bsc_banner" />
    <Header
      :list="section"
      :department="$nuxt.$route.params.department"
      page="undergraduate-curriculum"
    />
    <nuxt-child></nuxt-child>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
// import Curriculum from '../../components/departmens/bsc-curriculum/Curriculum.vue'
import Header from '~/halpers/Header.vue'

export default {
  components: {
    Banner,
    Header,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('depBscCur/getBscBanner', route.params.department)
    store.dispatch('depBscCur/getBscBody', route.params.department)
  },

  computed: {
    ...mapGetters('depBscCur', ['bsc_banner', 'section']),
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
        .dispatch('depBscCur/getAllSections', this.$route.params.department)
        .then((res) => {
          if (res.data.length) {
            this.$router.push(
              `/${this.$route.params.department}/undergraduate-curriculum/${res?.data[0]?.slug}?id=${res?.data[0]?.id}`
            )
          }
        })
    },
  },
}
</script>

<style></style>