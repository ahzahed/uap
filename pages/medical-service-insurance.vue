<template>
  <section class="about-page">
    <div id="float">
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
    </div>
    <Banner :items="banner" />
    <MedicalServiceInsurance />
    
  </section>
</template>

<script>
import Banner from '../components/helpers/Banner.vue'
import MedicalServiceInsurance from '../components/medicalServiceInsurance/MedicalServiceInsurance.vue'

export default {
  components: {
    MedicalServiceInsurance,
    Banner,
  },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        img: require('@/static/about-banner.png'),
        title: 'About',
        details:
          'We Are One of The Largest, Most Diverse Universities in The Bangladesh',
      },
    }
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
