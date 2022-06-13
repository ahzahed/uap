<template>
  <section id="resourcesCityCampusPage">
    <Banner :banner="resource_city_banner" />

    <!-- Mambars header Start -->
    <Header :list="city_campus_list" />
    <!-- Mambars header End-->
    <!-- Mambars body Start -->

    <InformalActivitySpaces
      v-show="academic[0].active == true"
      :informal-activity-spaces="informalActivitySpaces"
    />
    <Laboratories
      v-show="academic[1].active == true"
      :laboratories="laboratories"
      :laboratories-details="laboratoriesDetails"
    />
    <ListOfAllLab
      v-show="academic[2].active == true"
      :laboratories="laboratories"
      :laboratories-details="laboratoriesDetails"
    />
    <!-- <Members
          v-show="mambarmenu[1].active == true"
          :members="mambarList1"
          :chairperson="chairperson1"
        /> -->

    <!-- Mambars body End -->
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
import Header from '../../components/helpers/Header.vue'
import InformalActivitySpaces from '../../components/resourcesCityCampus/InformalActivitySpaces.vue'

export default {
  name: 'AcademicCouncil',
  components: {
    InformalActivitySpaces,

    Header,
    Banner,
  },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('resourceCityCampus/getResourceCityBanner')
    store.dispatch('resourceCityCampus/getCityCampusList')
  },
  data() {
    return {
      banner: {
        img: require('@/static/authorities-banner.png'),
        title: 'UAP Physical Resources: The City Campus',
        details: 'Informal Activity Spaces',
      },
      academic: [
        {
          section: 'Informal Activity Spaces',
          url: '#',
          active: true,
        },
        {
          section: 'Formal Event Spaces',
          url: '#',
          active: false,
        },
        {
          section: 'Games & Fitness',
          url: '#',
          active: false,
        },
        {
          section: 'Recreation and food',
          url: '#',
          active: false,
        },
        {
          section: 'Other Supports',
          url: '#',
          active: false,
        },
      ],
      informalActivitySpaces: {
        details:
          'The UAP permanent campus at Green road has a large front plaza for approximately 6000 square foot and a backyard (backyard has two parts, one semi-covered and the other open to sky) of slightly smaller size. There is also a central common plaza space of 3300 square foot floor area which is actually an atrium space with a majestic eighty foot high translucent roof to bring in light from outside. The front plaza, backyard and central atrium, all these spaces as well as generous lobby, lounge and corridor spaces at all floors are open to all students. They can sit and talk with each other and socialize in these spaces, talk about their study progress or just relax and focus. At times exhibition or other programs (e.g.: orientation program) are arranged in the plaza or in the backyard.',
        frontPlaza: [
          {
            img: require('@/static/room.png'),
            // img2: require('@/static/resourceaca.png'),
            // note: 'Start of the Day and the end of the day, Different times -different seasons',
          },
          {
            img: require('@/static/room.png'),
          },
        ],
        centralAtrium: [
          {
            img: require('@/static/room.png'),
            // note: 'Start of the Day and the end of the day, Different times -different seasons',
          },
          {
            img: require('@/static/room.png'),
          },
          {
            img: require('@/static/room.png'),
            // note: 'Start of the Day and the end of the day, Different times -different seasons',
          },
          {
            img: require('@/static/room.png'),
          },
        ],
        BackYard: [
          {
            img1: require('@/static/resourceaca.png'),
            img2: require('@/static/resourceaca.png'),
            note: 'Start of the Day and the end of the day, Different times -different seasons',
          },
          {
            img1: require('@/static/resourceaca.png'),
            img2: require('@/static/resourceaca.png'),
            note: 'Start of the Day and the end of the day, Different times -different seasons',
          },
        ],
      },
      laboratories: [
        {
          img: require('@/static/resourceaca.png'),
        },
        {
          img: require('@/static/resourceaca.png'),
        },
        {
          img: require('@/static/resourceaca.png'),
        },
        {
          img: require('@/static/resourceaca.png'),
        },
        {
          img: require('@/static/resourceaca.png'),
        },
        {
          img: require('@/static/resourceaca.png'),
        },
        {
          img: require('@/static/resourceaca.png'),
        },
      ],
    }
  },
  computed: {
    ...mapGetters('resourceCityCampus', [
      'resource_city_banner',
      'city_campus_list',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
</style>
