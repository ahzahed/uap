<template>
  <section id="procedure">
    <div class="container">
      <div class="col-12 col-lg-10 mx-auto">
        <h1 class="text-center">Procedure</h1>
        <div class="row">
          <div
            v-for="(item, i) in procedureInformation"
            :key="i"
            class="procedureProcess mb-3"
          >
            <h3>{{ item.group_name }}</h3>
            <div v-html="item.description"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    procedureInformation: {
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
#procedure {
  padding-bottom: $section-padding;
  padding-top: $section-padding;
  h1 {
    margin-bottom: 95px;
    @include title;
  }
  h3 {
    font-size: 27px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }
  p {
    @include paragraph;
  }
  .procedureProcess {
    background-color: $lightblue;
    padding: 43px 76px;
    border-radius: 5px;
    &:nth-of-type(odd) {
      background-color: $background-color;
    }
  }
}
</style>
