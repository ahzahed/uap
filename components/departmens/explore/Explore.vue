<template>
  <section id="explore">
    <div class="container">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-10">
          <div id="accordionExample" class="accordion">
            <div
              v-for="(item, i) in exploreInfo"
              :key="i"
              class="accordion-item"
            >
              <h2 id="headingOne" class="accordion-header">
                <button
                  class="accordion-button explore-collapse-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                   :class="show && item.id == showindex ? '' : 'collapsed'"
                  @click="
                    () => {
                      accoladingSlide(item.id)
                      show = !show
                    }
                  "
                >
                  {{ item.title }}
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                :class="show && item.id == showindex ? 'show' : ''"
              >
                <div class="accordion-body row justify-content-center">
                  <div class="position-relative col-lg-10">
                    <VueSlickCarousel
                      ref="carouselExplore"
                      v-bind="settings"
                      class="latest-news-slider"
                    >
                      <div
                        v-for="(event, j) in item.explorefile"
                        :key="j"
                        class="col p-2"
                      >
                        <div class="main-card h-100">
                          <div class="card-top">
                            <img
                              :src="$config.baseURL + event.explore_image"
                              alt="event.title"
                              class="w-100"
                              width="300"
                              height="270"
                            />
                          </div>
                        </div>
                      </div>
                    </VueSlickCarousel>

                    <div class="explore-nav">
                      <button
                        class="btn explore-slide-prev"
                        @click="showNext(i)"
                      >
                        <span class="material-icons-outlined">
                          chevron_left
                        </span>
                      </button>
                      <button
                        class="btn explore-slide-next"
                        @click="showPrev(i)"
                      >
                        <span class="material-icons-outlined">
                          chevron_right
                        </span>
                      </button>
                    </div>
                  </div>

                  <p v-html="item.explore_description"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-1"></div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
  props: {
    exploreInfo: {
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

      show: true,
      showindex: 1,
    }
  },
  methods: {
    showNext(i) {
      this.$refs.carouselExplore[i].next()
    },
    showPrev(i) {
      this.$refs.carouselExplore[i].prev()
    },

    accoladingSlide(i) {
      this.showindex = i
      this.show = !this.show
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#explore {
  padding-top: $section-padding;
  padding-bottom: $section-padding;
  h1 {
    @include title;
    font-weight: bold;
    color: $darkblue;
  }
  .explore-collapse-btn {
    @include title2;
    color: $light-gray;
    background-color: $lightblue;
    padding: 49px 66px;
    border-bottom: 1px solid $darkblue;
    @include respond-below(sm) {
      padding: 15px;
    }
  }
  p {
    @include paragraph;
    text-align: justify;
    color: $text-color;
    padding-top: 20px;
    padding-bottom: 40px;
    padding-left: 50px;
    padding-right: 50px;
    @include respond-below(sm) {
      padding: 20px;
    }
    @include respond-below(xsl) {
      padding: 10px;
    }
  }

  .material-icons-outlined {
    background: #1266f1;
    color: $white;
    @include respond-below(xl) {
      display: none;
    }
  }

  .explore-nav {
    z-index: 1;
    .explore-slide-prev,
    .explore-slide-next {
      position: absolute;
      z-index: 2;
      top: 50%;
      background: transparent;
      transform: translateY(-50%);
      &:before {
        color: $white;
      }
    }
    .explore-slide-prev {
      left: -5%;
    
    }
    .explore-slide-next {
      right: -5%;
    
    }
  }
}
</style>
