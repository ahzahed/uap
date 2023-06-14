/* eslint-disable vue/order-in-components */
<template>
  <section id="tution-fees">
    <Banner :banner="admission_result_banner" />
    <Program :list="programmenu" />

    <NuxtChild />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Program from '@/components/tution-fees/Program.vue'
import Banner from '@/components/helpers/Banner.vue'

export default {
  components: {
    Program,
    Banner,
  },
  layout: 'HomeLayout',
  asyncData({ store, route, redirect }) {
    if (route.name === `department-admission-result`) {
      redirect(`/${route.params.department}/admission-result/final`)
    }

    store.dispatch('depAdmissionResult/getAdmissionResult', {
      department: route.params.department,
      type: 'final',
    })
    store.dispatch(
      'depAdmissionResult/getAdmissionResultBanner',
      route.params.department
    )
  },
  data() {
    return {
      programmenu: [
        {
          section: 'Final',
          url: `/${this.$route.params.department}/admission-result/final`,
          active: true,
        },
        {
          section: 'Written',
          url: `/${this.$route.params.department}/admission-result/written`,
          active: false,
        },
        {
          section: 'Waiting',
          url: `/${this.$route.params.department}/admission-result/waiting`,
          active: false,
        },
      ],
    }
  },

  computed: {
    ...mapGetters('depAdmissionResult', ['admission_result','admission_result_banner']),
  },


}
</script>

<style></style>
