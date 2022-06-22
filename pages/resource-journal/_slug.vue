<template>
  <div>
    <!-- <h1>{{ research_details }}</h1> -->
    <!-- About IEERD Start -->
    <section v-if="resourse_journal_details.publicAdGallery">
      <PublicAds :value="resourse_journal_details" />
    </section>
    <!-- About IEERD End  -->

    <!-- Commitees Start -->
    <section v-if="resourse_journal_details.MediaReleases">
      <MediaReleases :value="resourse_journal_details" />
    </section>
    <!-- Commitees End -->

    <!-- Fundings & Forms Start -->
    <section v-if="resourse_journal_details.TenderNotices">
      <TenderNotices :value="resourse_journal_details" />
    </section>
    <!-- Fundings & Forms End -->

    <!-- Policies Start -->
    <section v-if="resourse_journal_details.extra">
      <Extra :value="resourse_journal_details" />
    </section>
    <!-- Policies End -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PublicAds from '../../components/resourceJournal/PublicAds.vue'
import MediaReleases from '../../components/resourceJournal/MediaReleases.vue'
import TenderNotices from '../../components/resourceJournal/TenderNotices.vue'
import Extra from '../../components/resourceJournal/Extra.vue'
export default {
  components: {
    PublicAds,
    MediaReleases,
    TenderNotices,
    Extra,
  },
  computed: {
    ...mapGetters('resourceJournal', ['resourse_journal_details']),
  },
}
</script>

<style></style>
