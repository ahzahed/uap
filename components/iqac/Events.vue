<template>
  <section id="event">
    <!-- <Banner :banner="banner" /> -->
    <div class="container py-5">
      <div class="row event-header">
        <div class="col-md-10 text-center">
          <div class="section-title">
            <h2>All Events</h2>
          </div>
        </div>
        <!-- <div class="col-md-2 text-right">
          <div class="dropdown">
            <button
              class="btn btn-filter-toggle"
              type="button"
              @click="filterToggle"
            >
              Filter <i class="ml-2 fas fa-sliders-h"></i>
            </button>
            <div v-show="filter" class="filter-div text-left">
              <div class="mb-3">
                <label class="form-label">Sort by</label>
                <input v-model="date" type="date" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">Topic</label>
                <select
                  v-model="topic"
                  class="form-select"
                  placeholder="Select Topic"
                >
                  <option
                    v-for="(item, i) in topics"
                    :key="'item_' + i"
                    :value="item.id"
                  >
                    {{ item.title }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Event Status</label>
                <select
                  v-model="selectedStatus"
                  class="form-select"
                  placeholder="Select Status"
                >
                  <option
                    v-for="(item, i) in status"
                    :key="'item_' + i"
                    :value="item.value"
                  >
                    {{ item.title }}
                  </option>
                </select>
              </div>

              <div class="mb-3 filter-footer">
                <button class="btn" @click="filterToggle">Cancel</button>
                <button
                  class="btn filter-btn"
                  :disabled="!filter_disbaled"
                  @click="filterByEvent"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <div class="row">
        <div
          v-for="(event, i) in value.event"
          :key="i"
          class="col-md-4 col-lg-4 p-3"
          @click="showModal(event)"
        >
          <div class="main-card h-100 shadow">
            <div class="card-top">
              <img :src="event.image" alt="event.title" class="w-100" />
            </div>
            <div class="serial">
              <p class="text-center event-btn mb-0">
                {{ event.type }}
              </p>
            </div>
            <div class="main-card-body">
              <h5 class="card-title">
                <span class="card-title-dot"></span>{{ event.topic }}
              </h5>
              <p class="card-text mb-0 title">
                {{ event.title }}
              </p>
              <div class="mb-3">
                <small class="date">{{
                  $moment(event.date).format('MMMM DD, YYYY')
                }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <pagination
        v-if="value.meta"
        :pagination="value.meta"
        @pagechanged="onPageChange"
      />
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
          <h3 class="text-center">{{ singleNewsDetails.title }}</h3>
          <img
            :src="$config.baseURL + singleNewsDetails.image"
            :alt="singleNewsDetails.title"
            class="w-100"
          />
          <div class="container">
            <div class="row mt-5 border rounded">
              <div class="col-lg-6 modalEventLeft">
                <p><strong>Date:</strong> {{ singleNewsDetails.date }}</p>
                <p>
                  <strong>From: </strong>{{ singleNewsDetails.from }}
                  <br /><strong>To: </strong>{{ singleNewsDetails.to }}
                </p>
              </div>
              <div class="col-lg-6 modalEventRight">
                <p><strong>Topic:</strong> {{ singleNewsDetails.topic }}</p>
                <p><strong>Type:</strong> {{ singleNewsDetails.type }}</p>
                <p><strong>Status:</strong> {{ singleNewsDetails.status }}</p>
              </div>
            </div>
          </div>
          <div class="mt-5" v-html="singleNewsDetails.description"></div>
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
import { mapActions, mapGetters } from 'vuex'

import Pagination from '@/halpers/Pagination'
import Modal from '@/components/helpers/ModalScroll.vue'
// import Banner from '@/components/helpers/Banner.vue'
export default {
  name: 'Events',
  components: {
    // Banner,
    pagination: Pagination,
    Modal,
  },
  layout: 'HomeLayout',
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      singleNewsDetails: '',
      isModalVisible: false,
      status: [
        { title: 'Upcoming', value: 'upcoming' },
        { title: 'Recent', value: 'recent' },
      ],

      filter: false,
      topic: '',
      selectedStatus: '',
      date: '',
      currentPage: 1,
    }
  },
  computed: {
    ...mapGetters('resourceSocio', ['topics']),

    filter_disbaled() {
      return this.date && this.topic && this.selectedStatus
    },
  },
  created() {
    this.onPageChange(1)

    this.topicList()
  },
  methods: {
    onPageChange(page) {
      this.$store.dispatch('resourceSocio/eventPagination', {
        page,
        id: this.$router,
      })
    },

    filterToggle() {
      this.filter = !this.filter
    },

    filterByEvent() {
      const filterData = {
        date: this.date,
        topic: this.topic,
        status: this.selectedStatus,
      }
      this.$store
        .dispatch('resourceSocio/filterByEvent', filterData)
        .then((res) => {
          this.filter = !this.filter
        })
    },
    ...mapActions('resourceSocio', ['topicList']),

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

  .modalEventLeft {
    background: #e1f2f9;
    padding: 10px;
  }
  .modalEventRight {
    background: #f0f0fa;
    padding: 10px;
  }
}
</style>
