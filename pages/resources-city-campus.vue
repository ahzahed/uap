<template>
  <section id="resourcesCityCampusPage">
    <Banner :banner="resource_city_banner" />

    <!-- Mambars header Start -->
    <Header :list="city_campus_list" page="resources-city-campus" />
    <!-- Mambars header End-->
    <!-- Mambars body Start -->
    <nuxt-child></nuxt-child>
    <!-- <InformalActivitySpaces
      v-show="academic[0].active == true"
      :informal-activity-spaces="informalActivitySpaces"
    /> -->
    <!-- <Laboratories
      v-show="academic[1].active == true"
      :laboratories="laboratories"
      :laboratories-details="laboratoriesDetails"
    />
    <ListOfAllLab
      v-show="academic[2].active == true"
      :laboratories="laboratories"
      :laboratories-details="laboratoriesDetails"
    /> -->
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
import Banner from '../components/helpers/Banner.vue'
import Header from '~/halpers/Header.vue'
// import InformalActivitySpaces from '../components/resourcesCityCampus/InformalActivitySpaces.vue'

export default {
  components: {
    // InformalActivitySpaces,

    Banner,
    Header,
  },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('resourceCityCampus/getResourceCityBanner')
    // store.dispatch('resourceCityCampus/getCityCampusList')
  },
 
  computed: {
    ...mapGetters('resourceCityCampus', [
      'resource_city_banner',
      'city_campus_list',
    ]),
  },
  watch: {
    $route(to, from) {
      if (!to.query.id) {
        this.getCityCampusList()
      }
    },
  },
  created() {
    this.getCityCampusList()
  },
  methods: {
    getCityCampusList() {
      this.$store
        .dispatch('resourceCityCampus/getCityCampusList')
        .then((res) => {
          if (res.data.length) {
            this.$router.push(
              `/resources-city-campus/${res?.data[0]?.slug}?id=${res?.data[0]?.id}`
            )
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
</style>
