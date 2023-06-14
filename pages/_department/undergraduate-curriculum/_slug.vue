<template>
  <section id="bsc-curriculum">
    <div class="container my-5">
      <div  class="row mt-4">
        <div class="col-lg-11 mx-auto">
          <div class="details">
            <div v-html="bsc_body.curriculum_detail"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
 
  asyncData({ route, store }) {
    store.dispatch('depBscCur/getBscBody', route.params)
  },
  computed: {
    ...mapGetters('depBscCur', ['bsc_body']),
  },
 
}
</script>
<style lang="scss" scoped>
@import './styles/_main.scss';
#bsc-curriculum {
  .details {
    border-bottom: 8px solid #4786ef;
    padding: 50px;
    background-color: $background-color;
    border-radius: 5px;
    @include respond-below(md) {
      padding: 20px;
    }
  }
}
</style>
