<template>
  <section class="about-section">
    <Banner :banner="faculty_banner" />

    <Header
      :list="all_designation"
      :department="$nuxt.$route.params.department"
      page="faculty"
    />
    <nuxt-child></nuxt-child>
    <!-- <HeadOfDepartment
      v-show="programmenu[0].active == true"
      :head-list="headList"
    />
    <Professor
      v-show="programmenu[1].active == true"
      :professor-list="professorList"
    />
    <AssociateProfessors
      v-show="programmenu[2].active == true"
      :associate-list="associateList"
    />
    <AssistantProfessors
      v-show="programmenu[3].active == true"
      :assistant-list="assistantList"
    />
    <Lecturers
      v-show="programmenu[4].active == true"
      :lecturer-list="lecturerList"
    />
    <FullTimeFacultyMembers
      v-show="programmenu[5].active == true"
      :full-list="fullList"
    /> -->
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
// import HeadOfDepartment from '../../components/departmens/faculty/HeadOfDepartment.vue'
// import Professor from '../../components/departmens/faculty/Professor.vue'
// import AssociateProfessors from '../../components/departmens/faculty/AssociateProfessors.vue'
// import AssistantProfessors from '../../components/departmens/faculty/AssistantProfessors.vue'
// import Lecturers from '../../components/departmens/faculty/Lecturers.vue'
// import FullTimeFacultyMembers from '../../components/departmens/faculty/FullTimeFacultyMembers.vue'
import Header from '~/halpers/Header.vue'

export default {
  components: {
    Banner,
    Header,
    // HeadOfDepartment,
    // Professor,
    // AssociateProfessors,
    // AssistantProfessors,
    // Lecturers,
    // FullTimeFacultyMembers,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('faculty/getFacultyBanner', route.params.department)
    // store.dispatch('faculty/getAllDesignation', route.params.department)
  },

  computed: {
    ...mapGetters('faculty', ['faculty_banner', 'all_designation']),
  },

  watch: {
    $route(to, from) {
      if (!to.query.id) {
        this.getAllDesignation()
      }
    },
  },
  created() {
    this.getAllDesignation()
  },
  methods: {
    getAllDesignation() {
      this.$store
        .dispatch('faculty/getAllDesignation', this.$route.params.department)
        .then((res) => {
          // eslint-disable-next-line no-console

          if (res.data.length) {
            this.$router.push(
              `/${this.$route.params.department}/faculty/${res?.data[0]?.slug}?id=${res?.data[0]?.id}`
            )
          }
        })
    },
  },
}
</script>
