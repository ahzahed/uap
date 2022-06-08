<template>
  <section id="club">
    <div class="container">
      <div class="row align-items-center mb-5">
        <div class="col-md-6">
          <div class="h-100 pe-4 ps-3">
            <h4 class="mb-4">Introduction</h4>
            <p class="mb-0">
              {{clubInfo.info}}
            </p>
            <div style="text-align: right">
              <button class="primary-btn readmore my-3">Learn More</button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100" style="overflow: hidden">
            <img class="img-fluid w-100" :src="clubInfo.img" alt="mission" />
          </div>
        </div>
      </div>
      <div class="row goal my-5 pb-5 px-4">
          <h4 class="text-center mb-5">Our Goals</h4>
          <p class="pb-5">{{clubInfo.goal}}</p>
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
    upcomingEvents: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
     
    }
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
      background: $pattens-blue;
      color: $darkblue;
      padding: 8px 15px 8px 14px;
      &:hover {
        background: $white;
      }
    }
    .goal{
        background: $pattens-blue;
        padding-top: 100px;
        padding-bottom: 100px;
    }
  }
}
</style>
