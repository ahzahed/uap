<template>
  <section id="fact-figure">
    <div class="container">
      <div class="text-center mb-5 pb-3 fact">
        <h4>Fact And Figures</h4>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div v-for="(fact, i) in departmentFactFigure" :key="i" class="col p-3">
          <div class="main-card h-100">
            <div class="card-top">
              <div class="row">
                <div class="col-3 col-md-3 text-center">
                  <img
                    src="../../../static/CFDCwbv.png"
                    alt=""
                    height="60px"
                    width="70px"
                    class=""
                  />
                </div>
                <div class="col-9 col-md-9 pe-5">
                  <h6 class="title mb-2 my-2">
                    {{ fact.title }}
                  </h6>
                  <p class="description">
                    {{ fact.short_description }}
                  </p>
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
export default {
  components: {},
  props: {
    departmentFactFigure: {
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
#fact-figure {
  padding-top: $section-padding;
  padding-bottom: $section-padding;
  background: url(../../../static/csehome.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  @include respond-below(sm) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
  @include respond-between(sm, md) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
  @include respond-between(md, lg) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
  .fact {
    h4 {
      @include title;
      color: $text-color;
    }
  }
  .main-card {
    .card-top {
      &:hover {
        background: $white;
        box-shadow: $card-shadow-dark;
      }
      background: none;

      height: 100%;
      .title {
        @include cardTitle;
        color: $darkblue;
      }
      .description {
        @include paragraph2;
        font-weight: 300;
        color: $text-color;
        text-align: justify;
      }
    }
  }
}
</style>
