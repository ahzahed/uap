<template>
  <div id="resourcesFaculty">
    <div class="container my-5">
      <div class="row">
        <div
          v-for="(item, i) in departments"
          :key="i"
          class="col-xl-4 col-lg-6 col-md-6 col-sm-6"
        >
          <nuxt-link :to="'/' + item.department + '/faculty'">
            <div class="card my-5">
              <img
                :src="$config.baseURL + item.image"
                :alt="item.title"
                class="card-img"
              />
              <div class="card-img-overlay shadow">
                <p class="card-text">{{ item.title }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    departments: {
      type: Array,
      required: true,
    },
  },
  
}
</script>
<style lang="scss" scoped>
@import './styles/_main.scss';
#resourcesFaculty {
  .card {
    .card-img {
      max-width: 100%;
      height: 420px;
    }
    .card-img-overlay {
      top: inherit;
      background-color: $white;
      margin-left: 15px;
      margin-right: 15px;
      margin-bottom: -30px;
      //   box-shadow: 4px 20px 40px rgba(115, 115, 115, 0.25);
      .card-text {
        @include cardPara;
        color: $superblue;
        text-align: center;
      }
    }
  }
}
</style>
