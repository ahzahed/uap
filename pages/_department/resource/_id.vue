<template>
  <section id="depResouce">
    <Banner :banner="research_resource_banner" />

    <Intro v-if="resource.title_des" :value="resource.title_des" />
    <Gallery v-if="resource.gallery" :value="resource.gallery" />
    <TitleFile v-if="resource.title_file" :value="resource.title_file" />
    <Faq v-if="resource.faq" :value="resource.faq" />
    <Profile v-if="resource.profile" :value="resource.profile" />
    <Event v-if="resource.event" :value="resource.event" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../../components/helpers/Banner.vue'
import Intro from '../../../components/departmens/resourceResearch/Intro.vue'
import Gallery from '../../../components/departmens/resourceResearch/Gallery.vue'
import TitleFile from '../../../components/departmens/resourceResearch/TitleFile.vue'
import Faq from '../../../components/departmens/resourceResearch/Faq.vue'
import Profile from '../../../components/departmens/resourceResearch/Profile.vue'
import Event from '../../../components/departmens/resourceResearch/Event.vue'

export default {
  components: {
    Banner,
    Intro,
    Gallery,
    TitleFile,
    Faq,
    Profile,
    Event,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('depResearchResource/getResearchResourceBanner', {
      department: route.params.department,
      id: route.params.id,
    })
    store.dispatch('depResearchResource/getResource', {
      department: route.params.department,
      id: route.params.id,
    })
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('depResearchResource', [
      'research_resource_banner',
      'resource',
    ]),
  },
}
</script>

<style></style>
