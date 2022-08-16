<template>
  <section id="administrationSlug">
    <div class="container my-5">
      <div v-for="(item, i) in office_proctor" :key="`administration_${i}`" class="row">
        <div class="col-lg-5 col-md-7 col-sm-9 mx-auto">
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
@import './styles/_main.scss';

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
