<template>
  <section id="events">
    <div class="container">
      <div class="row">
        <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
          <div class="event-title">
            <h2>Upcoming Events</h2>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
          <div class="event-btn">
            <nuxt-link to="/events">More UAP Events</nuxt-link>
          </div>
        </div>
      </div>

      <div v-if="upcoming_events.length" class="row">
        <div class="col-lg-6 col-sm-12">
          <div class="event-img">
            <img
              :src="upcoming_events[0].image"
              :alt="upcoming_events[0].title"
              class="w-100"
            />
            <div class="overlay-event"></div>
            <div class="overlay-content">
              <p>{{ upcoming_events[0].date }}</p>
              <h6>{{ upcoming_events[0].title }}</h6>
              <span
                >{{ upcoming_events[0].from }} -
                {{ upcoming_events[0].to }}</span
              >
              <small>{{ upcoming_events[0].medium }}</small>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-sm-12">
          <div
            v-for="(item, i) in upcoming_events.slice(1)"
            :key="i"
            class="card mb-sm-3"
          >
            <div class="row g-0">
              <div class="col-md-4 col-sm-4">
                <div class="event-item-img">
                  <img :src="item.image" :alt="item.title" class="w-100" />
                  <div class="date">
                    <span>{{ item.date }}</span>
                  </div>
                </div>
              </div>
              <div class="col-md-8 col-sm-8">
                <div class="card-body">
                  <h5>{{ item.title }}</h5>
                  <div class="overlay-content">
                    <span>{{ item.from }} - {{ item.to }}</span>
                    <small>{{ item.medium }}</small>
                  </div>
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
import { mapActions, mapGetters } from 'vuex'
import backgroundImage from '../../static/test1.jpeg'
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      upcomingEvents: {
        background: backgroundImage,
        title: `WEBINAR SERIES ON "YOUNG WOMEN'S HEALTH PROBLEMS" HELD AT UAP`,
        from: '2.30 PM',
        to: '3.30 PM',
        medium: 'Online',
        date: 'Dec 21',
      },
    }
  },
  computed: {
    ...mapGetters('event', ['upcoming_events']),
  },
  created() {
    this.upcomingeventlist()
  },
  methods: {
    ...mapActions('event', ['upcomingeventlist']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#events {
  position: relative;
  padding-top: $section-padding;
  padding-bottom: $section-padding;

  @include respond-below(md) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
  .event-title h2 {
    color: $text-color;
    font-size: 52px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    padding-bottom: 100px;
    margin-bottom: 0;
    @include respond-below(sm) {
      font-size: 40px;
    }

    @include respond-below(md) {
      padding-bottom: 50px;
      text-align: center;
    }
    @include respond-between(lg, xl) {
      font-size: 45px;
    }
  }
  .event-btn {
    text-align: right;
    margin-top: 30px;
    // margin-right: 50px;
    @include respond-below(sm) {
      margin-right: 0;
      text-align: center;
      margin-bottom: 70px;
    }
    @include respond-between(sm, md) {
      margin-right: 0;
      text-align: center;
      margin-bottom: 70px;
    }
    @include respond-between(md, lg) {
      margin-right: 0;
      text-align: center;
      margin-bottom: 70px;
    }
    a {
      color: $white;
      font-size: 20px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      background: $darkblue;
      // box-shadow: $card-shadow-dark;
      border-radius: 5px;
      padding: 11px 62px;
      &:hover {
        border: 1px solid $darkblue;
        color: $darkblue !important;
        background: $white;
      }
    }
  }

  .event-img {
    position: relative;
    width: 95%;
    height: 482px;
    @include respond-between(last, xsl) {
      width: 100%;
      height: 250px;
      margin-bottom: 10px;
    }

    @include respond-between(xsl, xs) {
      width: 100%;
      height: 300px;
      margin-bottom: 10px;
    }
    @include respond-between(xs, sm) {
      width: 100%;
      height: 350px;
      margin-bottom: 10px;
    }
    @include respond-between(sm, md) {
      width: 100%;
      height: 400px;
      margin-bottom: 10px;
    }
    @include respond-between(md, lg) {
      width: 100%;
      height: 500px;
      margin-bottom: 10px;
    }
    // @include respond-between(lg, xl) {
    //   height: 390px;
    // }
    // @include respond-between(xl, xml) {
    //   height: 333px;
    // }
    img {
      border-radius: 5px;
      height: 100%;
      width: 100%;
      // padding-right: 80px;
    }

    .overlay-content {
      margin-bottom: 20px;
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      text-align: center;
      margin-bottom: 20px;

      p {
        display: inline-block;
        background: $deep-primary;
        border-radius: 5px;
        color: $white;
        padding: 7px 30px;
        @include paragraph;
        font-weight: 500;
        text-align: left;
        margin: 0;
      }
      h6 {
        color: $white;
        @include title2;
        font-weight: 600;
        text-align: center;
        margin: 0;
        padding: 10px 20px;
        @include respond-below(xsl) {
          font-size: 12px;
          line-height: 20px;
        }
        @include respond-between(xsl, xs) {
          font-size: 12px;
        }
        @include respond-between(xs, sm) {
          font-size: 17px;
        }
        @include respond-between(lg, xl) {
          font-size: 18px;
        }
        @include respond-between(xl, xml) {
          font-size: 20px;
        }
      }
      span {
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: $white;
        padding-right: 70px;

        @include respond-below(xsl) {
          font-size: 12px;
        }
      }
      small {
        color: $white;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        position: relative;
        @include respond-below(xsl) {
          font-size: 12px;
        }
      }
      small::after {
        position: absolute;
        content: '';
        top: 9px;
        left: -50px;
        width: 39px;
        height: 2px;
        background: $text-color;
      }
    }
    .overlay-event {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      top: 0;
      text-align: center;
      background-image: linear-gradient(
        to bottom,
        rgba(48, 48, 48, 0),
        rgba(26, 26, 26, 0),
        rgba(26, 26, 26, 0.8)
      );
      // padding: 0 60px;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  }

  .card {
    // height: 155px;
    // overflow: hidden;
    margin-left: 6%;

    @include respond-below(lg) {
      margin-left: 0;
    }
    @include respond-below(sm) {
      margin-left: 0;
      margin-top: 20px;
    }
    border: none;
    img {
      height: 100%;
      border-radius: 5px;
    }
    .card-body {
      background-color: $background-color;
      height: 150px;
      text-align: center;
      h5 {
        color: $text-color;
        font-size: 21px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        margin-bottom: 0;
        padding-top: 30px;
        // padding-bottom: 10px;
        @include respond-between(lg, xl) {
          font-size: 16px;
          padding-top: 15px;
        }
      }
      span {
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
      }
      small {
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
      }
    }
  }

  // .event-item {
  //   // box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.161);
  //   border: 1px solid rgba(112, 112, 112, 0.15);
  //   border-radius: 5px;
  //   background: $background-color;
  //   margin-left: 10%;
  //   height: 125px;
  //   @include respond-below(sm) {
  //     padding-bottom: 20px;
  //   }

  .event-item-img {
    position: relative;
    height: 150px;
    overflow: hidden;
    img {
      height: 100%;
      border-radius: 5px;
    }
    .date {
      position: absolute;
      left: 50%;
      bottom: 20px;
      transform: translateX(-50%);
    }
    .date span {
      color: $white;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.8px;
      padding: 10px 18px;
      background: $deep-primary;
      border-radius: 5px;

      @include respond-between(lg, xl) {
        padding: 10px 15px;
        font-size: 9px;
      }
    }
  }
  //   h5 {
  //     color: $text-color;
  //     font-size: 21px;
  //     font-weight: 500;
  //     font-stretch: normal;
  //     font-style: normal;
  //     line-height: normal;
  //     letter-spacing: normal;
  //     margin-bottom: 0;
  //     padding-top: 30px;
  //     // padding-bottom: 10px;
  //     @include respond-between(lg, xl) {
  //       font-size: 16px;
  //       padding-top: 15px;
  //     }
  //   }
  //   span {
  //     font-size: 12px;
  //     font-weight: normal;
  //     font-stretch: normal;
  //     font-style: normal;
  //     line-height: normal;
  //     letter-spacing: normal;
  //   }
  //   small {
  //     font-size: 12px;
  //     font-weight: normal;
  //     font-stretch: normal;
  //     font-style: normal;
  //     line-height: normal;
  //     letter-spacing: normal;
  //   }
  // }
}
</style>
