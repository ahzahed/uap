<template>
  <section id="generalTiming">
    <div class="container">
      <div class="col-lg-10 col-12 mx-auto">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="text-center">General Timing</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 left">
            <div class="leftContent">
              <h2>Spring Semester</h2>
              <div v-html="generalInformations.timing_spring"></div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 right">
            <div class="rightContent">
              <h2>Fall Semester</h2>

              <div v-html="generalInformations.timing_fall"></div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="text-center bottom">
              <p>
                {{ generalInformations.footer_text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    generalInformations: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#generalTiming {
  //   padding-top: $section-padding;
  h1 {
    @include title;
    margin-bottom: 30px;
  }
  .left {
    padding-right: 0px;
    @include respond-below(md) {
      padding-right: 12px;
    }
    .leftContent {
      border-top-left-radius: 5px;
      height: 279px;
      padding: 104px 70px;
      background-color: $background-color;
      text-align: center;
    }
  }
  .right {
    padding-left: 0px;
    @include respond-below(md) {
      padding-left: 12px;
    }
    .rightContent {
      border-top-right-radius: 5px;
      text-align: center;
      height: 279px;
      padding: 104px 70px;
      background-color: $lightblue;
    }
  }
  .bottom {
    p {
      margin-bottom: 0px;
    }
    color: $white;
    padding: 11px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: $darkblue;
  }
}
</style>
