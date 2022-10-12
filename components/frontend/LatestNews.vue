<template>
  <section id="latest-news">
    <div class="container">
      <div
        class="latest-news-header"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 class="">Latest News</h2>
      </div>

      <!-- <VueSlickCarousel
        v-if="latest_news_lists.length"
        v-bind="settings"
        ref="carousel"
        class="latest-news-slider"
      > -->
      <div v-if="latest_news_lists" class="row">
        <div
          v-for="(item, i) in latest_news_lists"
          :key="i"
          class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
        >
          <NewsCard :item="item" @click.native="showModal(item)" />
        </div>
      </div>
      <!-- <NewsCard
          v-for="(item, i) in latest_news_lists"
          :key="'item_' + i"
          class="card"
          data-aos="fade-up"
          :item="item"
          @click.native="showModal(item.description)"
        /> -->
      <!-- </VueSlickCarousel> -->

      <!-- <div class="latest-news-nav">
        <button class="btn latest-news-prev" @click="showNext">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="btn latest-news-next" @click="showPrev">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div> -->
      <div class="latest-news-footer">
        <div class="col-md-6 col-lg-6 col-xl-3 col-12 col-sm-12 mx-auto">
          <nuxt-link class="btn btn-theme" to="/news"
            ><p>
              View all news
              <i class="fas fa-arrow-right"></i></p
          ></nuxt-link>
        </div>
      </div>
    </div>
    <!-- Modal Start -->
    <Modal
      v-show="isModalVisible"
      model-class="modal-dialog modal-dialog-centered"
      model-width="800px"
      @close="closeModal"
    >
      <template #body>
        <h3 class="mb-4 text-center">{{ singleNewsDetails.title }}</h3>
        <p><span class="fw-bold">Date: </span>{{ singleNewsDetails.date }}</p>
        <img
          :src="singleNewsDetails.image"
          class="mb-5"
          :alt="singleNewsDetails.title"
        />
        <hr />
        <div v-html="singleNewsDetails.description"></div>
      </template>
      <template #footer>
        <div class="modal-footer">
          <button
            class="btn btn-primary"
            data-bs-target="#exampleModalToggle"
            data-bs-toggle="modal"
            @click="closeModal()"
          >
            Close
          </button>
        </div>
      </template>
    </Modal>
  </section>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import { mapActions, mapGetters } from 'vuex'
import Modal from '@/components/helpers/ModalScroll.vue'
import NewsCard from '~/halpers/NewsCard.vue'
import aosMixin from '~/mixins/aos'
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { VueSlickCarousel, NewsCard, Modal },
  mixins: [aosMixin],
  data() {
    return {
      singleNewsDetails: {},
      isModalVisible: false,
      settings: {
        dots: false,
        arrows: false,
        focusOnSelect: false,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 3,
        adaptiveHeight: false,
        usetransform: false,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
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
  computed: {
    ...mapGetters('home', ['latest_news_lists', 'single_news_by_slug']),
  },
  created() {
    this.newslatestList()
  },
  methods: {
    ...mapActions('home', ['newslatestList']),

    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },

    // Modal
    showModal(slug) {
      // this.$store.dispatch('home/getSingleNewsBySlug', slug).then((res) => {
      this.singleNewsDetails = slug
      this.isModalVisible = true
      // })
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_main.scss';
#latest-news {
  position: relative;
  max-width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  background: $background-color;
  .latest-news-header {
    text-align: center;

    h2 {
      font-size: 52px;
      font-weight: 500;
    }
  }
  .latest-news-footer {
    text-align: center;
    padding-top: 60px;
    .btn-theme {
      font-size: 21px;
      padding: 11px 42.4px 11px 79px;
      border-radius: 5px;
      font-weight: 500;
      P {
        display: flex;
        margin-bottom: 0px;

        align-items: center;
        justify-content: space-around;
        i {
          margin-left: 20px;
        }
      }
    }
  }

  .latest-news-slider {
    .slick-slide {
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 60px;
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
    }
    .latest-news-next {
      right: 5%;
    }
  }
}
</style>
