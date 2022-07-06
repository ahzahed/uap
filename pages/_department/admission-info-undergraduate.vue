<template>
  <section class="about-section">
    <div id="float">
      <p>CONTENTS</p>
      <div class="floating-tabs">
        <ul class="nav flex-column">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#cse">Why CSE at uap</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#general">General Info</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#generalTiming"
              >General Timing</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#admission-citeria"
              >Admission Criteria</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#special">Special Notes</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#contact"
              >Admission Contact</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
    <Banner :banner="under_admission_info_banner" />
    <Cse :informations="under_why_uap" />

    <General :general-informations="under_general_info" />
    <GeneralTiming :general-informations="under_general_info" />
    <Procedure :procedure-information="under_procedure" />
    <!-- <AdmissionCriteria :criteria-information="criteriaInformation" /> -->
    <Special :special-information="under_other_info" />
    <!-- <Contact :contact-information="contactInformation" /> -->
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
import Cse from '../../components/admission-info/undergraduate/Cse.vue'
import General from '../../components/admission-info/undergraduate/General.vue'
import GeneralTiming from '../../components/admission-info/undergraduate/GeneralTiming.vue'
import Procedure from '../../components/admission-info/undergraduate/Procedure.vue'
// import AdmissionCriteria from '../../components/admission-info/undergraduate/AdmissionCriteria.vue'
import Special from '../../components/admission-info/undergraduate/Special.vue'
// import Contact from '../../components/admission-info/undergraduate/Contact.vue'

export default {
  components: {
    Banner,
    Cse,
    General,
    GeneralTiming,
    Procedure,
    // AdmissionCriteria,
    Special,
    // Contact,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch(
      'depAdmissionInfo/underAdmissionInfoBanner',
      route.params.department
    )
    store.dispatch('depAdmissionInfo/getUnderWhyUap', route.params.department)
    store.dispatch(
      'depAdmissionInfo/getUnderGeneralInfo',
      route.params.department
    )
    store.dispatch(
      'depAdmissionInfo/getUnderProcedure',
      route.params.department
    )
    store.dispatch(
      'depAdmissionInfo/getUnderOtherInfo',
      route.params.department
    )
  },

  computed: {
    ...mapGetters('depAdmissionInfo', [
      'under_admission_info_banner',
      'under_why_uap',
      'under_general_info',
      'under_procedure',
      'under_other_info',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#float {
  // background: $lightblue;
  // width: 20px;
  // height: 100px;
  padding: 20px;
  border-radius: 5px;
  position: fixed;
  top: 70%;
  right: 0;
  z-index: 99;
  @include respond-below(xml) {
    // display: none;
  }
  .floating-tabs {
    margin-left: 5px;

    .nuxt-link-exact-active {
      color: red;
      border-left: 2px solid $darkblue;
      color: $text-color;
      font-weight: 600;
    }
    a {
      display: block;
      color: $silver;
      margin-right: 20px;
      border-left: 2px solid $silver;
      padding-left: 8px;

      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
    }
    p {
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
    }
  }
}
</style>
