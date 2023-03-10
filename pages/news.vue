<template>
  <section class="latest-news">
    <hr />
    <div class="container py-3">
      <div class="row latest-news-header">
        <div class="col-md-10 text-center">
          <div class="section-title">
            <h2>All News</h2>
          </div>
        </div>
        <div class="col-md-2 text-right">
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
                <select v-model="topic" class="form-select" placeholder="Date">
                  <option
                    v-for="(item, i) in topic_list"
                    :key="'item_' + i"
                    :value="item.id"
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
                  @click="filterByNews"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="news.data" class="row">
        <div
          v-for="(item, i) in news.data"
          :key="i"
          class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
        >
          <NewsCard :item="item" @click.native="showModal(item)" />
        </div>
      </div>

      <div v-else class="row not_fount_news">
        <div class="col-12 text-center">
          <h3>No News Found</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mt-5">
          <pagination
            v-if="news.meta"
            :pagination="news.meta"
            @pagechanged="onPageChange"
          />
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
import { mapActions, mapGetters } from 'vuex'
import Pagination from '../halpers/Pagination'
// import Banner from '@/components/helpers/Banner.vue'
import NewsCard from '~/halpers/NewsCard.vue'
import Modal from '@/components/helpers/ModalScroll.vue'
export default {
  components: {
    pagination: Pagination,
    // Banner,
    NewsCard,
    Modal,
  },
  layout: 'HomeLayout',
  data() {
    return {
      singleNewsDetails: '',
      isModalVisible: false,

      filter: false,

      date: '',
      topic: '',
    }
  },
  computed: {
    filter_disbaled() {
      return this.date && this.topic
    },
    ...mapGetters('home', ['topic_list', 'news']),
  },
  created() {
    this.onPageChange(1)
    this.topicList()
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
    onPageChange(page) {
      this.$store.dispatch('home/newsList', page)
    },

    filterToggle() {
      this.filter = !this.filter
    },
    filterByNews() {
      const filterData = {
        date: this.date,
        topic: this.topic,
      }
      this.$store.dispatch('home/filterByNews', filterData).then((res) => {
        this.filter = !this.filter
      })
    },
    ...mapActions('home', ['topicList']),
  },
}
</script>
<style lang="scss" scoped>
.latest-news {
  .latest-news-header {
    padding: 0 15px;
    .section-title {
      margin-bottom: 0;
    }
  }

  .pagination-div {
    margin-top: 70px;
  }
  .text-right {
    text-align: right;
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
