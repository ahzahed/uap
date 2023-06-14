<template>
  <section id="under-graduate">
    <div class="container">
      <Curriculum :data="admission_result" top="Waiting List"/>
    </div>
    <!-- <slot></slot> -->
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Curriculum from '@/components/departmens/admission-result/AdmissionResult.vue'
export default {
  components: {
    Curriculum,
  },
  asyncData({ store, route }) {
    store.dispatch('depAdmissionResult/getAdmissionResult', {
      department: route.params.department,
      type: 'waiting',
    })
  },
 
   computed: {
    ...mapGetters('depAdmissionResult', ['admission_result']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
.categoryPosition {
  display: flex;
  justify-content: space-evenly;
  span {
    @include subtitle2;
  }
}
.meritTableFooter {
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;

  color: #000;
  background-color: $violot;
}
</style>
