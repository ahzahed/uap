<template>
  <section class="about-section">
    <Banner :banner="staff_banner" />
    <Staff :items="staffs" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
import Staff from '../../components/staff/Staff.vue'
export default {
  name: 'BoardOfTrustees',
  components: { Banner, Staff },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('staff/staffBanner', route.params.department)
    store.dispatch('staff/getStaffs', route.params.department)
  },
  data() {
    return {
      

      currentPage: 1,
    }
  },

  computed: {
    ...mapGetters('staff', ['staff_banner', 'staffs']),
  },

  // For pagination follow Board of Trustees
  //   created() {
  //     this.onPageChange(1)
  //   },
  //   methods: {
  //     onPageChange(page) {
  //       this.currentPage = page
  //       this.$store.dispatch('boardoftrustees/allBoardoftrustees', page)
  //     },
  //   },
}
</script>

<style></style>
