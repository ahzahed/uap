<template>
  <section id="message">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="heading">
            <h1 class="text-center">Message From Head of The Department</h1>
          </div>
          <div v-if="message.message_form_department" class="details">
            <p
              v-if="toggle == false"
              v-html="message.message_form_department.slice(0, 268)"
            ></p>

            <p v-else v-html="message.message_form_department"></p>

            <div style="text-align: right">
              <button class="primary-btn readmore" @click="toggle = !toggle">
                <span v-if="toggle == false">
                  <span class="plus">+</span> Read More</span
                >
                <span v-else> <span class="plus">-</span> Read Less</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true,
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
  // margin-top: 104px;
  margin-bottom: 104px;
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
  .descinline {
    display: inline;
  }
  .descempty {
    display: none;
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
        @include cardPara;
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
