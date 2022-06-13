<template>
  <section id="admission-citeria">
    <div class="container">
      <div class="col-12 col-lg-10 mx-auto">
        <div class="row">
          <div class="col-lg-12 p-0">
            <div class="text-center bottom">
              <p>Admission Criteria</p>
            </div>
          </div>
        </div>
        <div
          v-for="(criteria, i) in criteriaInformation"
          :key="i"
          class="row align-items-center main"
        >
          <!-- <div v-for="(criteria, i) in criteriaInformation" :key="i"> -->
          <div class="col-md-6 left">
            <div class="leftContent">
              <div class="mb-4">
                <h4>{{ criteria.program }}</h4>
                <p>{{ criteria.gpaReq }}</p>
                <p>{{ criteria.ssc }}</p>
                <p>{{ criteria.o }}</p>
                <p>{{ criteria.min }}</p>
              </div>
              <div class="mb-4">
                <h4>{{ criteria.subReq }}</h4>
                <p>{{ criteria.must }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 right">
            <div class="rightContent text-center my-3 my-md-0">
              <nuxt-link to="/" class="primary-btn tuition-btn"
                >Tuition Fees</nuxt-link
              >
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
    criteriaInformation: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#admission-citeria {
  .bottom {
    p {
      margin-bottom: 0px;
      @include title2;
    }
    color: $white;
    padding: 11px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: $darkblue;
  }
  .main {
    padding: 45px 0px 8px 75px;
    @include respond-below(xsl) {
      padding-left: 10px;
    }
    background-color: $lightblue;
    .leftContent {
      h4,
      p {
        margin-bottom: 0px;
      }
    }
    .rightContent {
      .tuition-btn {
        text-align: center;
        width: 300px;
        margin: 0 auto;
        margin-top: 80px;
        padding: 11px 42px;
        border-radius: 5px;
      }
    }
  }
}
</style>
