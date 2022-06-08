<template>
  <section id="ranking">
    <div class="container">
      <h2 class="text-center">
        {{ ranking.title }}
      </h2>

      <div class="row">
        <div
          v-for="(item, i) in our_ranking"
          :key="i"
          class="col-12 col-sm-6 col-md-6 col-lg-4 mt-5 ranking-item"
        >
          <div class="card h-100 shadow-sm">
            <div class="ranking-img">
              <img :src="item.image" :alt="item.title" class="" />
            </div>
            <div class="card-body" :style="{ background: item.background }">
              <h5 class="card-title">
                {{ item.title }}
              </h5>
              <p class="card-text" v-html="item.description">
                <!-- {{ item.details }} -->
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <nuxt-link to="/" class="primary-btn ranking-btn">See more</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      ranking: {
        title: 'Our Ranking',

        data: [
          {
            color: '#1b2055',
            background: '#e1f2f9',
            img: require('@/static/image-6.png'),
            title: 'UAP RANKED #5 AMONG PRIVATE UNIVERSITIES OF BANGLADESH',
            details:
              '<div class="py-1"><strong>19TH</strong> AMONG ALL PUBLIC AND PRIVATE UNIVERSITIES IN BANGLADESH</div> <div class="py-1">ASIA | RANKED #458 </div> <div class="py-1"> WORLD | RANKED #836 </div> <div class="py-1">SCIMAGO INSTITUTION RANKING, 2021</div>',
          },
          {
            color: '#018e3a',
            background: 'rgba(1, 255, 104, 0.1)',
            img: require('@/static/image-5.png'),
            title: 'UAP RANKED #9 AMONG PRIVATE UNIVERSITIES OF BANGLADESH',
            details:
              '<div class="py-1"><strong>27TH</strong> AMONG ALL PUBLIC AND PRIVATE UNIVERSITIES IN BANGLADESH </div> <div class="py-1">WORLD | RANKED #3989 </div> <div class="py-1">Webometrics Ranking of World Universities, 2021 </div>',
          },
          {
            color: '#1b2055',
            background: 'rgba(247, 215, 153, 0.28)',
            img: require('@/static/image-7.png'),
            title: 'UAP RANKED #5 AMONG PRIVATE UNIVERSITIES OF BANGLADESH',
            details:
              '<div class="py-1"><strong>19TH</strong> AMONG ALL PUBLIC AND PRIVATE UNIVERSITIES IN BANGLADESH </div><div class="py-1"> ASIA | RANKED #458 </div> <div class="py-1">WORLD | RANKED #836 </div> <span style="font-size: 14px; font-weight: 500">SCIMAGO INSTITUTION RANKING, 2021</span>',
          },
        ],
      },
    }
  },

  computed: {
    ...mapGetters('about', ['our_ranking']),
  },

  created() {
    this.ourRanking()
  },

  methods: {
    ...mapActions('about', ['ourRanking']),
  },
}
</script>

<style>

</style>
