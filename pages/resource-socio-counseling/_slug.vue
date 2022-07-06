<template>
  <div>
    <!-- <h1>{{ research_details }}</h1> -->
    <!-- About IEERD Start -->
    <section v-if="resourse_socio_details.overview">
      <Overview :value="resourse_socio_details" />
    </section>
    <!-- About IEERD End  -->

    <!-- Commitees Start -->
    <section v-if="resourse_socio_details.service_contact">
      <ServiceContact :value="resourse_socio_details" />
    </section>
    <!-- Commitees End -->

    <!-- Fundings & Forms Start -->
    <section v-if="resourse_socio_details.fqa">
      <Counselling :faqs="resourse_socio_details" />
    </section>
    <!-- Fundings & Forms End -->

    <!-- Policies Start -->
    <section v-if="resourse_socio_details.data">
      <SccEvents :value="resourse_socio_details" />
    </section>
    <!-- Policies End -->

    <!-- Policies Start -->
    <section v-if="resourse_socio_details.extra">
      <Extra :value="resourse_socio_details" />
    </section>
    <!-- Policies End -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Overview from '../../components/resourceSocio/Overview.vue'
import Counselling from '../../components/resourceSocio/Counselling.vue'
import SccEvents from '../../components/resourceSocio/SccEvents.vue'
import ServiceContact from '../../components/resourceSocio/ServiceContact.vue'

import Extra from '../../components/resourceLibrary/Extra.vue'
export default {
  components: {
    Overview,
    Counselling,
    SccEvents,
    ServiceContact,
    Extra,
  },
  computed: {
    ...mapGetters('resourceSocio', ['resourse_socio_details']),
  },
}
</script>

<style></style>
