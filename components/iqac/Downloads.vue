/* eslint-disable vue/no-v-html */
<template>
  <section id="iqacdownload">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-6 col-md-6 mb-3">
          <h2>Downloadable Documents Format</h2>
          <div class="waitingResult pt-4 shadow-sm">
            <ul v-for="(item, i) in value.download_doc_format" :key="i">
              <li>
                <a :href="$config.baseURL + item.file">{{ item.file_title }}</a>
              </li>
              <hr />
            </ul>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 mb-3">
          <h2>External Peer Review Reports</h2>
          <div class="waitingResult pt-4 shadow-sm">
            <ul v-for="(item, i) in value.external_peer" :key="i">
              <li>
                <a :href="$config.baseURL + item.link">{{
                  item.report_title
                }}</a>
              </li>
              <hr />
            </ul>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 mb-3">
          <h2>Downloadable Documents Bloom</h2>
          <div class="waitingResult pt-4 shadow-sm">
            <ul v-for="(item, i) in value.download_doc_bloom" :key="i">
              <li>
                <a :href="$config.baseURL + item.file">{{ item.file_title }}</a>
              </li>
              <hr />
            </ul>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 mb-3">
          <h2>Downloadable Documents Learning</h2>
          <div class="waitingResult pt-4 shadow-sm">
            <ul v-for="(item, i) in value.download_doc_learning" :key="i">
              <li>
                <a :href="$config.baseURL + item.file">{{ item.file_title }}</a>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>

    <section id="allFaq">
      <div class="container">
        <div class="row">
          <div class="col-lg-1"></div>
          <div class="col-lg-10">
            <div id="accordionExample" class="accordion">
              <div
                v-for="(item, i) in value.fqa"
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
                    :class="show && item.id == showindex ? '' : 'collapsed'"
                    @click="
                      () => {
                        accoladingSlide(item.id)
                        show = !show
                      }
                    "
                  >
                    {{ item.faq_title }}
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
#iqacdownload {
  margin-bottom: 104px;
  h1 {
    @include title;
    margin-bottom: 38px;
  }
  p {
    @include paragraph;
  }
  ul {
    padding: 0;
    li {
      padding-left: 50px;
      @include cardPara;
      color: rgba(18, 102, 241, 0.75);

      @include respond-below(xs) {
        padding-left: 15px;
      }
    }
  }
  hr {
    margin: 0px 50px;
    color: $darkblue;
    @include respond-below(xs) {
      margin: 0px 15px;
    }
  }
  h2 {
    @include title3;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: $background-color;
    // border-radius: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-bottom: 0px;
  }

  .finalResult::-webkit-scrollbar {
    width: 10px;
    height: 100px;
    color: red;
  }
  .finalResult::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 60px;
    background-color: #f5f5f5;
  }
  .finalResult::-webkit-scrollbar-thumb {
    border-radius: 60px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: $darkblue;
  }

  .finalResult,
  .waitingResult {
    // border-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    // box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    height: 280px;
    overflow-y: scroll;
  }

  #allFaq {
    padding-top: 50px;
    // padding-bottom: $section-padding;
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
}
</style>
