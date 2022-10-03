<template>
  <section id="accolades">
    <div class="container">
      <div class="latest-news-header">
        <h2 class="">UAP Accolades</h2>
      </div>

      <VueSlickCarousel
        v-if="accolades.length"
        v-bind="settings"
        ref="carousel"
        class="latest-news-slider"
      >
        <div
          v-for="(item, slideindex) in accolades"
          :key="`${slideindex}-carousel`"
          class="card"
          @click="showModal(item.description)"
        >
          <img :src="item.image" class="card-img" :alt="item.title" />
          <div class="card-img-overlay">
            <p class="card-text">
              {{ item.title }}
            </p>
          </div>
        </div>
      </VueSlickCarousel>

      <div class="row banner_button_group">
        <div v-for="(button, i) in accolades_cat" :key="i" class="col-md-4">
          <div
            class="bordered"
            :class="showindex === button.value ? 'bordered-active' : ''"
          >
            <button
              class="btn banner_button"
              @click="accoladingByCat(button.value)"
            >
              {{ button.title }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <Modal
      v-show="isModalVisible"
      model-class="modal-dialog modal-dialog-centered"
      model-width="800px"
      @close="closeModal"
    >
      <template #body>
        <div v-html="singleNewsDetails"></div>
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
import { mapGetters } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Modal from '@/components/helpers/ModalScroll.vue'
export default {
  components: { VueSlickCarousel, Modal },
  data() {
    return {
      singleNewsDetails: '',
      isModalVisible: false,
      showindex: 'student_accolades',
      settings: {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 4,
        adaptiveHeight: true,
        slidesToScroll: 3,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 700,
              autoplaySpeed: 2000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            autoplaySpeed: 2000,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },

      accolades_cat: [
        {
          title: 'Student’s Accolades',
          value: 'student_accolades',
        },
        {
          title: 'Teacher’s Accolades',
          value: 'teacher_accolades',
        },
        {
          title: 'Notable Alumni',
          value: 'notablea_alumni',
        },
      ],
    }
  },
  computed: {
    ...mapGetters('about', ['accolades']),
  },
  created() {
    this.accoladingByCat('teacher_accolades')
  },
  methods: {
    accoladingByCat(value) {
      this.showindex = value
      this.$store.dispatch('about/accoladingByCat', value).then((res) => {})
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
.banner_button_group {
  .bordered {
    width: 60%;
    border-top: 2px solid #e9cfe0;
  }
  .bordered-active {
    border-top: 2px solid #bb1c85;
  }
}
</style>
