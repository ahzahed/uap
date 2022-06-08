<template>
  <!-- Student Part Start -->
  <section id="student">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 p-0">
          <div class="student-content">
            <div class="" data-aos="fade-right" data-aos-duration="1000">
              <h2>{{ student.title }}</h2>
              <p>{{ student.details }}</p>
              <a href="#">More Information</a>
            </div>
          </div>
          <div
            class="student-footer"
            :style="{ backgroundImage: 'url(' + student.imgBotton + ')' }"
          >
            <div class="img-padding">
              <h5
                v-for="(item, i) in student.links"
                :key="i"
                data-aos="fade-up"
                :data-aos-duration="item.duration"
              >
                <nuxt-link to="#" class="student-life-link"
                  ><span>{{ item.title }}</span>
                  <!-- <i class="fa fa-long-arrow-right" aria-hidden="true"></i> -->
                  <span class="material-icons-outlined icon"> east </span>
                </nuxt-link>
              </h5>
            </div>
          </div>
        </div>
        <div
          class="col-md-6 p-0 student-img"
          :style="{ backgroundImage: 'url(' + student.imgRight + ')' }"
        ></div>
      </div>
    </div>
  </section>
  <!-- Student Part End -->
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],

  data() {
    return {
      student: {
        title: 'Student Life',
        details: 'Our students create a vibrant and inclusive community',
        imgRight: require('../../static/121.png'),
        imgBotton: require('../../static/Group3712.png'),
        links: [
          {
            title: 'Athletics & Fitness',
            url: '#',
            duration: 800,
          },
          {
            title: 'Student Activities',
            url: '#',
            duration: 1000,
          },
          {
            title: 'Support & Guidance',
            url: '#',
            duration: 1200,
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
// .container-row {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-gap: 20px;
  #student {
    .student-img {
      background-size: cover;
    }
    .student-content {
      padding-top: 100px;
      padding-bottom: 60px;
      background: $darkblue;
      padding-left: 18%;

      @include respond-below(sm) {
        padding-left: 8%;
      }
      @include respond-between(sm, md) {
        padding-left: 8%;
      }
      @include respond-between(md, lg) {
        padding-left: 8%;
      }
      @include respond-between(lg, xl) {
        padding-top: 50px;
        padding-bottom: 50px;
      }

      h2 {
        color: $white;
        font-size: 52px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        margin-bottom: 0;
        padding-bottom: 22px;
        @include respond-below(sm) {
          font-size: 49px;
        }
        @include respond-between(lg, xl) {
          font-size: 40px;
          padding-bottom: 35px;
        }
      }
      p {
        color: $white;
        @include paragraph;
        margin-bottom: 0;
        padding-bottom: 25px;
        padding-right: 50px;
        @include respond-between(lg, xl) {
          font-size: 16px;
          padding-bottom: 50px;
          padding-right: 50px;
        }
      }
      a {
        color: $white;
        font-size: 21px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        border-bottom: 1px solid $white;
        padding-bottom: 10px;
      }
    }
    .student-footer {
      background: $lightblue;
      padding-top: 140px;
      padding-bottom: 98px;
      padding-left: 40%;
      position: relative;
      background-size: cover;
      object-fit: cover;
      z-index: 1;
      background-attachment: bottom;
      background-position: center;
      background-repeat: round no-repeat;
      //Pore dekhmune start

      //Pore dekhmune start
      @include respond-below(sm) {
        padding-left: 10%;
      }
      @include respond-between(sm, md) {
        padding-left: 10%;
      }
      @include respond-between(md, lg) {
        padding-left: 10%;
      }
      @include respond-between(lg, xl) {
        padding-top: 50px;
        padding-bottom: 50px;
        padding-left: 30%;
      }
      h5 {
        color: $text-color;
        font-size: 27px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-transform: capitalize;
        margin-bottom: 0;
        padding-bottom: 30px;
        @include respond-below(sm) {
          font-size: 23px;
        }
        @include respond-between(lg, xl) {
          font-size: 18px;
          padding-bottom: 29px;
        }
      }
      h5 a {
        color: $text-color;
      }
      h5 a i {
        margin-left: 5px;
      }
      img {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: -1;
      }
      .student-img {
        img {
          max-height: 926px;
          object-fit: cover;
        }
      }
      .student-life-link {
        display: flex;
        justify-content: space-evenly;
      }
    }
  }
// }
</style>
