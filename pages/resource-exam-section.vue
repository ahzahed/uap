/* eslint-disable no-unused-vars */
<template>
  <section id="research">
    <Banner :banner="resource_exam_banner" />
    <div class="mambars mt-5">
      <!-- Mambars header Start -->
      <Header :list="resource_exam_section" page="resource-exam-section" />
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
import Header from '~/components/resourceExamSection/Header.vue'

export default {
  // name: 'CademicCouncil',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Banner,
    Header,
  },
  layout: 'HomeLayout',
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
    ...mapGetters('resourceExamSection', [
      'resource_exam_banner',
      'resource_exam_section',
      'resource_exam_details',
    ]),
  },
  watch: {
    $route(to, from) {
      if (!to.query.id) {
        this.getResourceExamSection()
      }
    },
  },
  created() {
    this.getResourceExamSection()
  },
  mounted() {
    this.$store.dispatch(
      'resourceExamSection/getResourceExamBanner',
      this.$router
    )
  },
  methods: {
    getResourceExamSection() {
      this.$store
        .dispatch('resourceExamSection/getResourceExamSection')
        .then((res) => {
          if (res.data.length) {
            this.$router.push(
              `/resource-exam-section/${res?.data[0]?.slug}?id=${res?.data[0]?.id}`
            )
            this.$store.dispatch(
              'resourceExamSection/getResourceExamFirstLoad',
              res?.data[0]?.id
            )
            this.$store.dispatch(
              'resourceExamSection/getResourceExamDetailsFirstLoad',
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
