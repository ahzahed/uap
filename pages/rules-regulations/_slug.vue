<template>
  <section id="allFaq">
    <div class="container">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-10">
          <div id="accordionExample" class="accordion">
            <div
              v-for="(item, i) in rulesList.rule_and_regulations"
              :key="i"
              class="accordion-item"
            >
              <h3 id="headingOne" class="accordion-header">
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
                  {{ item.title }}
                </button>
              </h3>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                :class="show && item.id == showindex ? 'show' : ''"
              >
                <div class="accordion-body">
                  <p v-html="item.description"></p>
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
// eslint-disable-next-line no-unused-vars
import { mapGetters } from 'vuex'
export default {
  name: '',
  asyncData({ route, store }) {
    store.dispatch('rules/getRulesList', route.query.id)
  },
  data() {
    return {
      show: true,
      showindex: 1,
    }
  },
  computed: {
    ...mapGetters('rules', ['rulesList']),
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
@import './styles/_members.scss';
#allFaq {
  padding-top: 50px;
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
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 98px;
    @include respond-below(sm) {
      padding: 20px;
    }
    @include respond-below(xsl) {
      padding: 10px;
    }
  }
}
</style>
