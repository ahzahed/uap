<template>
  <section class="about-section">
    <div class="banner-section">
      <div class="banner-image">
        <img src="../static/about-banner.png" alt="about-banner" />
      </div>
      <div class="container">
        <div class="banner-content col-md-6">
          <h2 class="banner-content-title">Member of Campus Administration</h2>
          <!-- <p>University of Asia Pacific</p> -->
        </div>
      </div>
    </div>
    <MemberCampusAdministration
      :administrattion-information="administrattionInformation"
      :socalicons="socalicons"
    />
  </section>
</template>

<script>
import MemberCampusAdministration from '../components/biography/MemberCampusAdministration.vue'

export default {
  components: {
    MemberCampusAdministration,
  },
  layout: 'HomeLayout',
  data() {
    return {
      administrattionInformation: [
        {
          name: 'Prof. Dr. Md. Sultan Mahmud',
          title: 'Vice Chancellor (Acting)',
          img: require('@/static/BOD/sutan_adminpage.jpg'),
          info: 'In terms of its mission of enhancing opportunities of higher education, UAP has now become a well-recognized academia at home and abroad. During these years of nearly two and half decades, our growth and transformation were measured and steered to match world class learning experience that our boys and girls, and their parents aspire. Within the limits of growing demands, we are providing to our students and faculty members the best possible environment conducive to embed our vision of excellence in UAP’s academic programs.',
        },
      ],
      socalicons: [
        { img: require('./../static/images/icon/Path 1.png') },
        { img: require('./../static/images/icon/Path 2.png') },
        { img: require('./../static/images/icon/Path 3.png') },
      ],
    }
  },
}
</script>
