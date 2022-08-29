<template>
  <section id="resourceJournal">
    <div class="container">
      <h4>
        The following are the list of Journals published by various departments
        of UAP.
      </h4>
      <div class="row">
        <div class="col-lg-12">
          <div class="text_box_one">
            <p v-html="value.journals.text_box_one"></p>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="text_box_two">
            <p v-html="value.journals.text_box_two"></p>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="text_box_one">
            <p v-html="value.journals.text_box_three"></p>
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
#resourceJournal {
  margin-top: 104px;
  margin-bottom: 104px;
  h4 {
    @include title2;
    color: white;
    padding: 20px;
    background: $darkblue;
    margin-bottom: 0px;
  }
  .text_box_one {
    background-color: $gray;
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
  .text_box_two {
    background-color: $background-color;
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
