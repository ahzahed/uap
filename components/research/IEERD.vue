<template>
  <section id="researchIEERD">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="text_box_one">
            <p v-html="research.about_ieerd.text_box_one"></p>
          </div>
        </div>
        <!-- <div class="col-lg-12 mt-5">
          <div class="text_box_two">
            <p v-html="research.about_ieerd.text_box_two"></p>
          </div>
        </div> -->
        <div class="col-lg-12 mt-5">
          <div class="heading">
            <h1 class="text-center">Message from the Director</h1>
            <!-- <p class="text-center">{{ message.season }}</p> -->
          </div>
          <div class="text_box_three">
            <!-- <p class="descinline" v-html="message.details"></p> -->
            <!-- <p class="descempty" v-html="message.details"></p> -->
            <p
              v-if="toggle == false"
              v-html="research.about_ieerd.text_box_two.slice(0, 300)"
            ></p>

            <p v-else v-html="research.about_ieerd.text_box_two"></p>
            <div v-show="toggle == true" class="messageFrom mt-5"></div>
            <div style="text-align: right">
              <button class="primary-btn readmore" @click="toggle = !toggle">
                <span v-if="toggle == false">
                  <span class="plus">+</span> Read More</span
                >
                <span v-else> <span class="plus">-</span> Read Less</span>
              </button>
            </div>
          </div>
        </div>

        <div class="col-lg-12 mt-5">
          <div class="text_box_four">
            <div
              class="four_details"
              v-html="research.about_ieerd.text_box_three"
            ></div>
            <!-- <p ></p> -->
          </div>
        </div>

        <div class="col-lg-6 mt-5 m-auto">
          <div class="text_box_five">
            <h2>Latest Notice</h2>
            <!-- {{ research.about_ieerd_necessary_files }} -->
            <ul v-for="(item, i) in research.about_ieerd_notice_files" :key="i">
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
      <div class="row">
        <div class="col-lg-8 mt-5">
          <div class="text_box_three">
            <p
              v-if="toggle2 == false"
              v-html="research.about_ieerd.text_box_four.slice(0, 800)"
            ></p>

            <p v-else v-html="research.about_ieerd.text_box_four"></p>
            <div v-show="toggle2 == true" class="messageFrom mt-5"></div>
            <div style="text-align: right">
              <button class="primary-btn readmore" @click="toggle2 = !toggle2">
                <span v-if="toggle2 == false">
                  <span class="plus">+</span> Read More</span
                >
                <span v-else> <span class="plus">-</span> Read Less</span>
              </button>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mt-5 m-auto">
          <div class="text_box_five">
            <h2>Necessary downloadable Documents</h2>
            <!-- {{ research.about_ieerd_necessary_files }} -->
            <ul
              v-for="(item, i) in research.about_ieerd_necessary_files"
              :key="i"
            >
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

      <div class="row">
        <div class="col-lg-6 mt-5">
          <div class="text_box_one">
            <p v-html="research.about_ieerd.text_box_five"></p>
          </div>
        </div>
        <div class="col-lg-6 mt-5">
          <div class="text_box_two">
            <p v-html="research.about_ieerd.text_box_six"></p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8 mt-5 m-auto">
          <div
            class="bg-white rounded shadow py-5 px-4 socialSection text-center"
          >
            <h2>UAP Research Profile</h2>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item">
                <a
                  :href="research.facebook"
                  target="_blank"
                  class="social-link shadow"
                >
                  <i :class="'fab fa-facebook-square'"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a
                  :href="research.twitter"
                  target="_blank"
                  class="social-link shadow"
                >
                  <i :class="'fab fa-twitter-square'"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a
                  :href="research.linkedin"
                  target="_blank"
                  class="social-link shadow"
                >
                  <i :class="'fab fa-linkedin'"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a
                  :href="research.Instagram"
                  target="_blank"
                  class="social-link shadow"
                >
                  <i :class="'fab fa-instagram-square'"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 mt-5">
          <div
            class="text_box_one"
            v-html="research.about_ieerd.text_box_seven"
          ></div>
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
      toggle2: false,
      
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
  .text_box_four {
    background-color: $gray;
    padding: 92px 111px;
    text-align: justify;
    .four_details::-webkit-scrollbar {
      width: 10px;
      color: red;
    }
    .four_details::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 60px;
      background-color: #f5f5f5;
    }
    .four_details::-webkit-scrollbar-thumb {
      border-radius: 60px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: $darkblue;
    }
    .four_details {
      width: 100%;
      overflow-x: scroll;
    }
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

  .socialSection {
    .social-link {
      width: 40px;
      height: 40px;
      border: 1px solid #ddd;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666;
      border-radius: 5px;
      transition: all 0.3s;
      font-size: 30px;
      .fa-facebook-square {
        color: #0778e9;
      }
      .fa-twitter-square {
        color: #1d9bf0;
      }
      .fa-linkedin {
        color: #0073b2;
      }
      .fa-instagram-square {
        color: #c13584;
      }
    }

    .social-link:hover,
    .social-link:focus {
      background: #ddd;
      text-decoration: none;
      color: #555;
    }
  }
  .descinline {
    display: inline;
  }
  .descempty {
    display: none;
  }
  .text_box_three {
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
    .readmore {
      border-radius: 5px;
      //   text-align: right;
      padding: 11px 22px;
      cursor: pointer;
    }
  }
  .messageFrom {
    display: flex;
    flex-direction: row;
    @include respond-below(xs) {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
