<template>
  <section id="professor">
    <!-- <p>{{ designation_wise_member }}</p> -->
    <div class="container mt-5">
      <div class="row justify-content-start">
        <div
          v-for="(professor, i) in designation_wise_member"
          :key="i"
          class="col-lg-6 d-flex"
        >
          <div class="card profile-card mb-5 mx-auto">
            <div class="row g-0">
              <div class="col-sm-4 img-top">
                <img :src="professor.profile" class="main-img" alt="..." />
              </div>
              <div class="col-sm-8 main-info">
                <div
                  class="card-body d-flex flex-column justify-content-center ps-5 card-top"
                >
                  <h5 class="mb-0">{{ professor.name }}</h5>
                  <p class="mb-1">{{ professor.designation }}</p>
                  <div>
                    <ul class="nav mb-2">
                      <li
                        v-show="professor && professor.facebook"
                        class="nav-item"
                      >
                        <a
                          class="nav-link"
                          style="cursor: pointer"
                          :href="professor.facebook"
                          target="_blank"
                        >
                          <img src="@/static/images/faculty/facebook.png"
                        /></a>
                      </li>
                      <li
                        v-show="professor && professor.linkedin"
                        class="nav-item"
                      >
                        <a
                          class="nav-link"
                          style="cursor: pointer"
                          :href="professor.linkedin"
                          target="_blank"
                        >
                          <img src="@/static/images/faculty/twitter.png"
                        /></a>
                      </li>
                      <li
                        v-show="professor && professor.twitter"
                        class="nav-item"
                      >
                        <a
                          class="nav-link"
                          style="cursor: pointer"
                          :href="professor.twitter"
                          target="_blank"
                        >
                          <img src="@/static/images/faculty/linkedin.png"
                        /></a>
                      </li>
                      <li
                        v-show="professor && professor.Instagram"
                        class="nav-item"
                      >
                        <a
                          class="nav-link"
                          style="cursor: pointer"
                          :href="professor.Instagram"
                          target="_blank"
                        >
                          <img src="@/static/images/faculty/instagram.png"
                        /></a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <nuxt-link
                      :to="{
                        path: `/${$nuxt.$route.params.department}/faculty_member`,
                        query: {
                          designation: professor.category.slug,
                          id: professor.faculty_id,
                        },
                      }"
                      class="primary-btn readmore"
                    >
                      <span class="plus">+</span> Read More
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination />
  </section>
</template>

<script>
// import Pagination from '../../helpers/Pagination.vue'
import { mapGetters } from 'vuex'
export default {
  // components: { Pagination },
  // props: {
  //   headList: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  asyncData({ route, store }) {
    store.dispatch('faculty/getDesignationWiseMember', route.params)
  },
  data() {
    return {
      socalicons: [
        { img: require('../../../static/images/faculty/facebook.png') },
        { img: require('../../../static/images/faculty/twitter.png') },
        { img: require('../../../static/images/faculty/linkedin.png') },
        { img: require('../../../static/images/faculty/instagram.png') },
      ],
    }
  },

  computed: {
    ...mapGetters('faculty', ['designation_wise_member']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#professor {
  .profile-card {
    box-shadow: 0 0 6px 2px rgba(131, 131, 131, 0.25);
    border: none;
    width: 100%;
    flex: 0 0 100%;
    justify-content: center;
    // border: 1px solid #ebebeb;
    background-color: #fff;
    @include respond-below(sm) {
      max-width: 300px !important;
    }
    .img-top {
      // box-shadow: 0 22px 40px 0 rgba(57, 192, 237, 0.2);
      .main-img {
        width: 100%;
        height: auto;
        max-height: 300px;
        overflow: hidden;
        border-radius: 6px;
        object-fit: cover;
        object-position: top;
      }
    }

    .main-info {
      // background-color: $background-color;
      display: flex;
      justify-content: start;
      align-items: center;
      .card-top {
        row-gap: 0px;
        @include respond-below(lg) {
          row-gap: 2px;
        }
        h5 {
          font-size: 12px;
          @include cardTitle;
          @include respond-below(xl) {
            font-size: 16px;
          }
        }
        p {
          @include cardPara;
          @include respond-below(xl) {
            font-size: 14px;
          }
        }
        ul {
          li {
            .icon img {
              @include respond-below(lg) {
                height: 10px;
                width: 10px;
                &:first-child {
                  height: 10px;
                }
              }
            }
          }
        }
      }
    }
    .readmore {
      @include paragraph;
      @include respond-below(lg) {
        font-size: 17px;
      }
      font-weight: 500;
      border-radius: 5px;
      padding: 5px 7px;
      cursor: pointer;
      .plus {
        height: 22px;
        width: 22px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 2px solid $white;
      }
      &:hover {
        .plus {
          border-color: $darkblue;
        }
      }
    }
  }
}
</style>
