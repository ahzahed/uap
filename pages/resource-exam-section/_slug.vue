<template>
  <div>
    <!-- <h1>{{ research_details }}</h1> -->
    <!-- About IEERD Start -->
    <section v-if="resource_exam_details.overview_file">
      <Overview :value="resource_exam_details" />
    </section>
    <!-- About IEERD End  -->

    <!-- Commitees Start -->
    <section v-if="resource_exam_details.chart_fqa">
      <ServiceChart :value="resource_exam_details" />
    </section>
    <!-- Commitees End -->

    <!-- Fundings & Forms Start -->
    <section v-if="resource_exam_details.download_form">
      <DownloadForms :value="resource_exam_details" />
    </section>
    <!-- Fundings & Forms End -->

    <!-- Policies Start -->
    <section v-if="resource_exam_details.service_fee">
      <ServiceFees :value="resource_exam_details" />
    </section>
    <!-- Policies End -->

    <!-- Funded Activites Start -->
    <section v-if="resource_exam_details.office_time">
      <OfficeTime :value="resource_exam_details" />
    </section>
    <!-- Funded Activites End -->

    <!-- Extra start  -->
    <section v-if="resource_exam_details.extra">
      <Extra :value="resource_exam_details" />
    </section>
    <!-- Extra End -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

// import Publication from '../../components/research/Publication.vue'
// import Events from '../../components/research/Events.vue'
import Overview from '../../components/resourceExamSection/Overview.vue'
import DownloadForms from '../../components/resourceExamSection/DownloadForms.vue'
import OfficeTime from '../../components/resourceExamSection/OfficeTime.vue'
import ServiceChart from '../../components/resourceExamSection/ServiceChart.vue'
import ServiceFees from '../../components/resourceExamSection/ServiceFees.vue'
import Extra from '../../components/resourceExamSection/Extra.vue'
export default {
  components: {
    DownloadForms,
    Overview,
    OfficeTime,
    ServiceChart,
    ServiceFees,
    Extra,
  },
  computed: {
    ...mapGetters('resourceExamSection', ['resource_exam_details']),
  },
}
</script>

<style></style>
