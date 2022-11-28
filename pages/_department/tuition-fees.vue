<template>
  <section id="whatIsRequired">
    <Banner :banner="tuition_fees_banner" />
    <Header :list="whatIsRequired" />
    <!-- <div style="text-align: center; font-weight: bold" class="mt-5">
      <div
        v-for="(item, i) in programs"
        :key="i"
        class="form-check form-check-inline"
      >
        <input
          :id="item.id"
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          :value="item.program_name"
        />
        <label class="form-check-label" :for="item.id">{{
          item.program_name
        }}</label>
      </div>
    </div> -->
    <Graduate
      v-show="whatIsRequired[0].active == true"
      :programs="graduate_programs"
    />
    <Undergraduate
      v-show="whatIsRequired[1].active == true"
      :programs="undergraduate_programs"
    />

    <SpecialNote
      v-show="whatIsRequired[2].active == true"
      :special-note="specialNote"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
import Header from '../../components/helpers/StaticHeader.vue'
import Graduate from '../../components/departmens/tuition-fees/Graduate.vue'
import Undergraduate from '../../components/departmens/tuition-fees/Undergraduate.vue'
import SpecialNote from '../../components/departmens/tuition-fees/SpecialNote.vue'
export default {
  components: {
    Banner,
    Header,
    Graduate,
    Undergraduate,
    SpecialNote,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    // store.dispatch('depTuitionFees/graduateCost', route.params.department)
    // store.dispatch('depTuitionFees/underGraduateCost', route.params.department)
    store.dispatch('depTuitionFees/specialNote', route.params.department)
    store.dispatch(
      'depTuitionFees/getTuitionFeesBanner',
      route.params.department
    )
    store.dispatch(
      'depTuitionFees/getGraduatePrograms',
      route.params.department
    )
    store.dispatch(
      'depTuitionFees/getUndergraduatePrograms',
      route.params.department
    )
  },
  data() {
    return {
      whatIsRequired: [
        {
          name: 'Graduate cost',
          url: '#',
          active: true,
        },
        {
          name: 'Undergraduate cost',
          url: '#',
          active: false,
        },
        {
          name: 'Special notes',
          url: '#',
          active: false,
        },
      ],
    }
  },
  computed: {
    ...mapGetters('depTuitionFees', [
      // 'graduateCost',
      // 'underGraduateCost',
      'specialNote',
      'tuition_fees_banner',
      'graduate_programs',
      'undergraduate_programs',
    ]),
  },
}
</script>

<style></style>
