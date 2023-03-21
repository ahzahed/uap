<template>
  <section id="message">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-12">
          <div class="heading">
            <h1 class="text-center">Message From Dean</h1>
          </div>
          <div class="details">
            <!-- <p v-if="toggle == false" v-html="dean.message.slice(0, 300)"></p> -->
            <p v-html="dean?.dean?.message"></p>
            <!-- <div class="row messageFrom">
              <div class="col-lg-4">
                <img :src="img" alt="x" />
              </div>
              <div class="col-lg-8">
                <p class="text-right">Professor Dr. Muhammad Mizanur Rahaman</p>
              </div>
            </div> -->
            <div style="text-align: right">
              <!-- <button class="primary-btn readmore" @click="toggle = !toggle">
                <span v-if="toggle == false">
                  <span class="plus"><i class="fas fa-plus-circle"></i></span>
                  Read More</span
                >
                <span v-else>
                  <span class="plus"><i class="fas fa-minus-circle"></i></span>
                  Read Less</span
                >
              </button> -->
            </div>
            <div class="messageFrom mt-5">
              <img
                :src="$config.baseURL + dean?.dean?.image"
                :alt="dean?.dean?.name"
              />

              <div class="profile mt-2">
                <p>
                  {{ dean?.dean?.name }}<br />
                  <span>Dean, {{ dean?.school_name }}</span
                  ><br />
                  <span>University of Asia Pacific</span>
                </p>
                <p class="email">
                  <img class="icon" :src="require('static/envelope.svg')" />
                  {{ dean?.dean?.email }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import s from 'static/envelope.svg'
export default {
  props: {
    dean: {
      required: true,
      type: Object,
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
#message {
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
  .details {
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
    .profile {
      margin-left: 20px;
      .email {
        @include paragraph;
        font-weight: 500;
      }
      p {
        @include paragraph;
        font-weight: 600;
        color: $deep-primary;
        text-align: left;

        span {
          @include paragraph;

          font-weight: 300;
        }
      }
    }
    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      @include respond-below(xs) {
        height: 100px;
        width: 100px;
      }
    }
    .icon {
      width: 28px;
      height: 20px;
      border-radius: 0;
      color: red;
      margin-bottom: 0px;
    }
  }
}
</style>
