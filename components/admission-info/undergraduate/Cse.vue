<template>
  <section id="cse">
    <div class="container">
      <h4 class="text-center">Why CSE at UAP</h4>
      <div class="row">
        <div
          class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 d-flex justify-content-center"
        >
          <div
            v-for="(information, i) in informations"
            :key="i"
            class="col main-card"
          >
            <div class="card-top">
              <div class="serial">
                <p class="text-center serial-text mb-0">{{ i + 1 }}</p>
              </div>
              <div class="h-100 text-top">
                <p class="card-text">
                  {{ information.short_description }}
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
export default {
  props: {
    informations: {
      type: Array,
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
#cse {
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
        margin: 10px;
        padding: 10px;
        .serial {
          position: absolute;
          margin-top: -23px;
          margin-left: 25px;
          color: $white;

          // text-align: center;
          .serial-text {
            background-color: $darkblue;
            border-radius: 50%;
            height: 30px;
            width: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
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
