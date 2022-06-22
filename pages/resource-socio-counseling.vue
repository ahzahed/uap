/* eslint-disable no-unused-vars */
<template>
  <section id="research">
    <Banner :banner="resourse_socio_banner" />
    <div class="mambars mt-5">
      <!-- Mambars header Start -->
      <Header :list="resourse_socio_section" page="resource-socio-counseling" />
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
import Header from '../components/resourceSocio/Header.vue'
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
    store.dispatch('resourceSocio/getResourseSocioBanner')
  },
  data() {
    return {
      banner: {
        img: require('@/static/comittee.png'),
        title: 'Committee',
        details: 'University of Asia Pacific',
      },
    }
  },

  computed: {
    ...mapGetters('resourceSocio', [
      'resourse_socio_banner',
      'resourse_socio_section',
      'resourse_socio_details',
    ]),
  },
  watch: {
    $route(to, from) {
      if (!to.query.id) {
        this.getResourceSocioSection()
      }
    },
  },
  created() {
    this.getResourceSocioSection()
  },

  methods: {
    getResourceSocioSection() {
      this.$store
        .dispatch('resourceSocio/getResourceSocioSection')
        .then((res) => {
          if (res.data.length) {
            this.$router.push(
              `/resource-socio-counseling/${res?.data[0]?.slug}?id=${res?.data[0]?.id}`
            )

            this.$store.dispatch(
              'resourceSocio/getRessourceSocioDetailsFirstLoad',
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
