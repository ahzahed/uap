<template>
  <section id="resourceJournal">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="text_box_one">
            <p v-html="value.news_letter.text_box_four"></p>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="text_box_five">
            <h2>Select and Download Newsletter (pdf)</h2>
            <!-- {{ research.about_ieerd_necessary_files }} -->
            <ul v-for="(item, i) in value.news_letter_file" :key="i">
              <li>
                <a
                  :href="$config.baseURL + item.file"
                  target="_blank"
                  class="nav-link"
                  >{{ item.file_title }}</a
                >
              </li>
              <hr />
            </ul>
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
  .text_box_five {
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    min-height: 380px;

    @include respond-below(lg) {
      margin-top: 20px;
    }
    h2 {
      @include title2;
      padding: 25px;
      background-color: $background-color;
      border-radius: 5px;
      @include respond-below(xs) {
        text-align: center;
        padding-left: 0px;
      }
    }
  }
}
</style>
