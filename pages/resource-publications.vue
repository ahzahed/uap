/* eslint-disable no-unused-vars */
<template>
  <section id="research">
    <Banner :banner="resourse_publication_banner" />
    <div class="mambars mt-5">
      <!-- Mambars header Start -->
      <Header
        :list="resourse_publication_section"
        page="resource-publications"
      />
      <!-- Mambars header End-->
      <!-- Mambars body Start -->

      <nuxt-child></nuxt-child>

      <!-- Mambars body End -->
    </div>
  </section>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import Header from '../components/resourcePublications/Header.vue'
// import Header from '~/halpers/HeaderDaynamic.vue'

export default {
  // name: 'CademicCouncil',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Banner,
    Header,
  },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('resourcePublications/getResoursePublicationBanner')
  },
  

  computed: {
    ...mapGetters('resourcePublications', [
      'resourse_publication_banner',
      'resourse_publication_section',
      'resourse_publication_details',
    ]),
  },
  watch: {
    $route(to, from) {
      if (!to.query.id) {
        this.getResourcePublicationSection()
      }
    },
  },
  created() {
    this.getResourcePublicationSection()
  },

  methods: {
    getResourcePublicationSection() {
      this.$store
        .dispatch('resourcePublications/getResourcePublicationSection')
        .then((res) => {
          if (res.data.length) {
            this.$router.push(
              `/resource-publications/${res?.data[0]?.slug}?id=${res?.data[0]?.id}`
            )

            this.$store.dispatch(
              'resourcePublications/getRessourcePublicationDetailsFirstLoad',
              res?.data[0]?.id
            )
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
.banner-section {
  padding-bottom: 110px;
}
</style>
