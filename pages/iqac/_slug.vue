<template>
  <div>
    <!-- <h1>{{ research_details }}</h1> -->
    <!-- About IEERD Start -->
    <section v-if="iqac_details.overview">
      <Overview :value="iqac_details" />
    </section>
    <!-- About IEERD End  -->

    <!-- Fundings & Forms Start -->
    <section v-if="iqac_details.event">
      <Events :value="iqac_details" />
    </section>
    <!-- Fundings & Forms End -->

    <!-- Policies Start -->
    <section v-if="iqac_details.gallery">
      <Gallery :value="iqac_details" />
    </section>
    <!-- Policies End -->

    <!-- Commitees Start -->
    <section v-if="iqac_details.fqa">
      <Downloads :value="iqac_details" />
    </section>
    <!-- Commitees End -->

    <!-- Extra start  -->
    <section v-if="iqac_details.extra">
      <Extra :value="iqac_details" />
    </section>
    <!-- Extra End -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Overview from '../../components/iqac/Overview.vue'
import Downloads from '../../components/iqac/Downloads.vue'
import Events from '../../components/iqac/Events.vue'
import Gallery from '../../components/iqac/Gallery.vue'

// import Publication from '../../components/research/Publication.vue'
// import Events from '../../components/research/Events.vue'
import Extra from '../../components/iqac/Extra.vue'
export default {
  components: {
    Overview,
    Downloads,
    Events,
    Gallery,
    Extra,
  },
  computed: {
    ...mapGetters('iqac', ['iqac_details']),
  },
}
</script>

<style></style>
