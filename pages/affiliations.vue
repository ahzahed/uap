<template>
  <section id="affiliations">
    <Banner :banner="affiliation_banner" />
    <div class="container py-5">
      <div class="row">
        <div
          v-for="(event, i) in affiliation_body"
          :key="i"
          class="col-sm-6 col-lg-4 p-3"
          style="cursor: pointer"
          @click="showModal(event)"
        >
          <div class="main-card h-100 shadow">
            <div class="card-top">
              <img :src="$config.baseURL + event.logo" alt="event.title" />
            </div>

            <div class="main-card-body">
              <h5>
                {{ event.title }}
              </h5>

              <p class="card-text mb-0 title">
                {{
                  event.short_description &&
                  event.short_description.slice(0, 45)
                }}.....
              </p>
            </div>
          </div>
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
        <div>
          <h3 class="text-center my-3">{{ singleNewsDetails.title }}</h3>
          <div v-html="singleNewsDetails.short_description"></div>
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
</template>

<script>
import { mapGetters } from 'vuex'

import Banner from '@/components/helpers/Banner.vue'
import Modal from '@/components/helpers/ModalScroll.vue'
export default {
  name: 'Events',
  components: {
    Banner,
    Modal,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('affiliation/getAffiliationBanner')
    store.dispatch('affiliation/getAffiliationBody')
  },
  data() {
    return {
      singleNewsDetails: '',
      isModalVisible: false,
    }
  },
  computed: {
    ...mapGetters('affiliation', ['affiliation_banner', 'affiliation_body']),
  },
  methods: {
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

#affiliations {
  .main-card {
    position: relative;
    border-radius: 5px;
    .main-card-body {
      padding: 15px 30px;
      h5 {
        @include cardTitle;
        font-size: 18px;
      }
      .card-title {
        font-size: 12px;
        font-weight: 400;
        color: $text-color;
        line-height: 18px;
        .card-title-dot {
          width: 6px;
          height: 6px;
          background: #00b74a;
          border-radius: 50%;
          display: inline-block;
          margin-right: 5px;
        }
      }
    }

    .card-top {
      height: 300px;
      border-radius: 5px;
      overflow: hidden;
      border-bottom: 1px solid gray;
      img {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // width: 150px;
        height: 150px;
        text-align: center;
        transition: all 0.2s ease-in-out;
      }
    }
  }
}
</style>
