<template>
  <section id="developers">
    <Banner :banner="banner" />

    <div class="container my-5">
      <div class="row justify-content-center">
        <div v-for="(professor, i) in developers" :key="i" class="col-lg-6">
          <div
            class="card profile-card mb-5 mx-auto shadow-sm"
            style="max-width: 540px"
          >
            <div class="row g-0">
              <div class="col-sm-4 img-top">
                <img
                  :src="professor.img"
                  class="img-fluid w-100"
                  :alt="professor.name"
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
                        v-for="(item, j) in professor.socalicons"
                        :key="j"
                        class="nav-item pt-2"
                      >
                        <a class="p-1" :href="item.link" target="_blank">
                          <img :src="item.img"
                        /></a>
                      </li>
                    </ul>
                  </div>
                  <!-- <div>
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
                  </div> -->
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
import Banner from '../../components/helpers/Banner.vue'
export default {
  components: {
    Banner,
  },
  layout: 'HomeLayout',

  data() {
    return {
      banner: {
        image: require('@/static/x.png'),
        title: 'UAP Developers',
      },

      developers: [
        {
          name: 'Farabi Amin',
          designation: 'Project Manager',
          img: require('../../static/developer/farabi.png'),
          socalicons: [
            {
              img: require('../../static/developer/gmail.png'),
              link: 'mailto:Farabi.hh21@gmail.com',
            },
            {
              img: require('../../static/developer/linkedin.png'),
              link: 'https://www.linkedin.com/in/farabi-amin-chowdhury-245250185/',
            },
            {
              img: require('../../static/developer/whatsapp.png'),
              link: 'https://wa.me/+8801759039063',
            },
            {
              img: require('../../static/developer/facebook.png'),
              link: 'https://www.facebook.com/farabi.hh21',
            },
            // { img: require('../../static/developer/twitter.png'), link: '#' },
          ],
        },
        {
          name: 'Ikhlas Rahman',
          designation: 'UI/UX Designer',
          img: require('../../static/developer/ikhlas.png'),
          socalicons: [
            {
              img: require('../../static/developer/gmail.png'),
              link: 'mailto:ikhlasux@gmail.com',
            },
            {
              img: require('../../static/developer/linkedin.png'),
              link: 'https://www.linkedin.com/in/ikhlasux/',
            },
            { img: require('../../static/developer/whatsapp.png'), link: '#' },
            {
              img: require('../../static/developer/facebook.png'),
              link: 'https://www.facebook.com/ikhlas.ui',
            },
            // { img: require('../../static/developer/twitter.png'), link: '#' },
          ],
        },
        {
          name: 'Saiful Islam',
          designation: 'Sr. Frontend Developer',
          img: require('../../static/developer/saiful.jpg'),
          socalicons: [
            {
              img: require('../../static/developer/gmail.png'),
              link: 'mailto:saiful.islam.devs@gmail.com',
            },
            {
              img: require('../../static/developer/linkedin.png'),
              link: 'https://www.linkedin.com/in/saiful-islam-18013313a/',
            },
            {
              img: require('../../static/developer/whatsapp.png'),
              link: 'https://wa.me/01636157139',
            },
            {
              img: require('../../static/developer/facebook.png'),
              link: 'https://www.facebook.com/saiful953',
            },
            // { img: require('../../static/developer/twitter.png'), link: '#' },
          ],
        },
        {
          name: 'Shamim Dewan',
          img: require('../../static/developer/shamim.png'),
          designation: 'Sr. Backend Developer',
          socalicons: [
            {
              img: require('../../static/developer/gmail.png'),
              link: 'mailto:shamimdewan343@gmail.com',
            },
            {
              img: require('../../static/developer/linkedin.png'),
              link: 'https://www.linkedin.com/in/shamimdewan390/',
            },
            {
              img: require('../../static/developer/whatsapp.png'),
              link: 'https://wa.me/+8801877651143',
            },
            {
              img: require('../../static/developer/facebook.png'),
              link: 'https://www.facebook.com/shamimdewan390',
            },
            // { img: require('../../static/developer/twitter.png'), link: '#' },
          ],
        },
        {
          name: 'Md. Amir Hamza',
          designation: 'Frontend Developer',
          img: require('../../static/developer/amir.png'),
          socalicons: [
            {
              img: require('../../static/developer/gmail.png'),
              link: 'mailto:ah.zahed00@gmail.com',
            },
            {
              img: require('../../static/developer/linkedin.png'),
              link: 'https://www.linkedin.com/in/ahzahed/',
            },
            {
              img: require('../../static/developer/whatsapp.png'),
              link: 'https://wa.me/+8801521331041',
            },
            {
              img: require('../../static/developer/facebook.png'),
              link: 'https://www.facebook.com/ah.zahed00/',
            },
            // { img: require('../../static/developer/twitter.png'), link: '#' },
          ],
        },

        {
          name: 'Md. Omar Faruq',
          designation: 'Backend Developer',
          img: require('../../static/developer/razu.png'),
          socalicons: [
            {
              img: require('../../static/developer/gmail.png'),
              link: 'mailto:razume2@gmail.com',
            },
            {
              img: require('../../static/developer/linkedin.png'),
              link: 'https://www.linkedin.com/in/mdomar-faruq/',
            },
            {
              img: require('../../static/developer/whatsapp.png'),
              link: 'https://wa.me/+8801681935050',
            },
            {
              img: require('../../static/developer/facebook.png'),
              link: 'https://www.facebook.com/md.omarfaruq.razu',
            },
            // { img: require('../../static/developer/twitter.png'), link: '#' },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#developers {
  .profile-card {
    .main-info {
      background-color: $background-color;

      .card-top {
        h5 {
          @include cardTitle;
          // @include respond-below(lg) {
          //   font-size: 19px;
          // }
        }
        p {
          @include cardPara;
          // @include respond-below(lg) {
          //   font-size: 16px;
          // }
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
  }
}
</style>
