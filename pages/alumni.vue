<template>
  <section class="about-section">
    <Banner :banner="banner" />

    <section id="alumni">
      <div class="container">
        <div class="main-alumni">
          <div class="row">
            <div v-for="(alumni, i) in 5" :key="i" class="col-md-12 alumni-top">
              <div class="row justify-content-around">
                <!-- < class="d-flex "> -->
                <div
                  class="col-md-5 order-0 order-md-0 text-center text-md-start"
                >
                  <img
                    :src="alumni.img"
                    alt="alumni.title"
                    class="img-responsive img-fluid rounded-circle mb-3 img-thumbnail shadow-sm main-img"
                  />
                </div>
                <div class="col-md-7 order-2 order-md-1 py-sm-5">
                  <div
                    class="h-100 d-flex align-items-center text-center text-md-start"
                  >
                    <p class="mb-0 info">{{ alumni.info }}</p>
                  </div>
                </div>
                <div
                  class="col-lg-6 col-md-5 order-1 order-md-2 text-center text-md-start"
                >
                  <h4 class="mb-0 name text-center text-md-start">
                    {{ alumni.name }}
                  </h4>
                  <div
                    class="col-sm-8 col-md-10 mx-sm-auto mx-md-0 col-lg-8 p-0 text-center text-md-start"
                  >
                    <p class="mb-0 title">{{ alumni.title }}</p>
                    <p class="mb-0 dept">{{ alumni.dept }}</p>
                  </div>
                </div>

                <div class="col-md-6 order-3">
                  <div
                    class="d-flex h-100 align-items-center align-items-md-end flex-column bd-highlight justify-content-center"
                  >
                    <ul
                      class="nav ms-md-auto justify-content-center p-2 bd-highlight"
                    >
                      <li
                        v-for="(item, i) in socalicons"
                        :key="i"
                        class="nav-item"
                      >
                        <nuxt-link class="nav-link" to=""
                          ><img :src="item.img"
                        /></nuxt-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'

export default {
  components: {
    Banner,
  },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('admission/admissionBanner')
  },
  data() {
    return {
      banner: {
        img: require('@/static/comittee.png'),
        title: 'Alumnai Stories',
        details: '',
      },
      alumniInformation: [
        {
          name: 'Dr. Shantanu Chakraborty',
          title: 'Vice Chancellor (Acting)',
          dept: 'Department of Computer Science and Engineering, University of Asia Pacific',
          img: require('@/static/BOD/sutan_adminpage.jpg'),
          info: 'In terms of its mission of enhancing opportunities of higher education, UAP has now become a well-recognized academia at home and abroad. During these years of nearly two and half decades, our growth and transformation were measured and steered to match world class learning experience that our boys and girls, and their parents aspire. Within the limits of growing demands, we are providing to our students and faculty members the best possible environment conducive to embed our vision of excellence in UAP’s academic programs.',
        },
        {
          name: 'Dr. Shantanu Chakraborty',
          title: 'Vice Chancellor (Acting)',
          dept: 'Department of Computer Science and Engineering, University of Asia Pacific',
          img: require('@/static/BOD/sutan_adminpage.jpg'),
          info: 'In terms of its mission of enhancing opportunities of higher education, UAP has now become a well-recognized academia at home and abroad. During these years of nearly two and half decades, our growth and transformation were measured and steered to match world class learning experience that our boys and girls, and their parents aspire. Within the limits of growing demands, we are providing to our students and faculty members the best possible environment conducive to embed our vision of excellence in UAP’s academic programs.',
        },
        {
          name: 'Dr. Shantanu Chakraborty',
          title: 'Vice Chancellor (Acting)',
          dept: 'Department of Computer Science and Engineering, University of Asia Pacific',
          img: require('@/static/BOD/sutan_adminpage.jpg'),
          info: 'In terms of its mission of enhancing opportunities of higher education, UAP has now become a well-recognized academia at home and abroad. During these years of nearly two and half decades, our growth and transformation were measured and steered to match world class learning experience that our boys and girls, and their parents aspire. Within the limits of growing demands, we are providing to our students and faculty members the best possible environment conducive to embed our vision of excellence in UAP’s academic programs.',
        },
        {
          name: 'Dr. Shantanu Chakraborty',
          title: 'Vice Chancellor (Acting)',
          dept: 'Department of Computer Science and Engineering, University of Asia Pacific',
          img: require('@/static/BOD/sutan_adminpage.jpg'),
          info: 'In terms of its mission of enhancing opportunities of higher education, UAP has now become a well-recognized academia at home and abroad. During these years of nearly two and half decades, our growth and transformation were measured and steered to match world class learning experience that our boys and girls, and their parents aspire. Within the limits of growing demands, we are providing to our students and faculty members the best possible environment conducive to embed our vision of excellence in UAP’s academic programs.',
        },
      ],
      socalicons: [
        { img: require('./../static/images/icon/Path 1.png') },
        { img: require('./../static/images/icon/Path 2.png') },
        { img: require('./../static/images/icon/Path 3.png') },
      ],
    }
  },

  computed: {
    ...mapGetters('admission', ['admission_banner']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

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
