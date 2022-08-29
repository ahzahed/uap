<template>
  <section id="resources-academic">
    <Banner :banner="rc_banner" />

    <!-- Mambars header Start -->
    <Header :list="programmenu" />
    <NuxtChild />
    <!-- Mambars header End-->
    <!-- Mambars body Start -->

    <!-- <Overview
      v-show="academic[0].active == true"
      :overview="overview"
      :overview-details="overviewDetails"
    />
    <Laboratories
      v-show="academic[1].active == true"
      :laboratories="laboratories"
      :laboratories-details="laboratoriesDetails"
    />
    <ListOfAllLab
      v-show="academic[2].active == true"
      :laboratories="laboratories"
      :laboratories-details="laboratoriesDetails"
    /> -->
    <!-- <Members
          v-show="mambarmenu[1].active == true"
          :members="mambarList1"
          :chairperson="chairperson1"
        /> -->

    <!-- Mambars body End -->
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
// import Overview from '../../components/resourcesAcademic/Overview.vue'
// import Laboratories from '../../components/resourcesAcademic/Laboratories.vue'
// import ListOfAllLab from '../../components/resourcesAcademic/ListOfAllLab.vue'
import Header from '@/components/tution-fees/Program.vue'

export default {
  name: 'AcademicCouncil',
  components: {
    // Overview,
    // Laboratories,
    // ListOfAllLab,
    Header,
    Banner,
  },
  layout: 'HomeLayout',
  asyncData({ store, route, redirect }) {
    if (route.name === 'resources-academic') {
      redirect('/resources-academic/overview')
    }

    store.dispatch('resourcesAcademic/getRcBanner')
  },
  data() {
    return {
      programmenu: [
        {
          section: 'Classroom',
          url: '/resources-academic/overview',
          active: true,
        },
        {
          section: 'Laboratories & Workshops',
          url: '/resources-academic/laboratories',
          active: false,
        },
        {
          section: 'List of all Lab & Workshops',
          url: '/resources-academic/listOfAllLab',
          active: false,
        },
      ],

      academic: [
        {
          section: 'Overview',
          url: '#',
          active: true,
        },
        {
          section: 'Laboratories & Workshops',
          url: '#',
          active: false,
        },
        {
          section: 'List of all Lab & Workshops',
          url: '#',
          active: false,
        },
      ],

      
      overviewDetails:
        'UAP puts ample focus on developing its classroom and lab facilities with necessary modern equipment. About the classrooms UAP maintains a unique policy by making every classroom available for all departments so that a sense of cohesiveness and communal atmosphere is maintained within varied departments. The classrooms are also varied in sizes accommodating 30 to 60 students. In every semester the classroom slots are allocated centrally to each department according to their requisition.  The rest of the classes are kept free to fulfill additional or temporary requirements of each department whenever they need one. This unique system allows the students and faculties from one department to interact with students from other departments and to create a sense of oneness. The class rooms are air conditioned and equipped with computer, multimedia projector, Sound system (fixed or on demand), Wi-Fi etc.',
      laboratoriesDetails:
        'n contrast to the Classrooms, the Lab and workshop facilities are kept unique to the individual departments and thus help to create the general identity of each department. As the classrooms are taken care of by the central authority, departments can put their undivided focuses on lab developments. University has allocated ample budget and encourage departments to equip the lab/workshops with state of the art equipment and facilities. The labs are pivotal part to ensure UAP’s commitment of combining theory with practical hand-on learning. In cases the departments can share their resources.',
    }
  },
  computed: {
    ...mapGetters('resourcesAcademic', ['rc_banner']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
</style>
