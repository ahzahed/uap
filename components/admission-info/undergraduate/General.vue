<template>
  <section id="general">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-10 mx-auto">
          <h5 class="text-center top-text">General Info</h5>
          <!-- <div v-for="(information, i) in generalInformations" :key="i"> -->
          <!-- <p class="details">{{ information.info }}</p> -->
          <p class="details" v-html="generalInformations.general_info"></p>
          <!-- </div> -->
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
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_main.scss';

#general {
  .container {
    .top-text {
      // margin-top: 70px;
      margin-bottom: 70px;
      @include title;
      text-align: justify;
    }
    .details {
      @include paragraph;
      text-align: justify;
      color: $text-color;
    }
  }
}
</style>
