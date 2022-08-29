<template>
  <section v-show="value.length > 0" id="researchIntro">
    <div class="container">
      <div v-for="(item, i) in value" :key="i" class="row">
        <div class="col-lg-12">
          <div class="text_box_one">
            <h3>{{ item.title }}</h3>
            <div v-html="item.description"></div>
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
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      toggle: false,
      
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#researchIntro {
  margin-top: 40px;

  .heading {
    background-color: $darkblue;
    padding-top: 23px;
    padding-bottom: 23px;
    border-radius: 5px;
    h1 {
      @include title2;
      margin-bottom: 0px;
      color: $white;
    }
    p {
      color: $white;
      @include paragraph;
    }
  }

  .text_box_one {
    background-color: $lightblue;
    padding: 92px 111px;
    text-align: justify;
    @include respond-below(lg) {
      padding: 80px 70px;
    }
    @include respond-below(sm) {
      padding: 40px 30px;
    }
    @include paragraph;
  }
}
</style>
