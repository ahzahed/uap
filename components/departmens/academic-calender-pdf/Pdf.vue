<template>
  <section id="projectThesisPdf">
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-12">
          <h3 class="text-center">{{ file.file_title }}</h3>
          <div class="pdfImage">
            <img :src="$config.baseURL + file.file" alt="" />
            <a
              class="pink-btn btn mt-5"
              :href="$config.baseURL + file.file"
              target="_blank"
            >
              Download <i class="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    file: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      img: require('@/static/pdf/academic.png'),
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#projectThesisPdf {
  h3 {
    @include title2;
    font-weight: 600;
    background-color: $background-color;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 0px;
  }
  .pdfImage {
    background-color: $thistle;
    display: block;
    text-align: center;

    padding-top: 100px;
    padding-bottom: 100px;
    a {
      display: block;
      width: 250px;
      margin: 0 auto;
    }
  }
}
</style>
