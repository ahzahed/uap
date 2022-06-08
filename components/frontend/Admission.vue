<template>
  <!-- Admission Part Start -->
  <section id="admission">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-5 col-md-6 col-12"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div class="admission-content">
            <h2>{{ admission.title }}</h2>
            <p>
              {{ admission.details }}
            </p>
            <!-- <div class="admission-icon">
              <a href="#">Read More</a>
            </div> -->
            <nuxt-link class="primary-btn admission-icon" to="/"
              >Read More</nuxt-link
            >
          </div>
        </div>
        <div
          class="col-lg-7 col-md-6 col-12"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div class="admission-img">
            <img :src="admission.img" :alt="admission.title" class="w-100" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Admission Part End -->
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      admission: {
        title: 'Admission & Aid',
        details:
          'UAP University, we prepare you to launch your career by providing a supportive, creative, and professional environment from which to learn practical skills, build a network of industry contacts.',
        img: require('@/static/campusresourceclass.png'),
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#admission {
  padding-top: $section-padding;
  padding-bottom: $section-padding;
  background: $background-color;
  @include respond-below(sm) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  @include respond-between(sm, md) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  @include respond-between(md, lg) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .admission-content {
    @include respond-below(md) {
      text-align: center;
    }
    h2 {
      color: $text-color;
      font-size: 52px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      margin-bottom: 0;
      padding-bottom: 29px;
      @include respond-below(sm) {
        padding-bottom: 50px;
        font-size: 32px;
        text-align: center;
      }
      @include respond-between(sm, md) {
        padding-bottom: 50px;
        text-align: center;
      }
      @include respond-between(md, lg) {
        padding-bottom: 50px;
        text-align: center;
      }
      @include respond-between(lg, xl) {
        font-size: 40px;
        padding-bottom: 45px;
      }
    }
    p {
      color: $text-color;
      font-family: Poppins;
      @include paragraph;
      margin-bottom: 0;
      padding-bottom: 37px;
      padding-right: 20px;
      @include respond-between(lg, xl) {
        font-size: 18px;
        line-height: 35px;
        padding-right: 0px;
      }
    }
    .admission-icon {
      padding: 11px 42px;
      text-align: center;
      border-radius: 5px;
      margin-right: 35px;
      margin-top: 30px;
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

    .admission-img {
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
