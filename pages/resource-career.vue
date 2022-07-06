/* eslint-disable vue/order-in-components */
<template>
  <section id="tution-fees">
    <Banner :banner="resourse_career_banner" />
    <Program :list="programmenu" />

    <NuxtChild />
  </section>
</template>

<script>
// import infoTuition from '../components/tution-fees/tuition-info.vue'
import { mapGetters } from 'vuex'
import Program from '@/components/tution-fees/Program.vue'
// import WaiverInfo from '../components/tution-fees/WaiverInfo.vue'
// import Waiver from '../components/tution-fees/Waiver.vue'
import Banner from '@/components/helpers/Banner.vue'

export default {
  components: {
    Program,
    //  WaiverInfo,
    Banner,
  },
  layout: 'HomeLayout',
  asyncData({ store, route, redirect }) {
    if (route.name === 'resource-career') {
      redirect('/resource-career/Overview')
    }
    store.dispatch('resourceCareer/getResourseCareerBanner')
  },

  data() {
    return {
      programmenu: [
        {
          section: 'Overview',
          url: '/resource-career/Overview',
          active: true,
        },
        {
          section: 'Career related Activities ',
          url: '/resource-career/Career',
          active: false,
        },
      ],
    }
  },

  computed: {
    ...mapGetters('resourceCareer', ['resourse_career_banner']),
  },

  // eslint-disable-next-line vue/order-in-components
  // head() {
  //   return {
  //     title: this.tuitions_banner.title ? this.tuitions_banner.title : '',
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: this.tuitions_banner.description,
  //       },
  //       {
  //         hid: 'og:title',
  //         name: 'og:title',
  //         content: this.tuitions_banner.title,
  //       },
  //       {
  //         hid: 'og:image',
  //         name: 'og:image',
  //         content: this.tuitions_banner.image,
  //       },
  //     ],
  //   }
  // },
}
</script>

<style></style>
