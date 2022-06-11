<template>
  <!-- Choose Part Start -->
  <section id="choose">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="choose-content">
            <h2 data-aos="fade-right" data-aos-duration="1000">
              {{ choose.title }}
            </h2>
            <p data-aos="fade-right" data-aos-duration="1000">
              {{ choose.details }}
            </p>
          </div>
        </div>

        <div
          v-for="(item, i) in why_choose_uap"
          :key="i"
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          :data-aos-duration="item.duration"
        >
          <div class="choose-item">
            <img :src="item.image" :alt="item.title" />
            <h6>{{ item.title }}</h6>
            <p v-html="item.description">
              <!-- {{ item.description }} -->
            </p>

            <nuxt-link class="primary-btn choose-icon" to="/"
              >Learn More</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Choose Part End -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      choose: {
        title: 'Why choose UAP',
        details:
          'We Are One of The Largest, Most Diverse Universities in The Bangladesh',
      },
    }
  },
  computed: {
    ...mapGetters('home', ['why_choose_uap']),
  },
  created() {
    this.whyChooseUap()
  },
  methods: {
    ...mapActions('home', ['whyChooseUap']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#choose {
  padding-top: $section-padding;
  padding-bottom: $section-padding;
  background: url(./static/home03info1.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  @include respond-below(sm) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
  @include respond-between(sm, md) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
  @include respond-between(md, lg) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
  .choose-content {
    text-align: center;

    h2 {
      color: $text-color;
      @include title;
      margin-bottom: 0;
      padding-bottom: 26px;
      @include respond-below(sm) {
        font-size: 33px;
      }
    }
    p {
      color: $text-color;
      @include paragraph;
      padding-bottom: 70px;
      margin-bottom: 0;
      @include respond-below(sm) {
        padding-bottom: 30px;
      }
      @include respond-between(sm, md) {
        padding-bottom: 30px;
      }
      @include respond-between(md, lg) {
        padding-bottom: 30px;
      }
    }
  }
  .choose-item {
    padding: 60px 22px;
    border-radius: 5px;
    text-align: center;
    transition: all linear 0.3s;

    &:hover {
      background: $white;
      box-shadow: $card-shadow-dark;
    }
    img {
      padding-bottom: 56px;
      max-width: 100%;
    }
    h6 {
      color: $text-color;
      font-size: 27px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      margin-bottom: 0;
      padding-bottom: 54px;
    }
    p {
      // text-align: left !important;
      color: $text-color;
      @include paragraph;
      padding-left: 10px;
      padding-right: 10px;
      margin-bottom: 50px;
      @include respond-between(sm, md) {
        text-align: center !important;
      }
      @include respond-between(md, lg) {
        text-align: center !important;
      }
    }

    .choose-icon {
      padding: 11px 32px;
      border-radius: 5px;
    }
  }
}
</style>
