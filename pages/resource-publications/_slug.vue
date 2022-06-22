<template>
  <div>
    <!-- <h1>{{ research_details }}</h1> -->
    <!-- About IEERD Start -->
    <section v-if="resourse_publication_details.journals">
      <Journals :value="resourse_publication_details" />
    </section>
    <!-- About IEERD End  -->

    <!-- Commitees Start -->
    <section v-if="resourse_publication_details.e_resources_file">
      <EResource :value="resourse_publication_details" />
    </section>
    <!-- Commitees End -->

    <!-- Fundings & Forms Start -->
    <section v-if="resourse_publication_details.uap_booklets">
      <UapBooklet :value="resourse_publication_details" />
    </section>
    <!-- Fundings & Forms End -->

    <!-- Policies Start -->
    <section v-if="resourse_publication_details.department_booklets">
      <DepartmentBooklets :value="resourse_publication_details" />
    </section>
    <!-- Policies End -->

    <!-- Policies Start -->
    <section v-if="resourse_publication_details.news_letter_file">
      <Newsletter :value="resourse_publication_details" />
    </section>
    <!-- Policies End -->

    <!-- Policies Start -->
    <section v-if="resourse_publication_details.extra">
      <Extra :value="resourse_publication_details" />
    </section>
    <!-- Policies End -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DepartmentBooklets from '../../components/resourcePublications/DepartmentBooklets.vue'
import EResource from '../../components/resourcePublications/EResource.vue'
import Journals from '../../components/resourcePublications/Journals.vue'
import Newsletter from '../../components/resourcePublications/Newsletter.vue'
import UapBooklet from '../../components/resourcePublications/UapBooklet.vue'

import Extra from '../../components/resourceLibrary/Extra.vue'
export default {
  components: {
    DepartmentBooklets,
    EResource,
    Journals,
    Newsletter,
    UapBooklet,
    Extra,
  },
  computed: {
    ...mapGetters('resourcePublications', ['resourse_publication_details']),
  },
}
</script>

<style></style>
