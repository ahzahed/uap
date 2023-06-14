<template>
  <section id="graduate" class="mt-5">
    <div class="container">
      <!-- {{admission_result}} -->
      <Curriculum :data="admission_result" top="Final Result"/>
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
      type: 'final',
    })
  },

  computed: {
    ...mapGetters('depAdmissionResult', ['admission_result']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
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
