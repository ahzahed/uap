<template>
  <section id="administrationSlug">
    <div class="container my-5">
      <div
        v-for="(item, i) in administrationList.data"
        :key="`administration_${i}`"
        class="row"
      >
        <div class="col-lg-6 col-md-7 col-sm-9 mx-auto">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-sm-4">
                <img :src="item.image" class="img-fluid rounded-start w-100 h-100" :alt="item.name" />
              </div>
              <div class="col-sm-8 rightSide">
                <div class="card-body">
                  <h5 class="card-title">{{ item.name }}</h5>
                  <p>
                    {{ item.designation }}
                  </p>
                  <h4>Email</h4>
                  <p>
                    {{ item.email }}
                  </p>
                  <nuxt-link :to="`/administration-details/${item.id}`" class="primary-btn">Explore</nuxt-link>
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
import { mapGetters } from 'vuex'
export default {
  asyncData({ route, store }) {
    store.dispatch('administration/allAdministration', route.query.id)
  },

  computed: {
    ...mapGetters('administration', ['administrationList']),
  },

  methods: {
    membarShow(member) {
      if (member.designation === 'Acting Vice-Chancellor') {
        return false
      } else {
        return true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/_main.scss';
#administrationSlug {
  h5 {
    @include cardTitle;
  }
   h4{
    @include cardPara;
    color: #1b2055;
  }
  .rightSide {
    background: $background-color;
  }
}
</style>
