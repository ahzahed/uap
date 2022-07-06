<template>
  <section id="resourceCareerOverview" class="mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="text_box_one">
            <p v-html="resourse_career_overview.text_box_one"></p>
          </div>
        </div>
        <div class="col-lg-12 mt-5">
          <div class="text_box_two">
            <p v-html="resourse_career_overview.text_box_two"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  asyncData({ store, route }) {
    store.dispatch('resourceCareer/getResourceCareerOverview')
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('resourceCareer', ['resourse_career_overview']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#resourceCareerOverview {
  margin-top: 104px;
  margin-bottom: 104px;

  .text_box_one {
    background-color: $lightblue;
    padding: 92px 111px;
    text-align: justify;
    @include respond-below(lg) {
      padding: 80px 70px;
    }
    @include respond-below(sm) {
      padding: 40px 30px;
    }
    @include paragraph;
  }
  .text_box_two {
    background-color: $background-color;
    padding: 92px 111px;
    text-align: justify;
    @include respond-below(lg) {
      padding: 80px 70px;
    }
    @include respond-below(sm) {
      padding: 40px 30px;
    }
    @include paragraph;
  }
}
</style>
