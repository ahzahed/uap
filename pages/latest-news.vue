<template>
  <section class="latest-news">
    <Banner :banner="banner" />

    <div class="container py-5">
      <div class="row">
        <div class="col-md-10 text-center">
          <div class="section-title">
            <h2>Latest News</h2>
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
                <button class="btn filter-btn" :disabled="!filter_disbaled" @click="filterByNews">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="latest_news_lists.length " class="row">
        <div
          v-for="(item, i) in latest_news_lists"
          :key="i"
          class="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-12"
        >
          <NewsCard :item="item" />
        </div>
      </div>
       <nav v-if="latest_news_lists.length " aria-label="Page navigation example" class="text-center" >
        <ul class="pagination  justify-content-center">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li v-for="(pagination, i) in events.total" :key="'pagination_'+i" class="page-item"><a class="page-link" href="javascript:void(0)">{{i+1}}</a></li>
         
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
      <!-- // eslint-disable-next-line vue/valid-v-else
      <div v-else class="row not_fount_news">
        <div class="col-12 text-center">
          <h3>No News Found </h3>
        </div>
    </div> -->
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Banner from '@/components/helpers/Banner.vue'
import NewsCard from '~/halpers/NewsCard.vue'
export default {
  components: {
    Banner,
    NewsCard,
  },
  layout: 'HomeLayout',
  data() {
    return {
      filter: false,
    
        date: '',
        topic: '',
    
      banner: {
        img: require('@/static/admissiontest.png'),
        title: 'Events',
      },
    }
  },
    head: {
    title: 'Latest News',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  },
  computed: {
    filter_disbaled() {
      return this.date && this.topic
    },
    ...mapGetters('home', ['news', 'topic_list']),
  },
  created() {
    this.newsList()
    this.topicList()
  },
  methods: {
    filterToggle() {
      this.filter = !this.filter
    },
    filterByNews() {
      const filterData = {
        date: this.date,
        topic: this.topic,
      }
       this.$store.dispatch("home/filterByNews", filterData).then(res =>{
          this.filter = !this.filter
       })
    },
    ...mapActions('home', ['newslatestList', 'topicList']),
  },
}
</script>
<style lang="scss" scoped>
.latest-news {
  .text-right {
    text-align: right;
  }
  .btn-filter-toggle {
    background: #e1f2f9;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    .ml-2{
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
  .not_fount_news{
    height: 100%;
  }
}
</style>
