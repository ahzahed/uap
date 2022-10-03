<template>
  <section id="banner">
    <div class="banner-section">
      <div class="banner-image">
        <img :src="banner.image" :alt="banner.title" class="img-responsive" />
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div
            :style="{
              backgroundColor: banner.bg_color,
            }"
            class="banner-content col-md-8"
          >
            <div class="text-center">
              <img :src="banner.thumbnail" alt="" class="logo img-responsive" />
            </div>
            <h2 class="banner-content-title text-center">{{ banner.title }}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    banner: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#banner {
  margin-bottom: $section-padding;
  .banner-section {
    .banner-image {
      img {
        height: 530px;
        @include respond-above(xml) {
          width: 100%;
        }
      }
    }
    position: relative;
    .container {
      .banner-content {
        // background: red;
        // color: $white;
        padding: 50px;
        margin-top: -467px;
        height: 400px;
        border-radius: 5px;
        border: 2px solid $text-color;
        z-index: 1;
        @include respond-below(lg) {
          padding: 25px;
        }
        .banner-content-title {
          @include title;

          // margin-bottom: 30px;
        }
        .logo {
          height: 180px;
          width: 180px;
        }
      }
    }
  }
}
</style>
