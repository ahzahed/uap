<template>
  <section id="club">
    <div class="container">
      <div class="row align-items-center mb-5">
        <div class="col-md-6">
          <div class="h-100 pe-4 ps-3">
            <h4 class="mb-4">{{ clubInfo.introduction }}</h4>
            <div v-html="clubInfo.introduction_description"></div>
            <!-- <p class="mb-0">
              {{ clubInfo.introduction_description }}
            </p> -->
            <div style="text-align: right">
              <button
                class="primary-btn readmore my-3"
                :style="{
                  backgroundColor: clubInfo.button_bg_color,
                }"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100" style="overflow: hidden">
            <img
              class="img-fluid w-100 img-responsive"
              :src="clubInfo.introduction_image"
              alt="mission"
            />
          </div>
        </div>
      </div>
      <div
        class="row goal my-5 pb-5 px-4"
        :style="{
          backgroundColor: clubInfo.goal_bg_color,
        }"
      >
        <h4 class="text-center mb-2">Our Goals</h4>
        <div v-html="clubInfo.our_goal"></div>
        <!-- <p class="pb-5">{{ clubInfo.our_goal }}</p> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  props: {
    clubInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#club {
  margin-top: $section-padding;
  //  margin-bottom: $section-padding;
  .container {
    h4 {
      @include title;
      text-align: left;
      color: $text-color;
    }
    p {
      @include paragraph;
      text-align: justify;
      color: $text-color;
    }
    .readmore {
      color: $white;
      padding: 8px 15px 8px 14px;
      &:hover {
        background: $white;
      }
    }
    .goal {
      padding-top: 50px;
    
    }
  }
}
</style>
