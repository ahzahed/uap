<template>
  <section id="resourceServiceFees">
    <div class="container">
      <div class="row">
        <div
          v-for="(information, i) in value.service_fee"
          :key="i"
          class="col-lg-3 main-card mb-5"
        >
          <div class="card-top">
            <div class="serial">
              <p class="text-center serial-text p-3">
                {{ information.title }}
              </p>
            </div>
            <div class="h-100 text-top">
              <p class="card-text">
                {{ information.fee }}
              </p>
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
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_main.scss';
#resourceServiceFees {
  margin-top: 90px;
  .container {
    h4 {
      @include title;
      margin-bottom: 50px;
    }
    .main-card {
      .card-top {
        border-radius: $border-radius;
        box-shadow: 0 22px 40px 0 rgba(45, 54, 142, 0.15);
        background-color: $background-color;

        .serial {
          background: $darkblue;
          color: white;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          // position: absolute;
          // margin-top: -23px;
          // margin-left: 25px;
          // color: $white;

          // .serial-text {
          //   background-color: $darkblue;
          //   border-radius: 50%;
          //   height: 30px;
          //   width: 30px;
          //   display: flex;
          //   justify-content: center;
          //   align-items: center;
          // }
        }
        .text-top {
          padding: 15px 20px 20px 20px;
          // p {
          // }
        }
      }
    }
  }
}
</style>
