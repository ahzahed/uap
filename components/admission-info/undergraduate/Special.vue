<template>
  <section id="special">
    <div
      v-for="(special, i) in specialInformation"
      :key="i"
      class="container my-5"
    >
      <div class="col-12 col-lg-10 mx-auto">
        <div class="row">
          <div class="col-lg-12 p-0">
            <div class="text-center bottom">
              <p>{{ special.title }}</p>
            </div>
          </div>
        </div>
        <div class="row main d-flex justify-content-center shadow-sm">
          <div class="col-md-12">
            <ul class="mb-0">
          
                <!-- <span class="title">{{ special.title }}</span
                >: <span class="dec">{{ special.description }}</span> -->
                <div v-html="special.description"></div>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    specialInformation: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#special {
  .bottom {
    p {
      margin-bottom: 0px;
      @include title2;
      font-weight: 600;
    }
    color: $white;
    padding: 11px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: $darkblue;
  }

  .container {
    .main {
      padding: 30px;
      background-color: $background-color;
      border-radius: $border-radius;
      ul {
        list-style-type: disc !important;
        li {
          .title {
            color: $darkblue;
            @include paragraph;
            text-align: justify;
            font-weight: 500;
          }
          .dec {
            color: $darkblue;
            @include paragraph2;
            text-align: justify;
            font-weight: 300;
          }
        }
      }
    }
  }
}
</style>
