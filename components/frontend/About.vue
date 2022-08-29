<template>
  <!-- About Part Start -->
  <section id="about">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6 col-md-12"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div class="about-content">
            <h2>{{ welcome_info.title }}</h2>
            <p style="text-align: justify">
              {{ welcome_info.description }}
            </p>

            <nuxt-link class="primary-btn read-more-icon" to="/"
              >Read More</nuxt-link
            >
          </div>
        </div>
        <div
          class="col-lg-6 col-md-12"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div class="about-img">
            <img :src="welcome_info.image" :alt="welcome_info.title" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About Part End -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],

  computed: {
    ...mapGetters('home', ['welcome_info']),
  },
  created() {
    this.welcomeInfo()
  },
  methods: {
    ...mapActions('home', ['welcomeInfo']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#about {
  padding-top: $section-padding;
  padding-bottom: $section-padding;
  @include respond-below(sm) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @include respond-between(sm, md) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @include respond-between(md, lg) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .about-content {
    h2 {
      margin: 0 57px 42px 0;
      @include title1;
      text-align: left;
      @include respond-below(sm) {
        // padding-bottom: 40px;
        // font-size: 33px;
        text-align: center;
      }
      @include respond-between(sm, md) {
        // padding-bottom: 40px;
        text-align: center;
      }
      @include respond-between(md, lg) {
        // padding-bottom: 40px;
        text-align: center;
      }
      @include respond-between(lg, xl) {
        font-size: 45px;
        // padding-bottom: 36px;
      }
    }
    p {
      color: $text-color;

      @include paragraph;
      text-align: left;
      padding-right: 60px;
      margin-bottom: 0;
      padding-bottom: 60px;
      @include respond-below(sm) {
        padding-right: 0;
      }
      @include respond-between(sm, md) {
        padding-right: 0;
      }
      @include respond-between(md, lg) {
        padding-right: 0;
      }
      @include respond-between(lg, xl) {
        font-size: 16px;
        line-height: 26px;
        padding-right: 30px;
      }
    }
    .read-more-icon {
      text-align: right;
      margin-right: 75px;
      padding: 11px 42px;
      border-radius: 5px;
      @include respond-below(sm) {
        text-align: center;
        margin-right: 0;
      }
      @include respond-between(sm, md) {
        text-align: center;
        margin-right: 0;
      }
      @include respond-between(md, lg) {
        text-align: center;
        margin-right: 0;
      }
    }
    // .read-more-icon {
    //   padding: 11px 42px;
    //   border-radius: 5px;
    // }
  }
  .about-img {
    overflow: hidden;
    img {
      height: auto;
      max-width: 100%;

      opacity: 1;
      vertical-align: bottom;
      -webkit-transition: all 0.5s ease-in-out;
      -moz-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
      &:hover {
        transform: scale(1.2);
        opacity: 0.7;
      }
      @include respond-below(sm) {
        padding-top: 50px;
      }
      @include respond-between(sm, md) {
        padding-top: 50px;
      }
      @include respond-between(md, lg) {
        padding-top: 50px;
      }
    }
  }
}
</style>
