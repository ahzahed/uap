<template>
  <section class="about-section">
    <Banner v-if="boardoftrustees_banner" :banner="boardoftrustees_banner" />

    <BoardCard :items="boardoftrustees"  />
    <Pagination />
  </section>
</template>

<script>
import {  mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import BoardCard from '../components/boardOfTrustees/BoardMember.vue'
import Pagination from '../components/helpers/Pagination.vue'
export default {
  name: 'BoardOfTrustees',
  components: { BoardCard, Pagination, Banner },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('boardoftrustees/BoardofTrusteesBanner')   
    store.dispatch('boardoftrustees/allBoardoftrustees')   
  },
  data() {
    return {
      banner: {
        img: require('@/static/authorities-banner.png'),
        title: 'Board of trustees',
        details: 'The board of trustees is the university’s governing body.',
      },
      chairperson: {
        img: require('@/static/BOD/b1.jpg'),
        name: 'MR. C.M.SHAFI SAMI',
        designation: 'Chairperson',
        occupation:
          'Former Foreign Secretary and Former Adviser, Caretaker Government',
        address: 'Apt. 1SE, House # 18/A Road # 44 Gulshan‐2, Dhaka‐1212',
        email: 'cmsami@yahoo.com, samishafi1942@gmail.com',
      },
      cardData: [
        {
          img: require('@/static/BOD/b2.jpg'),
          name: 'MR. A. K. M. KAMALUDDIN CHOUDHURY',
          designation: 'Member, Board of Trustees, UAP',
          occupation:
            'Former Secretary and Ambassador, Government of Bangladesh',
          address:
            'House # 48, Aptt. # B-3 (3rd floor), Road # 25, Block - A, Banani, Dhaka-1213',
          email: 'hasinakamal@gmail.com',
        },
        {
          img: require('@/static/BOD/b3.jpg'),
          name: 'MR. K. M. AKHTARUZZAMAN',
          designation: 'Member, Board of Trustees, UAP',
          occupation: 'Chairman, Akhtar Group',
          address:
            'Akhtar Furnitures Ltd., Plot # 1298, Bhatara Baridhara, Dhaka-1212',
          email: 'a.zaman@akhtargroup.com.bd',
        },
        {
          img: require('@/static/BOD/b4.jpg'),
          name: 'MR. KAZI MOHD. MOFIZUR RAHMAN',
          designation: 'Member, Board of Trustees, UAP',
          occupation: 'Managing Director, Kazi Air International',
          address:
            'Kazi Tower (1st floor), VIP Road 86, Inner Circular Road, Naya Paltan',
          email: 'kaziairintlpvtltd@yahoo.com',
        },
        {
          img: require('@/static/BOD/b5.jpg'),
          name: 'MR. ISHTIAQUE AHMED',
          designation: 'Member, Board of Trustees, UAP',
          occupation: 'Controller of Accounts, GMG Airlines Ltd.',
          address: 'House # 47 Road # 23, Block - A, Banani, Dhaka-1212',
          email: 'ishtiaque43@gmail.com',
        },
        {
          img: require('@/static/BOD/b6.jpg'),
          name: 'MR. QAYUM REZA CHOWDHURY',
          designation: 'Member, Board of Trustees, UAP',
          occupation:
            'Managing Director, Knit & Weave Fashion Ltd. And former President',
          address: 'Aptt. # 304, House # 13, Road # 51, Gulshan, Dhaka',
          email: 'qayumchowdhury@rocketmail.com',
        },
        {
          img: require('@/static/BOD/b7.jpg'),
          name: 'PROF. DR. MOHAMMAD SHARIFUL ISLAM',
          designation: 'Member, Board of Trustees, UAP',
          occupation: 'Professor, Department of Civil Engineering, BUET',
          address:
            'South Proshanti, House # 22; Flat B-7, Road 9/A, Dhanmondi, Dhaka',
          email: 'msharifulbd@gmail.com, mshariful@yahoo.com',
        },
        {
          img: require('@/static/BOD/b8.jpg'),
          name: 'MS. TASHMEEM SHAYERA MOYEEN',
          designation: 'Member, Board of Trustees, UAP',
          occupation: 'Private Service',
          address: 'House # 395 (1st Floor), Lane # 06, DOHS, Baridhara, Dhaka',
          email: 'moyeen.shayera@gmail.com',
        },
        {
          img: require('@/static/BOD/b9.jpg'),
          name: 'MR. MIZANUR RAHMAN',
          designation: 'Member, Board of Trustees, UAP',
          occupation: 'Chairman, Penguin International Ltd.',
          address:
            'Penguin International Ltd. House # 10, Road # 16-A, Gulshan-1, Dhaka',
          email: 'penguinintl@yahoo.com',
        },
        // {
        // img: require('@/static/BOD/b10.jpg'),
        //   name: '',
        //   designation: '',
        //   occupation: '',
        //   address: '',
        //   email: '',
        // },
      ],
    }
  },

  computed: {
     ...mapGetters('boardoftrustees', ['boardoftrustees', 'boardoftrustees_banner']),
  },

}
</script>

<style></style>
