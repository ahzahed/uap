/* eslint-disable no-unused-vars */
<template>
  <section id="research">
    <Banner :banner="what_is_required_banner" />
    <div class="mambars mt-5">
      <!-- Mambars header Start -->
      <Header
        :list="undergraduate_section"
        page="what-is-required-undergraduate"
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
import Header from '~/components/whatIsRequiredUndergraduate/HeaderDaynamic.vue'

export default {
  // name: 'CademicCouncil',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Banner,
    Header,
  },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('whatIsRequired/getWhatIsRequiredBanner')
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
    ...mapGetters('whatIsRequired', [
      'what_is_required_banner',
      'undergraduate_section',
      'undergraduate_details',
    ]),
  },
  watch: {
    $route(to, from) {
      if (!to.query.id) {
        this.getUndergraduateSection()
      }
    },
  },
  created() {
    this.getUndergraduateSection()
  },
  mounted() {
    this.$store.dispatch('whatIsRequired/what_is_required_banner')
  },
  methods: {
    getUndergraduateSection() {
      this.$store
        .dispatch('whatIsRequired/getUndergraduateSection')
        .then((res) => {
          if (res.data.length) {
            this.$router.push(
              `/what-is-required-undergraduate/${res?.data[0]?.slug}?id=${res?.data[0]?.id}`
            )

            this.$store.dispatch(
              'whatIsRequired/getUndergraduateFirstLoad',
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
