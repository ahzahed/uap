/* eslint-disable no-unused-vars */
<template>
  <section id="iqac">
    <Banner :banner="iqac_banner" />
    <div class="mambars mt-5">
      <!-- Mambars header Start -->
      <Header :list="iqac_section" page="iqac" />
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
import Header from '~/components/iqac/HeaderDaynamic.vue'

export default {
  // name: 'CademicCouncil',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Banner,
    Header,
  },
  layout: 'HomeLayout',
  

  computed: {
    ...mapGetters('iqac', ['iqac_banner', 'iqac_section', 'iqac_details']),
  },
  watch: {
    $route(to, from) {
      if (!to.query.id) {
        this.getIqacSection()
      }
    },
  },
  created() {
    this.getIqacSection()
  },
  mounted() {
    this.$store.dispatch('iqac/getIqacBanner', this.$router)
  },
  methods: {
    getIqacSection() {
      this.$store.dispatch('iqac/getIqacSection').then((res) => {
        if (res.data.length) {
          this.$router.push(
            `/iqac/${res?.data[0]?.slug}?id=${res?.data[0]?.id}`
          )
          this.$store.dispatch('iqac/getIqacDetailsFirstLoad', res?.data[0]?.id)
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
