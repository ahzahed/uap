<template>
  <section id="banner">
    <div class="banner-section">
      <div class="banner-image">
        <img :src="banner.image" :alt="banner.title" />
      </div>
      <div class="container">
        <div class="banner-content col-md-6">
          <h2 class="banner-content-title">{{ banner.title }}</h2>
          <p v-html="banner.description || banner.simple_text"></p>
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
  .banner-section {
    .banner-image {
      img {
        @include respond-above(xml) {
          width: 100%;
        }
      }
    }
    position: relative;
    .container {
      .banner-content {
        background: $darkblue;
        color: $white;
        // padding: 50px;
        // text-align: center;
        border-radius: 5px;
        z-index: 9;
        @include respond-below(lg) {
          padding: 25px;
        }

        .banner-content-title {
          @include title;
          font-size: 32px;
          // margin-bottom: 30px;
        }
        @media (max-width: 768px) {
          .banner-content-title {
            font-size: 25px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
