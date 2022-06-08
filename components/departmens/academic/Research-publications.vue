<template>
  <section id="research-publication">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div id="accordionExample" class="accordion">
            <div
              v-for="(item, i) in accolades"
              :key="i"
              class="accordion-item shadow mt-1"
            >
              <h2 id="headingOne" class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  @click="
                    () => {
                      accoladingSlide(item.id)
                      show = !show
                    }
                  "
                >
                  <span class="w-100 text-center">{{
                    item.research_and_publication_year
                  }}</span>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                :class="show && item.id == showindex ? 'show' : ''"
              >
                <div class="px-5 mx-md-5 my-5">
                  <div v-html="item.research_and_publication_description"></div>
                  <!-- <ul
                    v-for="(info, j) in item.details"
                    :key="j"
                    class="ps-0 mb-4"
                  >
                    <li>
                      <h4 class="title1 mb-0">{{ info.title1 }}</h4>
                      <p class="my-3">{{ info.desc }}</p>
                    </li>
                  </ul> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    accolades: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      show: true,
      showindex: 1,
    }
  },
  methods: {
    accoladingSlide(i) {
      this.showindex = i
      this.show = !this.show
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#research-publication {
  padding-top: $section-padding;
  padding-bottom: $section-padding;
  .accordion-item {
    border-radius: 5px;

    h1 {
      @include title;
      font-weight: bold;
      color: $darkblue;
    }
    button {
      @include title2;
      color: $light-gray;
      background-color: $background-color;
      padding: 49px 66px;
      @include respond-below(sm) {
        padding: 15px;
      }
    }
    ul {
      list-style-type: disc !important;
      h4 {
        @include title3;
        text-align: justify;
        color: $text-color;
      }
      p {
        @include paragraph2;
        font-weight: 300;
        text-align: justify;
        color: $text-color;
      }
    }
  }
}
</style>
