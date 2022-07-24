/* eslint-disable vue/no-use-v-if-with-v-for */
<template>
  <section class="academic-gallery">
    <!-- <Banner :items="banner" /> -->
    <div class="container">
      <div v-if="value.gallery.length" class="row">
        <div
          v-for="photo in value.gallery"
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
          v-if="value.gallery.length"
          v-bind="settings"
          ref="photos"
          class="gallery-slider"
        >
          <img
            v-for="(photo, i) in value.gallery"
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
import VueSlickCarousel from 'vue-slick-carousel'

import Modal from '@/components/helpers/Modal.vue'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel, Modal },
  props: {
    value: {
      type: Object,
      required: true,
    },
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

  created() {
    this.getGallery('all')
  },
  methods: {
    closeModal() {
      this.showModal = false
    },
    showNext() {
      this.$refs.value.gallery.next()
    },
    showPrev() {
      this.$refs.value.gallery.prev()
    },
    openGallery(item) {
      this.showModal = true
    },

    getGallery(item) {
      this.activeItem = item
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
