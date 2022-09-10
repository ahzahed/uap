<template>
  <section id="downloadFormSample">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mt-5">
          <div class="finalResult">
            <h2>Download forms</h2>
            <ul v-for="(item, i) in value.download_form" :key="i">
              <li style="list-style-type: none">
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

        <div class="col-lg-6 mt-5">
          <div class="finalResult">
            <h2>Sample of Authorization Letters</h2>
            <ul
              v-for="(item, i) in value.sample_authorization_letters"
              :key="i"
            >
              <li style="list-style-type: none">
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

  data() {
    return {
      toggle: false,
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#downloadFormSample {
  margin-top: 104px;
  margin-bottom: 104px;
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

  .finalResult,
  .waitingResult {
    h2 {
      @include title2;
      padding-left: 85px;
      padding-top: 25px;
      padding-bottom: 25px;
      background-color: $background-color;
      border-radius: 5px;
      @include respond-below(xs) {
        text-align: center;
        padding-left: 0px;
      }
    }
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    @include respond-below(lg) {
      margin-top: 20px;
    }
  }
}
</style>