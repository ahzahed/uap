<template>
  <div>
    <!-- <h1>{{ research_details }}</h1> -->
    <!-- About IEERD Start -->
    <section v-if="research_details.about_ieerd">
      <IEERD :research="research_details" />
    </section>
    <!-- About IEERD End  -->

    <!-- Commitees Start -->
    <section v-if="research_details.research_committee">
      <Committees :research="research_details" />
    </section>
    <!-- Commitees End -->

    <!-- Fundings & Forms Start -->
    <section v-if="research_details.research_funds">
      <FundingForms :research="research_details" />
    </section>
    <!-- Fundings & Forms End -->

    <!-- Policies Start -->
    <section v-if="research_details.research_policies_files">
      <Policies :research="research_details" />
    </section>
    <!-- Policies End -->

    <!-- Funded Activites Start -->
    <section v-if="research_details.research_funded_activites_files">
      <FundActivities :research="research_details" />
    </section>
    <!-- Funded Activites End -->

    <!-- Publications Start  -->
    <!-- <section v-if="research_details.research_funded_activites_files">
      <Publication :research="research_details" />
    </section> -->
    <!-- Publications End  -->

    <!-- Events & Others Start  -->
    <!-- <section v-if="research_details.research_funded_activites_files">
      <Events :research="research_details" />
    </section> -->
    <!-- Events & Others End -->

    <!-- Extra start  -->
    <section v-if="research_details.extra">
      <Extra :research="research_details" />
    </section>
    <!-- Extra End -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IEERD from '../../components/research/IEERD.vue'
import FundingForms from '../../components/research/FundingForms.vue'
import Committees from '../../components/research/Committees.vue'
import Policies from '../../components/research/Policies.vue'
import FundActivities from '../../components/research/FundActivities.vue'
// import Publication from '../../components/research/Publication.vue'
// import Events from '../../components/research/Events.vue'
import Extra from '../../components/research/Extra.vue'
export default {
  components: {
    IEERD,
    FundingForms,
    Committees,
    Policies,
    FundActivities,
    // Publication,
    // Events,
    Extra,
  },
  computed: {
    ...mapGetters('research', ['research_details']),
  },
}
</script>

<style></style>
