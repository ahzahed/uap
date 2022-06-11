<template>
  <section id="admissionTest">
    <Banner :banner="banner" />
    <AdmissionData />
  </section>
</template>

<script>
import Banner from '../../components/helpers/Banner.vue'
import AdmissionData from '../../components/resourcesFaculty/resourcesFaculty.vue'
export default {
  components: { Banner, AdmissionData },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        img: require('@/static/admissiontest.png'),
        title: 'UAP Resources: The Faculty',
      },
    }
  },
}
</script>

<style></style>
