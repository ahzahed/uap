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
      chairperson: {
        img: require('@/static/BOD/b1.jpg'),
        name: 'MR. C.M.SHAFI SAMI',
        designation: 'Chairperson',
        occupation:
          'Former Foreign Secretary and Former Adviser, Caretaker Government',
        address: 'Apt. 1SE, House # 18/A Road # 44 Gulshan‐2, Dhaka‐1212',
        email: 'cmsami@yahoo.com, samishafi1942@gmail.com',
      },

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
