<template>
  <section id="profile">
    <div class="container mt-5">
      <div class="row">
        <!-- Team item -->
        <div class="col-xl-4 col-md-6 mb-5 text-center">
          <div class="bg-white rounded shadow py-5 px-4 leftSide">
            <img :src="profile.profile_image" class="mb-3 shadow main-img" />
            <h5>{{ profile.name }}</h5>
            <span>{{ profile.position }}</span>
            <p>
              {{ profile.designation }},
              <span class="university">University of Asia Pacific</span>
            </p>
            <ul class="social mb-0 list-inline mt-3">
              <li v-show="profile && profile.facebook" class="list-inline-item">
                <a
                  :href="profile.facebook"
                  target="_blank"
                  class="social-link shadow"
                  style="cursor: pointer"
                >
                  <i :class="'fab fa-facebook-square'"></i
                ></a>
              </li>
              <li v-show="profile && profile.twitter" class="list-inline-item">
                <a
                  :href="profile.twitter"
                  target="_blank"
                  style="cursor: pointer"
                  class="social-link shadow"
                >
                  <i :class="'fab fa-twitter-square'"></i
                ></a>
              </li>
              <li v-show="profile && profile.linkedin" class="list-inline-item">
                <a
                  :href="profile.linkedin"
                  target="_blank"
                  style="cursor: pointer"
                  class="social-link shadow"
                >
                  <i :class="'fab fa-linkedin'"></i
                ></a>
              </li>
              <li
                v-show="profile && profile.Instagram"
                class="list-inline-item"
              >
                <a
                  :href="profile.Instagram"
                  target="_blank"
                  style="cursor: pointer"
                  class="social-link shadow"
                >
                  <i :class="'fab fa-instagram-square'"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <!-- End -->
        <div class="col-xl-8 col-md-6 mb-5">
          <div class="bg-white rounded shadow py-5 px-4 rightSide">
            <h3 class="mb-5 mt-3">Brief Intro</h3>
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
            <p v-html="profile.brief_intro"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    profile: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      toggle: false,
    }
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
    .main-img {
      width: auto;
      border-radius: 6px;
      object-fit: cover;
      object-position: top;
    }
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
</style>
