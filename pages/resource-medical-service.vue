<template>
  <section id="resourceMedicalService">
    <Banner :banner="rms_banner" />

    <section id="researchIEERD">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mt-5">
            <div class="text_box_one">
              <p v-html="rms_body.medical_service"></p>
            </div>
          </div>
          <div class="col-lg-12 mt-5">
            <div class="text_box_two">
              <p v-html="rms_body.medical_collaboration"></p>
            </div>
          </div>
          <div class="col-lg-12 mt-5">
            <div class="text_box_three">
              <p v-html="rms_body.insurance_coverage"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
export default {
  components: { Banner },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('resourceMedicalService/getRmsBanner')
    store.dispatch('resourceMedicalService/getRmsBody')
  },

  computed: {
    ...mapGetters('resourceMedicalService', ['rms_banner', 'rms_body']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#resourceMedicalService {
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
  .text_box_three {
    background-color: #e5e5e5;
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
