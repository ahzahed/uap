<template>
  <section class="about-section">
    <Banner :banner="tuition_waiver_banner" />
    <Header :list="programmenu" />
    <Overview
      v-show="programmenu[0].active == true"
      :overview-informations="overview"
    />
    <NewStudent
      v-show="programmenu[1].active == true"
      :new-student-informations="new_student"
      :specials="new_student_note"
    />
    <CurrentStudent
      v-show="programmenu[2].active == true"
      :current-student-informations="current_student"
      :current-special="current_student_note"
    />
    <SpecialWaiver
      v-show="programmenu[3].active == true"
      :special-waiver-informations="special_waiver"
    />
    <General
      v-show="programmenu[4].active == true"
      :general-informations="general_criteria"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../components/helpers/StaticHeader.vue'
import Banner from '../components/helpers/Banner.vue'
import Overview from '../components/financial-aid/Overview.vue'
import CurrentStudent from '../components/financial-aid/Current-student.vue'
import NewStudent from '../components/financial-aid/New-student.vue'
import SpecialWaiver from '../components/financial-aid/Special-waiver.vue'
import General from '../components/financial-aid/General.vue'
export default {
  components: {
    Banner,
    Header,
    Overview,
    NewStudent,
    CurrentStudent,
    SpecialWaiver,
    General,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('tuitionWaiverFinancial/getTuitionWaiverBanner')
    store.dispatch('tuitionWaiverFinancial/getOverview')
    store.dispatch('tuitionWaiverFinancial/getNewStudent')
    store.dispatch('tuitionWaiverFinancial/getNewStudentNote')
    store.dispatch('tuitionWaiverFinancial/getCurrentStudent')
    store.dispatch('tuitionWaiverFinancial/getCurrentStudentNote')
    store.dispatch('tuitionWaiverFinancial/getSpecialWaiver')
    store.dispatch('tuitionWaiverFinancial/getGeneralCriteria')
  },
  data() {
    return {
      

      programmenu: [
        {
          name: 'Overview',
          url: '#',
          active: true,
        },
        {
          name: 'Waiver For New Students',
          url: '#',
          active: false,
        },
        {
          name: 'Waiver For Current Students',
          url: '#',
          active: false,
        },
        {
          name: 'Special Waiver & Other Assistances',
          url: '#',
          active: false,
        },
        {
          name: 'General Criteria',
          url: '#',
          active: false,
        },
      ],

      overviewInformations: [
        {
          info: 'A large number of students receive financial support from the university every semester. There are merit scholarships, tuition fee waiver on academic performance, freedom fighter’s waiver, BOT members’ and VC’s special  waivers for the deserving students. Tuition fee waiver ranges from 10 to 100 percent of tuition fees depending on the academic achievements.',
        },
        {
          info: 'During Fall 2018, a total 1,737 students received different categories of financial support on grounds of merit and disadvantaged social and economic circumstances.  UAP gave an amount of Taka 3.2 crore to the students as financial support in Fall 2018 – which is 9 percent of the tuition income – much higher than the government mandated 6 percent.',
        },
        {
          info: 'During Spring 2019, financial support volume on grounds of merit and disadvantage was even bigger to cover larger number of beneficiaries. UAP gave an amount of Tk 3.46 crore to over 2,000 students as financial support in Spring 2019 – which comes to 9.4 percent of the tuition income – again, much higher than the government mandated 6 percent. UAP promises to maintain similar supports for deserving students in each semester and will increase the volume of support every coming semester.',
        },
      ],
      newStudentInformations: [
        {
          ssc: '4.00-4.49',
          hsc: '4.00-4.49',
          diploma: '3.50-3.74',
          waiver: '10%',
        },
        {
          ssc: '4.00-4.49',
          hsc: '4.00-4.49',
          diploma: '3.50-3.74',
          waiver: '10%',
        },
        {
          ssc: '4.00-4.49',
          hsc: '4.00-4.49',
          diploma: '3.50-3.74',
          waiver: '10%',
        },
        {
          ssc: '4.00-4.49',
          hsc: '4.00-4.49',
          diploma: '3.50-3.74',
          waiver: '10%',
        },
      ],
      specials: [
        {
          info: '<p><strong>3%</strong> of total seats are reserved for <strong> children of Freedom Fighters</strong>and will be offered <strong> children of Freedom Fighters</strong></p>',
        },
        {
          info: '<p><strong>3%</strong> of total seats are reserved for <strong>poor but meritorious</strong> students from remote underdeveloped regions of Bangladesh and will be offered <strong>100% tuition fee waiver</strong>. (After Admission)</p>',
        },
        {
          info: '<p><strong>3%</strong> tuition fee waiver for <strong>2nd sibling</strong> of a student who is already studying in UAP.</p>',
        },
      ],

      currentStudentInformations: [
        {
          gpa: '3.50-3.74',
          waiver: '25%',
        },
        {
          gpa: '3.75-3.89',
          waiver: '25%',
        },
        {
          gpa: '3.90-3.99',
          waiver: '25%',
        },
        {
          gpa: '4.00',
          waiver: '25%',
        },
      ],
      currentSpecial: [
        {
          info: '<p><strong>Top 3% students</strong> in each department will be offered 100% tuition fee waiver.</p>',
        },
      ],
      specialWaiverInformations: [
        {
          title: "VC's special tuition fee waiver",
          desc: '10%-100% tuition fee waiver for poor but meritorious students  (Based on performance at UAP) (a warded and approved by the Vice Chancellor).',
        },
        {
          title: 'Other Possibilities',
          desc: 'In special cases BOT Members personally offer full or partial financial assistances for UAP students.',
        },
        {
          title: 'Department based Schoralship/Grants',
          desc: "There are options for special Scholarships/ Grants / Travel Bursaries in different departments for their students, such as Habibur Rahman Scholarship (Department of Pharmacy), Teachers' Endowment for Students of Architecture, Rafiq Azam Travel Bursary (Department of Architecture) etc. For details please visit the department pages.",
        },
      ],
      generalInformations: [
        {
          info: 'Has to be a regular student.',
        },
        {
          info: 'Student must take full load (as mentioned in department prospectus) in the concerned semester',
        },
        {
          info: 'Students taking repeat exams are not eligible for waiver.',
        },
        {
          info: 'Has a record of good conduct.',
        },
        {
          info: "Has no outstanding dues (for VC's special waiver and merit based waiver)",
        },
        {
          info: "Financially insolvent (for VC's special waiver).",
        },
        {
          info: "No 'F' grade in any subject in the concerned semester (Freedom Fighters Quota waiver)",
        },
        {
          info: "Has a minimum GPA of 3.5 and 3.0 for VC's special waiver",
        },
      ],
    }
  },
  computed: {
    ...mapGetters('tuitionWaiverFinancial', [
      'tuition_waiver_banner',
      'overview',
      'new_student',
      'new_student_note',
      'current_student',
      'current_student_note',
      'special_waiver',
      'general_criteria',
    ]),
  },
}
</script>
