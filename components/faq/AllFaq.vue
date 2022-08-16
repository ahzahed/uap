/* eslint-disable vue/require-default-prop */
<template>
  <section id="allFaq">
    <div class="container">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-10">
          <h1>FAQ</h1>
          <div id="accordionExample" class="accordion">
            <div v-for="(item, i) in faqs" :key="i" class="accordion-item">
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
                  {{ item.title }}
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                :class="show && item.id == showindex ? 'show' : ''"
              >
                <div class="accordion-body">
                  <p v-html="item.faq_description"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-1"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    faqs: {
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
      // setTimeout(() => {
      //   this.show = !this.show
      // }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#allFaq {
  padding-top: $section-padding;
  padding-bottom: $section-padding;
  h1 {
    @include title;
    font-weight: bold;
    color: $darkblue;
  }
  button {
    @include title2;
    color: $light-gray;
    background-color: $lightblue;
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
