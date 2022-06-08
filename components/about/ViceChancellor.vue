<template>
  <section id="ViceChancellor">
    <div class="container mt-5">
      <div class="row shadow mx-2">
        <!-- Team item -->
        <div class="col-xl-4 col-lg-4 col-md-12 text-center">
          <div class="px-4 leftSide">
            <img :src="viceChancellor.image" class="img-fluid mb-3 shadow" />
            <h5>{{ viceChancellor.name }}</h5>
            <span>{{ viceChancellor.designation }}</span>
            <p>
              {{ viceChancellor.department }}
              <span class="university">University of Asia Pacific</span>
            </p>
          </div>
        </div>
        <!-- End -->
        <div class="col-xl-8 col-lg-8 col-md-12">
          <div class="px-4 rightSide">
            <p v-html="viceChancellor.description"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    viceChancellor: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      toggle: false,
      img: require('@/static/BOD/x.jpg'),
      details:
        '<h4 style="margin-bottom: 25px"></h4><p></p><h4 style="margin-bottom: 25px"></h4> <p> </p>',
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#ViceChancellor {
  .leftSide {
    min-height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h5 {
      @include title2;
      color: $deep-primary;
    }
    span {
      @include paragraph;
      font-weight: normal;
      color: $deep-primary !important;
      margin-bottom: 10px;
    }
    .university {
      color: rgba(18, 102, 241, 0.75);
    }
    p {
      @include paragraph;
    }
    img {
      height: 250px;
      width: 250px;
      object-fit: fill;
    }
  }
  .rightSide {
    min-height: 550px;
    padding-top: 50px;
    @include respond-below(lg) {
      padding-top: 0px;
    }
    h3 {
      @include cardTitle;
    }
    h4 {
      @include cardTitle;
      color: $text-color;
      font-weight: 500;
    }
    p {
      @include paragraph;
    }
  }
}
</style>
