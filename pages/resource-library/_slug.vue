<template>
  <div>
    <!-- <h1>{{ research_details }}</h1> -->
    <!-- About IEERD Start -->
    <section v-if="resourse_library_details.overView">
      <Overview :value="resourse_library_details" />
    </section>
    <!-- About IEERD End  -->

    <!-- Commitees Start -->
    <section v-if="resourse_library_details.NewsNotices">
      <NewsNotices :value="resourse_library_details" />
    </section>
    <!-- Commitees End -->

    <!-- Fundings & Forms Start -->
    <section v-if="resourse_library_details.NewArrival">
      <NewArrival :value="resourse_library_details" />
    </section>
    <!-- Fundings & Forms End -->

    <!-- Policies Start -->
    <section v-if="resourse_library_details.table">
      <EResources :value="resourse_library_details" />
    </section>
    <!-- Policies End -->

    <!-- Policies Start -->
    <section v-if="resourse_library_details.extra">
      <Extra :value="resourse_library_details" />
    </section>
    <!-- Policies End -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Overview from '../../components/resourceLibrary/Overview.vue'
import NewsNotices from '../../components/resourceLibrary/NewsNotices.vue'
import NewArrival from '../../components/resourceLibrary/NewArrival.vue'
import EResources from '../../components/resourceLibrary/EResources.vue'

// import Publication from '../../components/research/Publication.vue'
// import Events from '../../components/research/Events.vue'
import Extra from '../../components/resourceLibrary/Extra.vue'
export default {
  components: {
    Overview,
    NewsNotices,
    NewArrival,
    EResources,
    Extra,
  },
  computed: {
    ...mapGetters('resourceLibrary', ['resourse_library_details']),
  },
}
</script>

<style></style>
