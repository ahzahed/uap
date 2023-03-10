<template>
  <!-- About Part Start -->
  <section id="admission">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6 col-md-12"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div class="about-content">
            <h2>{{ admission_aid.title }}</h2>
            <div
              v-html="
                admission_aid.description &&
                admission_aid.description.length > 600
                  ? admission_aid.description.slice(0, 600) + '.....'
                  : admission_aid.description
              "
            ></div>
            <!-- <p style="text-align: justify">
              {{
                admission_aid.description &&
                admission_aid.description.length > 530
                  ? admission_aid.description.slice(0, 530) + '.....'
                  : admission_aid.description
              }}
            </p> -->

            <p
              v-if="
                admission_aid.description &&
                admission_aid.description.length > 600
              "
              class="primary-btn read-more-icon"
              style="cursor: pointer; font-weight: bold"
              @click="showModal(admission_aid)"
            >
              Read More
            </p>
            <!-- <p
              v-show="admission_aid.description.length(550)"
              class="primary-btn read-more-icon"
              to="/"
              @click="showModal(admission_aid)"
            >
              Read More
            </p> -->
          </div>
        </div>
        <div
          class="col-lg-6 col-md-12"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div class="about-img">
            <img :src="admission_aid.image" :alt="admission_aid.title" />
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
        <div>
          <h3 class="text-center my-3">{{ singleNewsDetails.title }}</h3>
          <!-- <p>{{ singleNewsDetails.description }}</p> -->
          <div v-html="singleNewsDetails.description"></div>
        </div>
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
  <!-- About Part End -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import aosMixin from '~/mixins/aos'
import Modal from '@/components/helpers/ModalScroll.vue'
export default {
  components: { Modal },
  mixins: [aosMixin],
  data() {
    return {
      singleNewsDetails: {},
      isModalVisible: false,
    }
  },
  computed: {
    ...mapGetters('home', ['admission_aid']),
  },
  created() {
    this.getAdmissionAid()
  },
  methods: {
    ...mapActions('home', ['getAdmissionAid']),
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
#admission {
  padding-top: $section-padding;
  padding-bottom: $section-padding;
  background: $background-color;
  @include respond-below(sm) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @include respond-between(sm, md) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @include respond-between(md, lg) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .about-content {
    h2 {
      @include title4;
      @include respond-between(lg, xl) {
        padding-left: 10px;
      }
    }
    p {
      color: $text-color;

      @include paragraph;
      text-align: left;
      padding-right: 60px;
      margin-bottom: 0;
      padding-bottom: 60px;
      @include respond-below(sm) {
        padding-right: 0;
      }
      @include respond-between(sm, md) {
        padding-right: 0;
      }
      @include respond-between(md, lg) {
        padding-right: 0;
      }
      @include respond-between(lg, xl) {
        font-size: 16px;
        line-height: 26px;
        padding-right: 30px;
        padding-left: 10px;
      }
    }
    .read-more-icon {
      text-align: right;
      margin-right: 75px;
      padding: 11px 42px;
      border-radius: 5px;
      display: inline-block;
      color: white;
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
      @include respond-between(lg, xl) {
        margin-left: 10px;
      }
    }
    // .read-more-icon {
    //   padding: 11px 42px;
    //   border-radius: 5px;
    // }
  }
  .about-img {
    padding-left: 100px;
    @include respond-below(lg) {
      padding-left: 0px;
    }
    overflow: hidden;
    img {
      height: auto;
      max-width: 100%;

      opacity: 1;
      vertical-align: bottom;
      -webkit-transition: all 0.5s ease-in-out;
      -moz-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
      &:hover {
        transform: scale(1.2);
        opacity: 0.7;
      }
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
