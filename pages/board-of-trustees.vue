<template>
  <section class="about-section">
    <Banner :banner="boardoftrustees_banner" />
    <BoardCard
      :items="boardoftrustees.data"
      :chairperson="chairman"
      :show-charman="currentPage"
    />
    <Pagination
      v-if="boardoftrustees.meta"
      :pagination="boardoftrustees.meta"
      @pagechanged="onPageChange"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import BoardCard from '../components/boardOfTrustees/BoardMember.vue'
import Pagination from '@/halpers/Pagination'
export default {
  name: 'BoardOfTrustees',
  components: { Pagination, Banner, BoardCard },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('boardoftrustees/BoardofTrusteesBanner')
    store.dispatch('boardoftrustees/getChairman')
  },
  data() {
    return {
      chairperson: {
        // img: require('@/static/BOD/b1.jpg'),
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
    ...mapGetters('boardoftrustees', [
      'boardoftrustees',
      'boardoftrustees_banner',
      'chairman',
    ]),
  },
  created() {
    this.onPageChange(1)
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page
      this.$store.dispatch('boardoftrustees/allBoardoftrustees', page)
    },
  },
}
</script>

<style></style>
