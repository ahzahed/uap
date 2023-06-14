<template>
  <section class="about-section">
    <Banner :banner="faculty_banner" />

    <Header
      :list="all_designation"
      :department="$nuxt.$route.params.department"
      page="faculty"
    />
    <nuxt-child></nuxt-child>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
import Header from '~/halpers/Header.vue'

export default {
  components: {
    Banner,
    Header,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('faculty/getFacultyBanner', route.params.department)
  },

  computed: {
    ...mapGetters('faculty', ['faculty_banner', 'all_designation']),
  },

  watch: {
    $route(to, from) {
      if (!to.query.id) {
        this.getAllDesignation()
      }
    },
  },
  created() {
    this.getAllDesignation()
  },
  methods: {
    getAllDesignation() {
      this.$store
        .dispatch('faculty/getAllDesignation', this.$route.params.department)
        .then((res) => {
          if (res.data.length) {
            this.$router.push(
              `/${this.$route.params.department}/faculty/${res?.data[0]?.slug}?id=${res?.data[0]?.id}`
            )
          }
        })
    },
  },
}
</script>
