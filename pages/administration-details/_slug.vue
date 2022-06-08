<template>
  <section id="biographyAdministration">
    <Banner :banner="administration_banner" />
    <Profile :details="administration_details" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
import Profile from '../../components/biographyAdministration/Profile.vue'
export default {
  components: {
    Banner,
    Profile,
  },
  layout: 'HomeLayout',

  asyncData({ store, route }) {
    store.dispatch('administration/getAdministrationBanner')
    store.dispatch('administration/getAdministrationDetails', route.params.slug)
  },
  data() {
    return {
      alumniInformation: [
        {
          name: 'Dr. Shantanu Chakraborty',
          title: 'Vice Chancellor (Acting)',
          dept: 'Department of Computer Science and Engineering, University of Asia Pacific',
          img: require('@/static/BOD/sutan_adminpage.jpg'),
          info: 'In terms of its mission of enhancing opportunities of higher education, UAP has now become a well-recognized academia at home and abroad. During these years of nearly two and half decades, our growth and transformation were measured and steered to match world class learning experience that our boys and girls, and their parents aspire. Within the limits of growing demands, we are providing to our students and faculty members the best possible environment conducive to embed our vision of excellence in UAP’s academic programs.',
        },
        {
          name: 'Dr. Shantanu Chakraborty',
          title: 'Vice Chancellor (Acting)',
          dept: 'Department of Computer Science and Engineering, University of Asia Pacific',
          img: require('@/static/BOD/sutan_adminpage.jpg'),
          info: 'In terms of its mission of enhancing opportunities of higher education, UAP has now become a well-recognized academia at home and abroad. During these years of nearly two and half decades, our growth and transformation were measured and steered to match world class learning experience that our boys and girls, and their parents aspire. Within the limits of growing demands, we are providing to our students and faculty members the best possible environment conducive to embed our vision of excellence in UAP’s academic programs.',
        },
        {
          name: 'Dr. Shantanu Chakraborty',
          title: 'Vice Chancellor (Acting)',
          dept: 'Department of Computer Science and Engineering, University of Asia Pacific',
          img: require('@/static/BOD/sutan_adminpage.jpg'),
          info: 'In terms of its mission of enhancing opportunities of higher education, UAP has now become a well-recognized academia at home and abroad. During these years of nearly two and half decades, our growth and transformation were measured and steered to match world class learning experience that our boys and girls, and their parents aspire. Within the limits of growing demands, we are providing to our students and faculty members the best possible environment conducive to embed our vision of excellence in UAP’s academic programs.',
        },
        {
          name: 'Dr. Shantanu Chakraborty',
          title: 'Vice Chancellor (Acting)',
          dept: 'Department of Computer Science and Engineering, University of Asia Pacific',
          img: require('@/static/BOD/sutan_adminpage.jpg'),
          info: 'In terms of its mission of enhancing opportunities of higher education, UAP has now become a well-recognized academia at home and abroad. During these years of nearly two and half decades, our growth and transformation were measured and steered to match world class learning experience that our boys and girls, and their parents aspire. Within the limits of growing demands, we are providing to our students and faculty members the best possible environment conducive to embed our vision of excellence in UAP’s academic programs.',
        },
      ],
      socalicons: [
        { img: require('../../static/images/faculty/facebook.png') },
        { img: require('../../static/images/faculty/twitter.png') },
        { img: require('../../static/images/faculty/linkedin.png') },
        { img: require('../../static/images/faculty/instagram.png') },
      ],
    }
  },

  computed: {
    ...mapGetters('administration', [
      'administration_banner',
      'administration_details',
    ]),
  },
}
</script>

<style></style>
