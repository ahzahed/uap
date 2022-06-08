<template>
  <!-- Apply Part Start -->
  <section id="apply">
    <div class="container">
      <div class="row">
        <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
          <div class="apply-title">
            <h2>How to Apply</h2>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1200">
          <div class="apply-btn">
            <nuxt-link to="/">View All Requirements</nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, i) in how_to_apply"
          :key="i"
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          :data-aos-duration="item.duration"
        >
          <div class="apply-item">
            <img :src="apply[i].icon" :alt="item.title" />
            <span>{{ item.title }}</span>
            <p>
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Apply Part End -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      apply: [
        {
          icon: require('@/static/icon4.png'),
        },
        {
          icon: require('@/static/icon5.png'),
        },
        {
          icon: require('@/static/icon6.png'),
        },
      ],
    }
  },
  computed: {
    ...mapGetters('home', ['how_to_apply']),
  },
  created() {
    this.howToApply()
  },
  methods: {
    ...mapActions('home', ['howToApply']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#apply {
  padding-top: $section-padding;
  padding-bottom: $section-padding;
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
  .apply-title h2 {
    color: $text-color;
    font-size: 52px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    padding-bottom: 90px;
    margin-bottom: 0;
    @include respond-below(sm) {
      padding-bottom: 50px;
      font-size: 40px;
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
      font-size: 45px;
    }
  }
  .apply-btn {
    text-align: right;
    margin-top: 30px;
    margin-right: 50px;
    @include respond-below(sm) {
      margin-right: 0;
      text-align: center;
      margin-bottom: 70px;
    }
    @include respond-between(sm, md) {
      margin-right: 0;
      text-align: center;
      margin-bottom: 70px;
    }
    @include respond-between(md, lg) {
      margin-right: 0;
      text-align: center;
      margin-bottom: 70px;
    }
    a {
      color: $white;
      font-size: 21px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: left;
      background: $darkblue;
      // box-shadow: $card-shadow-dark;
      border-radius: 5px;
      padding: 11px 35px;
      &:hover {
        border: 1px solid $darkblue;
        color: $darkblue !important;
        background: $white;
      }
      @include respond-below(xsl) {
        // padding: 19px 40px;
        font-size: 18px;
      }
    }
  }
  .apply-item {
    @include respond-below(sm) {
      margin-bottom: 30px;
    }
    @include respond-between(sm, md) {
      margin-bottom: 30px;
    }
    @include respond-between(md, lg) {
      margin-bottom: 30px;
    }
    span {
      margin-left: 20px;
      color: $text-color;
      font-size: 21px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      padding-top: 15px;
      @include respond-below(sm) {
        font-size: 28px;
      }
      @include respond-between(sm, md) {
        font-size: 28px;
      }
      @include respond-between(md, lg) {
        font-size: 28px;
      }
      @include respond-between(lg, xl) {
        font-size: 28px;
      }
    }
    p {
      color: $light-black;
      @include paragraph;
      padding-top: 50px;
      margin-bottom: 0;
      padding-right: 40px;
      @include respond-below(sm) {
        padding-right: 0;
        padding-top: 30px;
      }
      @include respond-between(sm, md) {
        padding-right: 0;
        padding-top: 30px;
      }
      @include respond-between(md, lg) {
        padding-right: 0;
        padding-top: 30px;
      }
      @include respond-between(lg, xl) {
        font-size: 18px;
      }
    }
  }
}
</style>
