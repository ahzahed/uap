<template>
  <div>
    <hr />
    <section id="ranking" style="padding-top: 30px; padding-bottom: 0px">
      <div class="container">
        <h2 class="text-center">Awards and Achievements</h2>

        <div class="row">
          <div
            v-for="(item, i) in all_our_ranking"
            :key="i"
            class="col-12 col-sm-6 col-md-6 col-lg-4 my-5 ranking-item"
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
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('about/getAllOurRanking')
  },

  computed: {
    ...mapGetters('about', ['all_our_ranking']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
</style>
