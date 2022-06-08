/* eslint-disable vue/order-in-components */
<template>
  <section id="tution-fees">
    <Banner :banner="tuitions_banner" />
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
    if(route.name === 'tuitions-fees'){
      redirect('/tuitions-fees/under-graduate')
    }
   
    store.dispatch('tuitions/tuitionsBanner')
  },
  data() {
    return {
      programmenu: [
        {
          section: 'Undergraduate Programs',
          url: '/tuitions-fees/under-graduate',
          active: true,
        },
        {
          section: 'Graduate Programs',
          url: '/tuitions-fees/graduate',
          active: false,
        },
        {
          section: 'Waiver',
          url: '/tuitions-fees/tution-waiver',
          active: false,
        },
      ],
    }
  },
  

  computed: {
    ...mapGetters('tuitions', ['tuitions_banner']),
  },
  
  // eslint-disable-next-line vue/order-in-components
  head() {
    return {
      title: this.tuitions_banner.title ? this.tuitions_banner.title : '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.tuitions_banner.description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.tuitions_banner.title,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.tuitions_banner.image,
        },
      ],
    }
  },

}
</script>

<style></style>
