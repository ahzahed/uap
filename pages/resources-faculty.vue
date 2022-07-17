<template>
  <section id="admissionTest">
    <Banner :banner="rf_banner" />
    <AdmissionData :departments="departmentList"/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import AdmissionData from '../components/resourcesFaculty/resourcesFaculty.vue'
export default {
  components: { Banner, AdmissionData },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('resourceFaculty/getRfBanner')
    store.dispatch('department/getDepartmentList')
  },
  data() {
    return {
      banner: {
        img: require('@/static/admissiontest.png'),
        title: 'UAP Resources: The Faculty',
      },
    }
  },
  computed: {
    ...mapGetters('resourceFaculty', ['rf_banner']),
    ...mapGetters('department', ['departmentList']),
  },
}
</script>

<style></style>
