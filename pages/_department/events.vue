<template>
  <section id="event">
    <Banner :banner="banner" />
    <Header />
    <nuxt-child></nuxt-child>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '~/halpers/Header.vue'
import Banner from '@/components/helpers/Banner.vue'
export default {
  name: 'Events',
  components: {
    Banner,
    Header,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('depEvent/topicList', route.params.department)
    store.dispatch('depEvent/depEventBanner', route.params.department)
  },
  data() {
    return {
      singleNewsDetails: '',
      isModalVisible: false,
      status: [
        { title: 'Upcoming', value: 'upcoming' },
        { title: 'Upcoming', value: 'upcoming' },
      ],

      filter: false,
      topic: '',
      date: '',
      currentPage: 1,
    }
  },
  computed: {
    ...mapGetters('depEvent', ['events', 'topics', 'banner']),

    filter_disbaled() {
      return this.date && this.topic
    },
  },
  created() {
    this.onPageChange(1)
  },
  methods: {
    onPageChange(page) {
      const data = {
        page,
        depatment: this.$route.params.department,
      }
      this.$store.dispatch('depEvent/allEventList', data)
    },

    filterToggle() {
      this.filter = !this.filter
    },

    filterByEvent() {
      const filterData = {
        date: this.date,
        topic: this.topic,
      }
      this.$store.dispatch('event/filterByEvent', filterData).then((res) => {
        this.filter = !this.filter
      })
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
