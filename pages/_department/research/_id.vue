<template>
  <section id="depResouce">
    <Banner :banner="research_resource_banner" />
    <Intro v-if="research.title_des" :value="research.title_des" />
    <Gallery v-if="research.gallery" :value="research.gallery" />
    <TitleFile v-if="research.title_file" :value="research.title_file" />
    <Faq v-if="research.faq" :value="research.faq" />
    <Profile v-if="research.profile" :value="research.profile" />
    <Event v-if="research.event" :value="research.event" />
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
    store.dispatch('depResearchResource/getResearch', {
      department: route.params.department,
      id: route.params.id,
    })
  },
  data() {
    return {
      banner: {
        img: require('@/static/comittee.png'),
        title: 'BSc. Curriculum',
      },
    }
  },
  computed: {
    ...mapGetters('depResearchResource', [
      'research_resource_banner',
      'research',
    ]),
  },
}
</script>

<style></style>
