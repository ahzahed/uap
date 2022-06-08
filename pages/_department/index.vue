<template>
  <section class="depatment-section">
    <Banner :banners="departmentHeader" />

    <InsideUap
      :vision="vision"
      :mission="mission"
      :inside-up="insideUp"
      :inside-video="insideVideo"
    />
    <Message :message="head_message" />
    <FactFigure :department-fact-figure="departmentFactFigure" />
    <Alumni :alumni-information="alumniStories" />
    <News
      :latest-information="latestInformation"
      :recent-information="recentInformation"
      :research-information="researchInformation"
    />
  </section>
</template>

<script>
// import Banner from '../../components/helpers/Banner.vue'
import { mapGetters } from 'vuex'
import InsideUap from '../../components/departmens/homepage/InsideUap.vue'
import Alumni from '../../components/departmens/homepage/Alumni.vue'
import Message from '../../components/departmens/homepage/Message.vue'
import FactFigure from '../../components/departmens/homepage/FactFigure.vue'
import News from '../../components/departmens/homepage/News.vue'
import Banner from '~/components/frontend/Banner.vue'
export default {
  components: {
    Banner,
    InsideUap,
    Message,
    FactFigure,
    Alumni,
    News,
  },
  layout: 'HomeLayout',

  asyncData({ store, route, redirect }) {
    store.dispatch('department/getDepartmentList').then((res) => {
      // eslint-disable-next-line array-callback-return
      const dep = res.data.find((o) => o.department === route.params.department)
      if (dep) {
        store.dispatch('department/departmentHeader', route.params.department)
        store.dispatch(
          'department/getDepartmentVision',
          route.params.department
        )
        store.dispatch(
          'department/getDepartmentMission',
          route.params.department
        )
        store.dispatch(
          'department/getDepartmentInsideUap',
          route.params.department
        )
        store.dispatch(
          'department/departmentInsideVideo',
          route.params.department
        )
        store.dispatch(
          'department/getDepartmentHeadMsg',
          route.params.department
        )
        store.dispatch('depAlumni/getAlumniStories', route.params.department)
        store.dispatch(
          'department/getDepartmentFactFigure',
          route.params.department
        )
        store.dispatch('depAlumni/alumniStories', route.params.department)
      } else {
        redirect('/404')
      }
    })
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('department', [
      'vision',
      'mission',
      'insideUp',
      'insideVideo',
      'head_message',
      'departmentHeader',
      'departmentFactFigure',
    ]),
    ...mapGetters('depAlumni', ['alumniStories']),
  },
}
</script>
