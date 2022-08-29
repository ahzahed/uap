/* eslint-disable no-unused-vars */
<template>
  <section id="careerService">
    <Banner :banner="career_service_banner" />
    <section id="message">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="heading"></div>
            <div class="details">
              <p v-html="career_service_body.overview"></p>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-12">
            <div class="heading"></div>
            <div class="details">
              <p v-html="career_service_body.focus"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'

export default {
  // name: 'CademicCouncil',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Banner,
  },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('careerService/getCareerServiceBanner')
    store.dispatch('careerService/getCareerServiceBody')
  },
  

  computed: {
    ...mapGetters('careerService', [
      'career_service_banner',
      'career_service_body',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#message {
  margin-top: 104px;
  margin-bottom: 104px;
  .heading {
    background-color: $darkblue;
    padding-top: 23px;
    padding-bottom: 23px;
    border-radius: 5px;
    h1 {
      @include title2;
      margin-bottom: 0px;
      color: $white;
    }
    p {
      color: $white;
      @include paragraph;
    }
  }
  .descinline {
    display: inline;
  }
  .descempty {
    display: none;
  }
  .details {
    background-color: $lightblue;
    padding: 92px 111px;
    text-align: justify;
    @include respond-below(lg) {
      padding: 80px 70px;
    }
    @include respond-below(sm) {
      padding: 40px 30px;
    }
    @include paragraph;
    .readmore {
      border-radius: 5px;
      //   text-align: right;
      padding: 11px 22px;
      cursor: pointer;
    }
  }
  .messageFrom {
    display: flex;
    flex-direction: row;
    @include respond-below(xs) {
      flex-direction: column;
      align-items: center;
    }
    .profile {
      margin-left: 20px;
      .email {
        @include cardPara;
        font-weight: 500;
      }
      p {
        @include paragraph;
        font-weight: 600;
        color: $deep-primary;
        text-align: left;

        span {
          @include paragraph;

          font-weight: 300;
        }
      }
    }
    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      @include respond-below(xs) {
        height: 100px;
        width: 100px;
      }
    }
    .icon {
      width: 28px;
      height: 20px;
      border-radius: 0;
      color: red;
      margin-bottom: 0px;
    }
  }
}
</style>
