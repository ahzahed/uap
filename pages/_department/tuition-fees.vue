<template>
  <section id="whatIsRequired">
    <Banner :banner="tuition_fees_banner" />
    <Header :list="whatIsRequired" />

    <Graduate
      v-show="whatIsRequired[0].active == true"
      :graduate-cost="graduateCost"
    />
    <Undergraduate
      v-show="whatIsRequired[1].active == true"
      :under-graduate-cost="underGraduateCost"
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
    store.dispatch('depTuitionFees/graduateCost', route.params.department)
    store.dispatch('depTuitionFees/underGraduateCost', route.params.department)
    store.dispatch('depTuitionFees/specialNote', route.params.department)
    store.dispatch(
      'depTuitionFees/getTuitionFeesBanner',
      route.params.department
    )
  },
  data() {
    return {
      banner: {
        img: require('@/static/comittee.png'),
        title: 'Tuition & fees',
      },
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
      'graduateCost',
      'underGraduateCost',
      'specialNote',
      'tuition_fees_banner',
    ]),
  },
}
</script>

<style></style>
