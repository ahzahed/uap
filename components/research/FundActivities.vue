<template>
  <section id="researchIEERD">
    <div class="container">
      <div class="col-lg-6 mt-5 m-auto">
        <h2>IEERD Policies</h2>
        <div class="text_box_five">
          <ul
            v-for="(item, i) in research.research_funded_activites_files"
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
  </section>
</template>

<script>
export default {
  props: {
    research: {
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
#researchIEERD {
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

  .text_box_five::-webkit-scrollbar {
    width: 10px;
    height: 100px;
    color: red;
  }
  .text_box_five::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 60px;
    background-color: #f5f5f5;
  }
  .text_box_five::-webkit-scrollbar-thumb {
    border-radius: 60px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: $darkblue;
  }

  .text_box_five {
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    height: 380px;
    overflow-y: scroll;
    @include respond-below(lg) {
      margin-top: 20px;
    }
  }
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
}
</style>
