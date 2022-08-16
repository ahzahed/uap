<template>
  <section id="generalTiming">
    <div class="container">
      <div class="row my-5">
        <div class="col-lg-6 col-md-6 left">
          <div class="leftContent">
            <p v-html="value.office_time.text_box_one"></p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 right">
          <div class="rightContent">
            <p v-html="value.office_time.text_box_two"></p>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="text-center bottom">
            <p>No service is available without ID card.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    value: {
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
    margin-bottom: 95px;
  }
  .left {
    padding-right: 0px;
    @include respond-below(md) {
      padding-right: 12px;
    }
    .leftContent {
      border-top-left-radius: 5px;
      height: 300px;
      padding: 90px 70px;
      background-color: $background-color;
      @include respond-below(lg) {
        padding: 40px;
      }
      @include respond-below(xs) {
        padding: 15px;
      }
    }
  }
  .right {
    padding-left: 0px;
    @include respond-below(md) {
      padding-left: 12px;
    }
    .rightContent {
      border-top-right-radius: 5px;

      height: 300px;
      padding: 90px 70px;
      background-color: $lightblue;
      @include respond-below(lg) {
        padding: 40px;
      }
      @include respond-below(xs) {
        padding: 15px;
      }
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
