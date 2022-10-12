<template>
  <section class="about-page">
    <!-- <div id="float">
      <p>CONTENTS</p>
      <div class="floating-tabs">
        <ul class="nav flex-column">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#ViceChancellor">Message</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#glance">UAP at a glance</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#BriefHistory"
              >UAP brief history</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#accolades"
              >UAP accolades</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#ranking">Our Ranking</nuxt-link>
          </li>
        </ul>
      </div>
    </div> -->
    <Banner :banner="about_banner" />
    <AboutDetails :details="about_banner_bottom" />
    <ViceChancellor :vice-chancellor="vice_chancellor" />
    <AtAGlance :mission="mission" :vision="vision" />
    <BriefHistory />
    <Accolades />
    <Ranking />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import AboutDetails from '../components/about/AboutDetails.vue'
import ViceChancellor from '../components/about/ViceChancellor.vue'
import BriefHistory from '../components/about/BriefHistory.vue'
import AtAGlance from '../components/about/AtAGlance.vue'
import Accolades from '../components/about/Accolades.vue'
import Ranking from '../components/about/Ranking.vue'
export default {
  components: {
    AboutDetails,
    BriefHistory,
    ViceChancellor,
    AtAGlance,
    Accolades,
    Ranking,
    Banner,
  },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('about/getAboutBanner')
    store.dispatch('about/getViceChancellor')
    store.dispatch('about/getAboutBannerBottom')
    store.dispatch('about/getVision')
    store.dispatch('about/getMission')
  },

  computed: {
    ...mapGetters('about', [
      'about_banner',
      'vice_chancellor',
      'about_banner_bottom',
      'mission',
      'vision',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#float {
  // background: $lightblue;
  // width: 20px;
  // height: 100px;
  padding: 20px;
  border-radius: 5px;
  position: fixed;
  top: 70%;
  right: 0;
  z-index: 99;
  background-color: $white;
  @include respond-below(xml) {
    display: none;
  }
  .floating-tabs {
    margin-left: 5px;

    .nuxt-link-exact-active {
      color: red;
      border-left: 2px solid $darkblue;
      color: $text-color;
      font-weight: 600;
    }
    a {
      display: block;
      color: $silver;
      border-left: 2px solid $silver;
      padding-left: 8px;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
    }
    p {
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
    }
  }
}
</style>
