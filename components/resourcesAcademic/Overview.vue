<template>
  <section id="resourcesAcademicOverview">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-12 pb-2">
          <div class="details">
            <h2>Classrooms At UAP:</h2>
            <p>
              {{ overviewDetails }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item, i) in overview" :key="i" class="col-lg-6 py-3">
          <img :src="item.img" alt="" class="w-100" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    overviewDetails: { required: true, type: Object },
    overview: { required: true, type: Array },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#resourcesAcademicOverview {
  .details {
    background: $background-color;
    padding: 80px;
    border-radius: 5px;
    h2 {
      @include title2;
    }
    p {
      @include paragraph;
    }
  }
}
</style>
