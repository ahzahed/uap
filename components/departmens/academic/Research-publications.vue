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
                  :class="show && item.id == showindex ? '' : 'collapsed'"
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
                <!-- <div class="px-5 mx-md-5 my-5">
                  <div v-html="item.research_and_publication_description"></div>
                </div> -->
                <div class="accordion-body">
                  <p v-html="item.research_and_publication_description"></p>
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

  p {
    padding: 50px;

    @include respond-below(lg) {
      padding: 10px;
    }
  }
}
</style>
