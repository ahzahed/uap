<template>
  <div>
    <!-- <h1>{{ research_details }}</h1> -->
    <!-- About IEERD Start -->
    <section v-if="undergraduate_details.criteria">
      <Undergraduate :value="undergraduate_details" />
    </section>
    <!-- About IEERD End  -->

    <!-- Fundings & Forms Start -->
    <section v-if="undergraduate_details.DirectAdmission">
      <Direct :value="undergraduate_details" />
    </section>
    <!-- Fundings & Forms End -->

    <!-- Fundings & Forms Start -->
    <section v-if="undergraduate_details.procedor">
      <Payment :value="undergraduate_details" />
    </section>
    <!-- Fundings & Forms End -->

    <!-- Extra start  -->
    <section v-if="undergraduate_details.extra">
      <Extra :value="undergraduate_details" />
    </section>
    <!-- Extra End -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Direct from '../../components/whatIsRequiredUndergraduate/Direct.vue'
import Undergraduate from '../../components/whatIsRequiredUndergraduate/Undergraduate.vue'
import Payment from '../../components/whatIsRequiredUndergraduate/Payment.vue'

import Extra from '../../components/whatIsRequiredUndergraduate/Extra.vue'
export default {
  components: {
    Direct,
    Undergraduate,
    Payment,
    Extra,
  },
  computed: {
    ...mapGetters('whatIsRequired', ['undergraduate_details']),
  },
}
</script>

<style></style>
