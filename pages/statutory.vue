/* eslint-disable no-unused-vars */
<template>
  <section id="statutory">
    <Banner :banner="statutory_banner" />
    <div class="mambars mt-5">
      <!-- Mambars header Start -->
      <Header :list="statutory_section" page="statutory" />
      <!-- Mambars header End-->
      <!-- Mambars body Start -->
      <div class="mambars_body">
        <nuxt-child></nuxt-child>
      </div>
      <!-- Mambars body End -->
    </div>
  </section>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { mapActions, mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import Header from '~/halpers/Header.vue'
// import Members from '../components/academicCouncil/Members.vue'

export default {
  name: 'CademicCouncil',
  components: {
    Banner,
    Header,
  },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('statutory/getStatutoryBanner')
  },

  

  computed: {
    ...mapGetters('statutory', ['statutory_section', 'statutory_banner']),
  },
  watch: {
    $route(to, from) {
      if (!to.query.id) {
        this.allStatutorySection()
      }
    },
  },
  created() {
    this.allStatutorySection()
  },
  methods: {
    allStatutorySection() {
      this.$store
        .dispatch('statutory/allStatutorySection')
        .then((res) => {
          if (res.data.length && !this.$route.query.id) {
            // eslint-disable-next-line no-console

            this.$router.push(
              `/statutory/${res?.data[0]?.slug}?id=${res?.data[0]?.id}`
            )
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
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
.mambars{
  background: $lightblue;
}
</style>
