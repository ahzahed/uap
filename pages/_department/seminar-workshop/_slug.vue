<template>
  <section  id="single-id">
        <Banner :items="banner" />
  </section>
</template>
<script>
import Banner from '@/components/helpers/Banner.vue'
export default {
     components: {
    Banner,
    
  },
  layout: 'HomeLayout',
    data() {
    return {    
      banner: {
        img: require('@/static/admissiontest.png'),
        title: 'Events',
      },
    }
  },
}
</script>