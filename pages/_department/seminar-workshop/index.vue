<template>
  <section id="event">
    <Banner :banner="banner" />
    <div class="container py-5">
      <div class="row event-header">
        <div class="col-md-10 text-center">
          <div class="section-title"></div>
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
              <!-- <div class="mb-3">
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
              </div> -->
              <!-- <div class="mb-3">
                <label class="form-label">Event Status</label>
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
              </div> -->

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
        </div>
      </div>

      <div class="row">
        <nuxt-link
          v-for="(event, i) in seminars"
          :key="i"
          class="col-md-6 col-lg-4 p-3"
          :to="`/events/${event.slug}`"
        >
          <div class="main-card h-100 shadow">
            <div class="card-top">
              <img
                :src="$config.baseURL + event.seminar_image"
                alt="event.title"
                class="w-100"
              />
            </div>

            <div class="main-card-body">
              <h5 class="card-text mb-0 title bold">
                {{ event.seminar_title }}
              </h5>
              <div>
                <span class="title bold">Event Date: </span>
                <small class="title">{{
                  $moment(event.event_date).format('MMMM DD, YYYY')
                }}</small>
              </div>
              <div>
                <span class="title bold">Event Time: </span>
                <small class="title">{{ event.event_time }}</small>
              </div>
              <div class="mb-3">
                <span class="title bold">Event Link: </span>
                <small class="date"
                  ><a :href="event.event_link" target="_blank">{{
                    event.event_link
                  }}</a></small
                >
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Banner from '@/components/helpers/Banner.vue'
export default {
  name: 'Seminar',
  components: {
    Banner,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch(
      'seminarWorkshop/depSeminarWorkshopBanner',
      route.params.department
    )
    store.dispatch('seminarWorkshop/getSeminers', route.params.department)
  },
  data() {
    return {
      status: [
        { title: 'Upcoming', value: 'upcoming' },
        { title: 'Upcoming', value: 'upcoming' },
      ],

      filter: false,
      topic: '',
      date: '',
      currentPage: 1,
      // banner: {
      //   img: require('@/static/admissiontest.png'),
      //   title: 'Events',
      // },
    }
  },
  computed: {
    ...mapGetters('seminarWorkshop', ['banner', 'seminars']),
    filter_disbaled() {
      return this.date
    },
  },
  created() {
    this.onPageChange(1)

    this.topicList()
  },
  methods: {
    onPageChange(page) {
      this.$store.dispatch('event/allEventList', page)
    },

    filterToggle() {
      this.filter = !this.filter
    },

    filterByEvent() {
      const filterData = {
        date: this.date,
        department: this.$router,
      }
      this.$store
        .dispatch('seminarWorkshop/filterByEvent', filterData)
        .then((res) => {
          this.filter = !this.filter
        })
    },
    ...mapActions('event', ['topicList']),
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
      // @include title3;
      text-align: left;
    }
    .bold {
      font-weight: bold;
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
