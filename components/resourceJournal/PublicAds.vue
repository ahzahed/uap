<template>
  <section id="researchIEERD">
    <section id="PublicAds">
      <div class="container">
        <div class="row">
          <div class="col-lg-1"></div>
          <div class="col-lg-10">
            <div id="accordionExample" class="accordion">
              <h2 id="headingOne" class="accordion-header explore-collapse-btn">
                Latest Public Ads
              </h2>

              <div class="accordion-body row justify-content-center">
                <div class="position-relative col-lg-10">
                  <VueSlickCarousel
                    ref="carouselExplore"
                    v-bind="settings"
                    class="latest-news-slider"
                  >
                    <div
                      v-for="(event, i) in value.publicAdGallery"
                      :key="i"
                      class="col p-2"
                    >
                      <div class="main-card h-100">
                        <div class="card-top">
                          <img
                            :src="$config.baseURL + event.image"
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
                    <button class="btn explore-slide-prev" @click="showNext(i)">
                      <span class="material-icons-outlined">
                        chevron_left
                      </span>
                    </button>
                    <button class="btn explore-slide-next" @click="showPrev(i)">
                      <span class="material-icons-outlined">
                        chevron_right
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-1"></div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="col-lg-6 mt-5 m-auto">
        <div class="text_box_five">
          <h2>Latest Public Ads</h2>
          <ul v-for="(item, i) in value.publicAdFile" :key="i">
            <li style="list-style-type: none">
              <a
                :href="$config.baseURL + item.file"
                target="_blank"
                class="nav-link"
                >{{ item.file_title }}</a
              >
            </li>
            <hr />
          </ul>
        </div>
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
    value: {
      type: Object,
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
#researchIEERD {
  #PublicAds {
    h1 {
      @include title;
      font-weight: bold;
      color: $darkblue;
    }
    .explore-collapse-btn {
      @include title2;
      color: $light-gray;
      background-color: $background-color;
      padding: 49px 66px;
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

  .text_box_one {
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
  }
  .text_box_two {
    background-color: $background-color;
    padding: 92px 111px;
    text-align: justify;
    @include respond-below(lg) {
      padding: 80px 70px;
    }
    @include respond-below(sm) {
      padding: 40px 30px;
    }
    @include paragraph;
  }
  .text_box_five {
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    min-height: 380px;

    @include respond-below(lg) {
      margin-top: 20px;
    }
    h2 {
      @include title2;
      padding-left: 85px;
      padding-top: 25px;
      padding-bottom: 25px;
      background-color: $background-color;
      border-radius: 5px;
      @include respond-below(xs) {
        text-align: center;
        padding-left: 0px;
      }
    }
  }
}
</style>