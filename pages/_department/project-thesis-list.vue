<template>
  <section id="projectThesis">
    <Banner :banner="project_the_banner" />
    <List :lists="project_the_body"/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
import List from '../../components/departmens/project-thesis-list/Lists.vue'

export default {
  components: {
    Banner,
    List,
  },
  layout: 'HomeLayout',
   asyncData({ store, route }) {
    store.dispatch('depProjectThe/getProjectTheBanner', route.params.department)
    store.dispatch('depProjectThe/getProjectTheBody', route.params.department)
    
  },
  data() {
    return {
      banner: {
        img: require('@/static/comittee.png'),
        title: 'Project & Thesis List',
      },
    }
  },
  computed: {
    ...mapGetters('depProjectThe', ['project_the_banner','project_the_body']),
  },
}
</script>

<style></style>
