<template>
  <section id="admissionResult">
    <Banner :banner="admission_result_banner" />

    <div class="container">
      <div class="row text-center">
        <div class="col-lg-1"></div>
        <div class="col-lg-10">
          <h1>{{ admissionResultInfo.title }}</h1>
          <p v-html="admissionResultInfo.description"></p>
        </div>
        <div class="col-lg-1"></div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="finalResult">
            <h2>FINAL RESULT</h2>
            <ul v-for="(item, i) in admissionresutlist" :key="i">
              <li>
                <a :href="item.pdf" target="_blank" class="nav-link">{{
                  item.pdf_file_title
                }}</a>
              </li>
              <hr />
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="waitingResult">
            <h2>WAITING LIST</h2>
            <ul v-for="(item, i) in waitingResult" :key="i">
              <li>
                <a :href="item.pdf" target="_blank" class="nav-link">{{
                  item.pdf_file_title
                }}</a>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
export default {
  components: { Banner },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('admission/admissionResultList')
    store.dispatch('admission/admissionResultBanner')
    store.dispatch('admission/getAdmissionResultInfo')
    store.dispatch('admission/getAdmissionWaitingResult')
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('admission', [
      'admission_result_banner',
      'admissionresutlist',
      'admissionResultInfo',
      'waitingResult',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#admissionResult {
  margin-top: 104px;
  margin-bottom: 104px;
  h1 {
    @include title;
    margin-bottom: 38px;
  }
  p {
    @include paragraph;
    margin-bottom: 82px;
  }
  ul {
    padding: 0;
    li {
      padding-left: 85px;
      @include cardPara;
      color: rgba(18, 102, 241, 0.75);
      font-weight: 600;
      @include respond-below(xs) {
        padding-left: 25px;
      }
    }
  }
  hr {
    margin: 0px 95px;
    color: $darkblue;
    @include respond-below(xs) {
      margin: 0px 25px;
    }
  }
  h2 {
    @include title2;
    padding-left: 85px;
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: $background-color;
    border-radius: 5px;
    @include respond-below(xs) {
      text-align: center;
      padding-left: 0px;
    }
  }
  .finalResult,
  .waitingResult {
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    min-height: 380px;
    @include respond-below(lg) {
      margin-top: 20px;
    }
  }
}
</style>
