<template>
  <section id="event">
    <Banner :banner="acoun_banner" />

    <section id="resourceServiceFees">
      <div class="container">
        <div class="row">
          <div
            v-for="(information, i) in acoun_body"
            :key="i"
            class="col-lg-6 main-card mb-5"
          >
            <div class="card-top">
              <div class="serial">
                <p class="text-center serial-text p-3">
                  {{ information.title }}
                </p>
              </div>
              <div class="h-100 text-top">
                <p class="card-text" v-html="information.description"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import Banner from '@/components/helpers/Banner.vue'

export default {
  components: {
    Banner,
  },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('academicCouncelling/getAcounBanner')
    store.dispatch('academicCouncelling/getAcounBody')
  },

  computed: {
    ...mapGetters('academicCouncelling', ['acoun_banner', 'acoun_body']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#resourceServiceFees {
  margin-top: 90px;
  .container {
    h4 {
      @include title;
      margin-bottom: 50px;
    }
    .main-card {
      .card-top {
        border-radius: $border-radius;
        box-shadow: 0 22px 40px 0 rgba(45, 54, 142, 0.15);
        background-color: $background-color;

        .serial {
          background: $darkblue;
          color: white;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          // position: absolute;
          // margin-top: -23px;
          // margin-left: 25px;
          // color: $white;

          // .serial-text {
          //   background-color: $darkblue;
          //   border-radius: 50%;
          //   height: 30px;
          //   width: 30px;
          //   display: flex;
          //   justify-content: center;
          //   align-items: center;
          // }
        }
        .text-top {
          padding: 15px 20px 20px 20px;
          // p {
          // }
        }
      }
    }
  }
}
</style>
