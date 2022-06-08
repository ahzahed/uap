<template>
  <section id="event">
    <div class="container">
      <div class="latest-news-header">
        <h2 class="">{{ eventTitle.title }}</h2>
      </div>

      <VueSlickCarousel
        v-bind="settings"
        ref="carousel"
        class="latest-news-slider"
      >
        <div
          v-for="(event, i) in events"
          :key="i"
          class="col p-3 card border-0 bg-transparent"
        >
          <div class="main-card h-100 shadow">
            <div class="card-top">
              <img :src="event.img" alt="event.title" class="w-100 card-img" />
              <div class="serial">
                <p class="text-center primary-btn event-btn mb-0">
                  {{ event.type }}
                </p>
              </div>
              <div class="h-100 text-top">
                <div
                  class="ms-3 py-2 flex-column d-flex justify-content-center h-100"
                >
                  <p class="card-text mb-0 title">
                    {{ event.title }}
                  </p>
                  <small class="date mb-0">{{ event.date }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
      <div class="text-center mt-5">
        <nuxt-link to="/" class="primary-btn readmore">More Events</nuxt-link>
      </div>
      <div class="latest-news-nav">
        <button class="btn latest-news-prev" @click="showNext">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="btn latest-news-next" @click="showPrev">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import aosMixin from '~/mixins/aos'
export default {
  components: { VueSlickCarousel },
  mixins: [aosMixin],
  props: {
    eventTitle: {
      type: Object,
      required: true,
    },
    events: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      settings: {
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#event {
  position: relative;
  margin-bottom: $section-padding;
  max-width: 100%;
  .latest-news-header {
    text-align: center;
    padding-bottom: 80px;
    h2 {
      @include title;
    }
  }

  .latest-news-slider {
    .slick-slide {
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 60px;
      .main-card {
        .card-img {
          height: 180px;
        }
        .card-top {
          min-height: 300px;
          position: relative;
          .serial {
            position: absolute;
            top: 10px;
            right: 10px;
            color: $white;
            .event-btn {
              background-color: $tahiti-gold;
              padding: 11px 9px 11px 9px;
              @include paragraph1;
            }
          }
          .title {
            color: $darkblue;
            @include title3;
            text-align: left;
          }
          .date {
            color: $tahiti-gold;
            @include paragraph1;
            font-weight: 0;
            text-align: left;
          }
          .text-top {
            height: 120px !important;
          }
        }
      }
    }
  }
  .readmore {
    background: $tahiti-gold;
    color: $white;
    padding: 8px 25px 8px 24px;
    &:hover {
      background: $white;
    }
  }
  .fa-chevron-right,
  .fa-chevron-left {
    height: 20px;
    width: 20px;
    padding-top: 2px;
    background: $tahiti-gold;
    color: $white;
    @include respond-below(xl) {
      display: none;
    }
  }
  .latest-news-nav {
    z-index: 1;
    .latest-news-prev,
    .latest-news-next {
      position: absolute;
      z-index: 2;
      top: 50%;
      transform: translateY(-50%);
      &:before {
        color: $white;
      }
    }
    .latest-news-prev {
      left: 5%;
      top: 55%;
    }
    .latest-news-next {
      right: 5%;
      top: 55%;
    }
  }
}
</style>
