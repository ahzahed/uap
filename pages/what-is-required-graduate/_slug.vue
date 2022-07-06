<template>
  <div>
    <!-- <h1>{{ research_details }}</h1> -->
    <!-- About IEERD Start -->
    <section v-if="graduate_details.criteria">
      <Graduate :value="graduate_details" />
    </section>
    <!-- About IEERD End  -->

    <!-- Commitees Start -->
    <!-- <section v-if="graduate_details.research_committee">
      <Graduate :research="graduate_details" />
    </section> -->
    <!-- Commitees End -->

    <!-- Fundings & Forms Start -->
    <section v-if="graduate_details.procedor">
      <Payment :value="graduate_details" />
    </section>
    <!-- Fundings & Forms End -->

    <!-- Extra start  -->
    <section v-if="graduate_details.extra">
      <Extra :value="graduate_details" />
    </section>
    <!-- Extra End -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import AdmissionCriteria from '../../components/whatIsRequiredGraduate/AdmissionCriteria.vue'
import Graduate from '../../components/whatIsRequiredGraduate/Graduate.vue'
import Payment from '../../components/whatIsRequiredGraduate/Payment.vue'

import Extra from '../../components/whatIsRequiredGraduate/Extra.vue'
export default {
  components: {
    // AdmissionCriteria,
    Graduate,
    Payment,
    Extra,
  },
  computed: {
    ...mapGetters('whatIsRequired', ['graduate_details']),
  },
}
</script>

<style></style>
