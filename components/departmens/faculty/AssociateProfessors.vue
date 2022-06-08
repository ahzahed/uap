<template>
  <section id="professor">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div v-for="(professor, i) in associateList" :key="i" class="col-md-6">
          <div
            class="card profile-card mb-5 mx-auto shadow-sm"
            style="max-width: 540px"
          >
            <div class="row g-0">
              <div class="col-sm-4 img-top">
                <img
                  :src="professor.img"
                  class="main-img w-100 h-100"
                  alt="..."
                />
              </div>
              <div class="col-sm-8 main-info">
                <div
                  class="card-body d-flex flex-column justify-content-center ps-5 ps-md-3 ps-lg-5 ms-2 ms-lg-3 h-100 card-top"
                >
                  <h5 class="mb-0">{{ professor.name }}</h5>
                  <p class="mb-0">{{ professor.designation }}</p>
                  <div>
                    <ul class="nav">
                      <li
                        v-for="(item, j) in socalicons"
                        :key="j"
                        class="nav-item"
                      >
                        <nuxt-link class="nav-link p-1 icon" to=""
                          ><img :src="item.img"
                        /></nuxt-link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <button class="primary-btn readmore">
                      <span class="plus">+</span> Read More
                    </button>
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
import Pagination from '../../helpers/Pagination.vue'
export default {
  components: { Pagination },
  props: {
    associateList: {
      type: Array,
      required: true,
    },
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
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#professor {
  .profile-card {
    // box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    border: none;
    @include respond-below(sm) {
      max-width: 300px !important;
    }
    .img-top {
      // box-shadow: 0 22px 40px 0 rgba(57, 192, 237, 0.2);
      .main-img {
        border-radius: 5px;
      }
    }

    .main-info {
      background-color: $background-color;

      .card-top {
        row-gap: 10px;
        @include respond-below(lg) {
          row-gap: 2px;
        }
        h5 {
          @include cardTitle;
          @include respond-below(lg) {
            font-size: 19px;
          }
        }
        p {
          @include cardPara;
          @include respond-below(lg) {
            font-size: 16px;
          }
        }
        ul {
          li {
            .icon img {
              @include respond-below(lg) {
                hight: 15px;
                width: 18px;
                &:first-child {
                  height: 18px;
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
