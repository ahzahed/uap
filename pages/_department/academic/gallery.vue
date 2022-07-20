/* eslint-disable vue/no-use-v-if-with-v-for */
<template>
  <section class="academic-gallery">
    <Banner v-if="banner" :banner="banner" />

    <!-- <Banner :items="banner" /> -->
    <div class="container">
      <div class="row nav-padding">
        <div class="col-md-12 col-lg-12 mx-auto">
          <ul class="nav justify-content-center">
            <li class="nav-item" :class="activeItem === 'all' ? 'active' : ''">
              <a
                class="flex-sm-fill text-sm-center nav-link"
                @click="getGallery('all')"
                >All</a
              >
            </li>
            <li
              v-for="(item, i) in categories"
              :key="'item_' + i"
              class="nav-item"
              :class="activeItem == item.cat_gallery ? 'active' : ''"
            >
              <a
                class="flex-sm-fill text-sm-center nav-link"
                @click="getGallery(item.cat_gallery)"
                >{{ item.cat_gallery }}</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div v-if="photos.length" class="row">
        <div
          v-for="photo in photos"
          :key="photo.id"
          class="col-sm-6 col-md-4 col-lg-3"
          @click="openGallery"
        >
          <figure>
            <img
              :src="$config.baseURL + photo.gallery_image"
              class="img-thumbnail grayscale"
            />
          </figure>
        </div>
      </div>
      <div v-else class="row h-100">
        <div class="col-md-12">
          <h3 class="text-center">This category photos empty</h3>
        </div>
      </div>
    </div>

    <Modal
      v-show="showModal"
      model-class="modal-dialog modal-dialog-centered"
      model-width="800px"
      @close="closeModal"
    >
      <template #body>
        <VueSlickCarousel
          v-if="photos.length"
          v-bind="settings"
          ref="photos"
          class="gallery-slider"
        >
          <img
            v-for="(photo, i) in photos"
            :key="i"
            :src="$config.baseURL + photo.gallery_image"
            class="img-thumbnail grayscale"
          />
        </VueSlickCarousel>
        <div class="gallery-nav">
          <button class="btn gallery-prev" @click="showNext">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="btn gallery-next" @click="showPrev">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </template>
    </Modal>
    <!-- overlay -->

    <!-- modal -->
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import Banner from '../../../components/helpers/Banner.vue'
import Modal from '@/components/helpers/ModalScroll.vue'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { Banner, VueSlickCarousel, Modal },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('academic-gallery/getBanner', route.params.department)
    store.dispatch(
      'academic-gallery/galleryCategories',
      route.params.department
    )
  },
  data() {
    return {
      showModal: false,
      activeItem: 'all',
      settings: {
        dots: false,
        autoplay: true,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 1,
      },
    }
  },

  computed: {
    ...mapGetters('academic-gallery', ['banner', 'categories', 'photos']),
  },
  created() {
    this.getGallery('all')
  },
  methods: {
    closeModal() {
      this.showModal = false
    },
    showNext() {
      this.$refs.photos.next()
    },
    showPrev() {
      this.$refs.photos.prev()
    },
    openGallery(item) {
      this.showModal = true
    },

    getGallery(item) {
      this.activeItem = item
      const data = {
        department: this.$route.params.department,
        category: item,
      }

      this.$store.dispatch('academic-gallery/getGallery', data)
    },
  },
}
</script>

<style lang="scss">
.academic-gallery {
  .gallery-nav {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 100%;

    .btn {
      position: absolute;
      background: rgba(18, 102, 241, 0.75);
      box-shadow: 0px 22px 40px rgba(77, 140, 245, 0.1);
      border-radius: 5px;

      color: #fff;
      // top: 50%;
      &:hover {
        opacity: 0.6;
      }
    }
    .gallery-prev {
      left: 0px;
    }
    .gallery-next {
      right: 0px;
    }
  }
  .gallery-slider {
    // overflow: hidden !important;

    .slick-slide {
      height: 500px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .img-thumbnail {
      height: 100%;
    }
  }

  .nav-padding {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  figure {
    margin: 15px 0;
    height: 320px;
    img {
      height: 100%;
    }
  }

  figcaption {
    text-align: center;
  }

  .grayscale {
    filter: grayscale(0);
  }

  .grayscale:hover {
    filter: grayscale(50%);
  }
  .nav-item {
    .nav-link {
      border: 2px solid none;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 26px;
      /* identical to box height */

      text-align: justify;
      text-transform: capitalize;

      /* silver */

      color: #989898;
    }
  }
  .active {
    .nav-link {
      color: #1b2055;
      border: 2px solid #1b2055;
    }
  }
}
</style>
