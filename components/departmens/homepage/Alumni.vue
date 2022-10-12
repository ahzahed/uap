<template>
  <section id="alumni">
    <div class="container">
      <div class="text-center mb-lg-5 pb-5">
        <h4 class="mb-lg-5 top-text">Alumni Stories</h4>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div
          v-for="(alumni, i) in alumniInformation"
          :key="i"
          class="col main-card-cover p-3"
        >
          <div class="main-card h-100 shadow">
            <div class="card-top">
              <div class="d-flex justify-content-center img-top mb-4">
                <img
                  :src="$config.baseURL + alumni.image"
                  alt="alumni.name"
                  class="img-fluid rounded-circle"
                />
              </div>
              <div
                class="h-100 text-top d-flex justify-content-center text-center"
              >
                <div class="ms-3 py-2 info">
                  <h4 class="mb-0">{{ alumni.name }}</h4>
                  <p class="card-text title my-1">
                    {{ alumni.occupation }}
                  </p>
                  <small class="date mb-0"
                    >Year Of Graduation: {{ alumni.year_of_graduation }}</small
                  >
                  <div class="text-center my-4">
                    <div
                      class="primary-btn calculator-btn"
                      style="cursor: pointer"
                      @click="showModal(alumni)"
                    >
                      Learn More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="d-flex align-items-center justify-content-center text-center my-3"
      >
        <nuxt-link
          :to="'/' + $route.params.department + '/alumni'"
          class="primary-btn calculator-btn"
          >See More</nuxt-link
        >
      </div>
    </div>
    <!-- Modal Start -->
    <ModalScroll
      v-show="isModalVisible"
      model-class="modal-dialog modal-dialog-centered"
      model-width="800px"
      @close="closeModal"
    >
      <template #body>
        <section id="profile">
          <div class="container mt-5">
            <div class="row">
              <!-- Team item -->
              <div class="col-lg-12 col-md-12 mb-5 text-center">
                <div class="bg-white rounded shadow py-5 px-4 leftSide">
                  <img
                    :src="$config.baseURL + singleNewsDetails.image"
                    class="img-fluid mb-3 shadow"
                  />
                  <h5>{{ singleNewsDetails.name }}</h5>
                  <span>{{ singleNewsDetails.occupation }}</span>
                  <p>
                    {{ singleNewsDetails.designation }},
                    <span class="university">University of Asia Pacific</span>
                  </p>
                  <p>
                    Year of Graduation:
                    {{ singleNewsDetails.year_of_graduation }}
                  </p>
                  <ul class="social mb-0 list-inline mt-3">
                    <li
                      v-show="singleNewsDetails.facebook"
                      class="list-inline-item"
                    >
                      <a
                        :href="singleNewsDetails.facebook"
                        target="_blank"
                        class="social-link shadow"
                      >
                        <i :class="'fab fa-facebook-square'"></i
                      ></a>
                    </li>
                    <li
                      v-show="singleNewsDetails.twitter"
                      class="list-inline-item"
                    >
                      <a
                        :href="singleNewsDetails.twitter"
                        target="_blank"
                        class="social-link shadow"
                      >
                        <i :class="'fab fa-twitter-square'"></i
                      ></a>
                    </li>
                    <li
                      v-show="singleNewsDetails.linkedin"
                      class="list-inline-item"
                    >
                      <a
                        :href="singleNewsDetails.linkedin"
                        target="_blank"
                        class="social-link shadow"
                      >
                        <i :class="'fab fa-linkedin'"></i
                      ></a>
                    </li>
                    <li
                      v-show="singleNewsDetails.Instagram"
                      class="list-inline-item"
                    >
                      <a
                        :href="singleNewsDetails.Instagram"
                        target="_blank"
                        class="social-link shadow"
                      >
                        <i :class="'fab fa-instagram-square'"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- End -->
              <div class="col-lg-12 col-md-12 mb-5">
                <div class="bg-white rounded shadow py-5 px-4 rightSide">
                  <p v-html="singleNewsDetails.brief_intro"></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </template>
      <template #footer>
        <div class="modal-footer">
          <button
            class="btn btn-primary"
            data-bs-target="#exampleModalToggle"
            data-bs-toggle="modal"
            @click="closeModal()"
          >
            Close
          </button>
        </div>
      </template>
    </ModalScroll>
  </section>
