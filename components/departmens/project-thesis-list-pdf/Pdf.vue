<template>
  <section id="projectThesisPdf">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-12">
          <h3 class="text-center">Spring 2021</h3>
          <div class="pdfImage">
            <img :src="img" alt="" />
            <button class="pink-btn mt-5">
              Download <i class="fas fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      img: require('@/static/pdf/pdf.png'),
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
    button {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
