<template>
  <section id="undergraduate">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="heading text-center mt-5">
            <h1>{{ value.criteria.title }}</h1>
            <p>Please read the below conditions carefully</p>
          </div>
          <div class="lists">
            <div v-html="value.criteria.description"></div>
          </div>
          <div class="note text-center">
            <p>{{ value.criteria.short_note }}</p>
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
#undergraduate {
  .heading {
    border: 2px solid #2d368e;
    padding: 62px 0px;
    border-radius: 5px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    h1 {
      @include title;
      color: #2f2e41;
    }
    p {
      @include paragraph;
      font-weight: 500 !important;
      color: $darkblue;
    }
  }
  .lists {
    background: $background-color;
    padding: 155px 115px 92px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    @include respond-below(md) {
      padding: 35px;
    }
    @include respond-below(xs) {
      padding: 20px;
    }
    ul {
      list-style-type: disc;
      @include paragraph;
    }
  }
  .note {
    padding: 51px 191px;
    border-radius: 5px;
    border: 2px solid #2d368e;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    margin-bottom: 150px;
    @include respond-below(md) {
      padding: 35px;
    }
    @include respond-below(xs) {
      padding: 20px;
    }
    p {
      @include paragraph;
      font-weight: 500 !important;
      color: $deep-primary;
    }
  }
}
</style>