</template>

<script>
import ModalScroll from '@/components/helpers/ModalScroll.vue'
export default {
  components: { ModalScroll },
  props: {
    alumniInformation: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      singleNewsDetails: '',
      isModalVisible: false,
    }
  },
  methods: {
    // Modal
    showModal(slug) {
      // this.$store.dispatch('home/getSingleNewsBySlug', slug).then((res) => {
      this.singleNewsDetails = slug
      this.isModalVisible = true
      // })
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#profile {
  .leftSide {
    // height: 615px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h5 {
      @include title2;
    }
    span {
      @include paragraph;
      font-weight: normal;
      margin-bottom: 10px;
    }
    p {
      @include paragraph;
    }
    img {
      height: 415px;
      width: 415px;
      border-radius: 5px;
    }
    .university {
      color: rgba(18, 102, 241, 0.75);
    }
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

  .rightSide::-webkit-scrollbar {
    width: 10px;
    height: 100px;
    color: red;
  }
  .rightSide::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 60px;
    background-color: #f5f5f5;
  }
  .rightSide::-webkit-scrollbar-thumb {
    border-radius: 60px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: $darkblue;
  }

  .rightSide {
    height: 615px;
    overflow-y: scroll;
    padding: 25px 35px;
    h3 {
      @include cardTitle;
    }
    h4 {
      @include cardTitle;
      color: $text-color;
      font-weight: 500;
      font-style: italic;
    }
    p {
      @include paragraph;
    }
  }
  .contact {
    h3 {
      @include cardTitle;
    }
    h5 {
      @include cardPara;
      font-weight: 600;
      padding-left: 25px;
    }
    p {
      font-size: 14px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      padding-left: 25px;
    }
  }
}

#alumni {
  margin-top: $section-padding;
  margin-bottom: $section-padding;
  .top-text {
    @include title;
    color: $text-color;
  }
  .main-card-cover {
    @include respond-below(lg) {
      margin-top: 100px;
    }
    //breakpoint mt-100
    &:nth-child(n + 1) {
      --shadowColor: #80daff;
      --bg: #e1f2f9;
    }
    &:nth-child(n + 2) {
      --shadowColor: #42f98b;
      --bg: #e6fff0;
    }
    &:nth-child(n + 3) {
      --shadowColor: #e7a934;
      --bg: #eae1d0;
    }
  }
  .main-card {
    background: var(--bg);
    .card-top {
      .img-top {
        // --shadowColor:#80daff;
        img {
          height: 270px;
          width: 270px;
          margin-top: -100px;
          box-shadow: -8px 0px 0px var(--shadowColor);
        }
      }
      position: relative;
      .serial {
        position: absolute;
        top: 10px;
        right: 10px;
        color: $white;
        .event-btn {
          background-color: $darkblue;
          padding: 11px 9px 11px 9px;
          @include paragraph1;
        }
      }
      .info {
        h4 {
          @include title3;
          font-weight: 600;
          color: $darkblue;
        }
        .title {
          color: $text-color;
          @include paragraph2;
        }
        .date {
          color: $text-color;
          @include paragraph2;
          font-weight: 500;
        }
        .calculator-btn {
          @include title3;
          display: inline-block;
          text-align: center;
          width: 150px;
          margin: 0 auto;
          padding: 11px 10px;
          color: $white !important;
          background: $darkblue;
          &:hover {
            color: $darkblue !important;
            background: $white;
          }
        }
      }
      .text-top {
      }
    }
  }
}
</style>
