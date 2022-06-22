<template>
  <section id="campus">
    <hr>
    <div class="container mt-5">
      <!-- {{ office_proctor }} -->
      <div
        v-for="(item, i) in office_proctor"
        :key="`administration_${i}`"
        class="row"
      >
        <div class="col-lg-10 mx-auto">
          <div class="card mb-3 shadow-sm">
            <div class="row">
              <div class="col-md-4 col-sm-4 leftSide">
                <img
                  :src="item.image"
                  class="img-fluid w-100 h-100"
                  :alt="item.name"
                />
              </div>
              <div class="col-md-8 col-sm-8 rightSide">
                <div class="card-body">
                  <h5 class="card-title">{{ item.name }}</h5>
                  <p class="card-text">
                    {{ item.designation }}
                  </p>
                  <h5 class="card-title">Email</h5>
                  <p class="card-text mb-4">
                    {{ item.email }}
                  </p>
                  <nuxt-link
                    :to="`/administration-details/${item.id}`"
                    class="primary-btn"
                    >Explore</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters } from 'vuex'
export default {
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('administration/getOfficeProctor')
  },

  computed: {
    ...mapGetters('administration', ['office_proctor']),
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_members.scss';
</style>
