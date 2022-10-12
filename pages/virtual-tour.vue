<template>
  <section id="event">
    <Banner :banner="banner" />
    <div class="container py-5">
      <div class="row">
        <div
          v-for="(event, i) in all_tour"
          :key="i"
          class="col-xl-4 col-lg-6 col-md-6 col-sm-12 p-3"
          style="cursor: pointer"
          @click="showModal(event.description)"
        >
          <div class="main-card h-100 shadow">
            <div class="card-top">
              <!-- <img
                :src="$config.baseURL + event.image"
                alt="event.title"
                class="w-100"
              /> -->

              <iframe width="100%" height="100%" :src="event.link"> </iframe>
            </div>
            <!-- <div class="serial">
              <p class="text-center event-btn mb-0">
                {{ $moment(event.date).format('MMMM DD') }}
                <small class="d-block">(Closed)</small>
              </p>
            </div> -->
            <div class="main-card-body">
              <p class="card-text mb-0 title">
                {{ event.title }}
              </p>
              <div class="mb-3" v-html="event.description">
                <!-- <small class="date">{{
                  $moment(event.date).format('MMMM DD, YYYY')
                }}</small> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import Banner from '@/components/helpers/Banner.vue'

export default {
  name: 'Events',
  components: {
    Banner,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('virtualTour/getVirtualTourBanner')
    store.dispatch('virtualTour/getVirtualTour')
  },
  data() {
    return {
      singleNewsDetails: '',
      isModalVisible: false,
    }
  },
  computed: {
    ...mapGetters('virtualTour', ['banner', 'all_tour']),
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

#event {
  .event-header {
    padding-bottom: 20px;
  }
  .main-card {
    position: relative;
    border-radius: 5px;
    .main-card-body {
      padding: 15px 30px;
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
    .serial {
      position: absolute;
      top: 10px;
      right: 10px;
      color: $white;
      .event-btn {
        background-color: $darkblue;
        padding: 11px 9px 11px 9px;
        box-shadow: 0px 22px 40px rgba(95, 95, 95, 0.1);
        border-radius: 5px;
        @include paragraph1;
        &:hover {
          background-color: $white;
          color: $darkblue;
        }
      }
    }
    .title {
      color: $darkblue;
      @include title3;
      text-align: left;
    }
    .date {
      color: #1266f1;
      @include paragraph1;
      font-weight: 0;
      text-align: left;
    }
    .text-top {
    }
    .card-top {
      height: 300px;
      border-radius: 5px;
      overflow: hidden;
      &:hover {
        img {
          transform: scale(1.2);
        }
      }
      img {
        height: 100%;
        min-height: 300px;
        width: 100%;
        transition: all 0.2s ease-in-out;
      }
    }
  }
  .btn-filter-toggle {
    background: #e1f2f9;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    .ml-2 {
      margin-left: 15px;
    }
  }
  .filter-div {
    padding: 10px 20px;

    position: absolute;
    z-index: 9999;
    background: #e1f2f9;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    .filter-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .btn {
        margin-right: 10px;
      }
    }
  }
  .not_fount_news {
    height: 100%;
  }
}
</style>
