<template>
  <section id="ranking">
    <div class="container">
      <h2 class="text-center">
        Our Ranking
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
            <div class="card-body px-sm-5 px-3" :style="{ background: item.background }">
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
        <nuxt-link to="/our-ranking" class="primary-btn ranking-btn">See more</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  

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
