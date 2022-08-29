<template>
  <section class="about-section">
    <Banner :banner="banner" />

    <section id="profile">
      <div class="container mt-5">
        <div v-for="(alumni, i) in allAlumniStories" :key="i" class="row">
          <!-- Team item -->

          <div class="col-xl-4 col-md-6 mb-5 text-center">
            <div class="bg-white rounded shadow py-5 px-4 leftSide">
              <img
                :src="$config.baseURL + alumni.image"
                class="img-fluid mb-3 shadow"
              />
              <h5>{{ alumni.name }}</h5>
              <span>{{ alumni.occupation }}</span>
              <p>
                {{ alumni.designation }},
                <span class="university">University of Asia Pacific</span>
              </p>
              <p>Year of Graduation: {{ alumni.year_of_graduation }}</p>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item">
                  <a
                    :href="alumni.facebook"
                    target="_blank"
                    class="social-link shadow"
                  >
                    <i :class="'fab fa-facebook-square'"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a
                    :href="alumni.twitter"
                    target="_blank"
                    class="social-link shadow"
                  >
                    <i :class="'fab fa-twitter-square'"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a
                    :href="alumni.linkedin"
                    target="_blank"
                    class="social-link shadow"
                  >
                    <i :class="'fab fa-linkedin'"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a
                    :href="alumni.Instagram"
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
          <div class="col-xl-8 col-md-6 mb-5 pl-0">
            <div class="bg-white rounded shadow px-4 rightSide">
              <!-- With Read More Funtionality Start  -->
              <!-- <p
              v-if="toggle == false && profile.brief_intro"
              v-html="profile.brief_intro.slice(0, 900)"
            ></p>
            <p v-else v-html="profile.brief_intro"></p>
            <div style="text-align: right">
              <button class="primary-btn readmore" @click="toggle = !toggle">
                <span v-if="toggle == false">
                  <span class="plus">+</span> Read More</span
                >
                <span v-else> <span class="plus">-</span> Read Less</span>
              </button>
            </div> -->
              <!-- With Read More Funtionality End  -->
              <p v-html="alumni.brief_intro"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section id="alumni">
      <div class="container">
        <div class="main-alumni">
          <div class="row">
            <div
              v-for="(alumni, i) in alumniStories"
              :key="i"
              class="col-md-12 alumni-top"
            >
              <div class="row justify-content-around">
                <div
                  class="col-md-5 order-0 order-md-0 text-center text-md-start"
                >
                  <img
                    :src="$config.baseURL + alumni.image"
                    alt="alumni.title"
                    class="img-responsive img-fluid rounded-circle mb-3 img-thumbnail shadow-sm main-img"
                  />
                </div>
                <div class="col-md-7 order-2 order-md-1 py-sm-5">
                  <div
                    class="h-100 d-flex align-items-center text-center text-md-start"
                  >
                    <p class="mb-0 info" v-html="alumni.brief_intro"></p>
                  </div>
                </div>
                <div
                  class="col-lg-6 col-md-5 order-1 order-md-2 text-center text-md-start"
                >
                  <h4 class="mb-0 name text-center text-md-start">
                    {{ alumni.name }}
                  </h4>
                  {{ alumni.designation }},
                  {{ alumni.year_of_graduation }}
                  <div
                    class="col-sm-8 col-md-10 mx-sm-auto mx-md-0 col-lg-8 p-0 text-center text-md-start"
                  >
                    <p class="mb-0 title">{{ alumni.title }}</p>
                    <p class="mb-0 dept">{{ alumni.department }}</p>
                  </div>
                </div>

                <div class="col-md-6 order-3">
                  <div
                    class="d-flex h-100 align-items-center align-items-md-end flex-column bd-highlight justify-content-center"
                  >
                    <ul
                      class="nav ms-md-auto justify-content-center p-2 bd-highlight"
                    >
                      <li>
                        <a
                          class="nav-link"
                          :href="alumni.facebook"
                          target="_blank"
                        >
                          <img src="@/static/images/faculty/facebook.png"
                        /></a>
                      </li>
                      <li>
                        <a class="nav-link" :href="alumni.linkedin"
                          ><img src="@/static/images/faculty/linkedin.png"
                        /></a>
                      </li>
                      <li>
                        <a class="nav-link" :href="alumni.twitter"
                          ><img src="@/static/images/faculty/twitter.png"
                        /></a>
                      </li>
                      <li>
                        <a class="nav-link" :href="alumni.instagram"
                          ><img src="@/static/images/faculty/instagram.png"
                        /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '~/components/helpers/Banner.vue'

export default {
  components: {
    Banner,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('depAlumni/getAllAlumniStories', route.params.department)
    store.dispatch('depAlumni/alumniHeader', route.params.department)
  },
 

  computed: {
    ...mapGetters('depAlumni', ['allAlumniStories', 'banner']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#profile {
  .leftSide {
    height: 615px;
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
      height: 270px;
      width: 220px;
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
  .main-alumni {
    .alumni-top {
      padding: 100px 50px 40px 50px;
      @include respond-below(lg) {
        padding-top: 15px;
      }
      background-color: $background-color;
      margin-bottom: 30px;
      .row {
        .main-img {
          height: 270px;
          width: 270px;
          object-fit: content;
          @include respond-below(lg) {
            height: 240px;
            width: 240px;
            margin-top: 120px;
          }
        }
        .info {
          @include paragraph;
          text-align: justify;
          color: $text-color;
          @include respond-below(lg) {
            margin-top: 65px;
          }
        }
        .name {
          @include cardTitle;
          color: $deep-primary;
        }
        .title {
          color: $text-color;
          font-size: 14px;
        }
        .dept {
          color: #5c5c5c;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
