<template>
  <section id="memberOfCseFaculty">
    <Banner
      :banner="{
        title: faculty_details.banner_title,
        image: faculty_details.banner_image,
      }"
    />
    <Profile :profile="faculty_details" />
    <Publication :profile="faculty_publication" />
    <AcademicTeaching :profile="faculty_details" />
    <CourseConducted :profile="faculty_details" />
    <QualificationTabs
      :profile="faculty_details"
      :faculty-thesis="faculty_thesis"
      :faculty-research="faculty_research"
      :faculty-resource="faculty_resource"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../../components/helpers/Banner.vue'
import Profile from '../../../components/departmens/member-of-css-faculty/Profile.vue'
import AcademicTeaching from '../../../components/departmens/member-of-css-faculty/AcademicTeaching.vue'
import Publication from '../../../components/departmens/member-of-css-faculty/Publication.vue'
import CourseConducted from '../../../components/departmens/member-of-css-faculty/CourseConducted.vue'
import QualificationTabs from '../../../components/departmens/member-of-css-faculty/QualificationTabs.vue'

export default {
  components: {
    Banner,
    Profile,
    AcademicTeaching,
    Publication,
    CourseConducted,
    QualificationTabs,
  },
  layout: 'HomeLayout',
  asyncData({ route, store }) {
    store.dispatch('faculty/getFacultyDetails', {
      department: route.params.department,
      designation: route.query.designation,
      id: route.query.id,
    })
    store.dispatch('faculty/getFacultyThesis', {
      id: route.query.id,
    })
    store.dispatch('faculty/getFacultyResearch', {
      id: route.query.id,
    })
    store.dispatch('faculty/getFacultyPublications', {
      id: route.query.id,
    })
    store.dispatch('faculty/getFacultyResource', {
      id: route.query.id,
    })
  },
  data() {
    return {
      banner: {
        image: require('@/static/biography.png'),
        title: 'Member of UAP CSE Faculty',
      },
    }
  },
  computed: {
    ...mapGetters('faculty', [
      'faculty_details',
      'faculty_thesis',
      'faculty_research',
      'faculty_resource',
      'faculty_publication'
    ]),
  },
}
</script>

<style></style>
