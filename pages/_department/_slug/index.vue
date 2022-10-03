<template>
  <section class="depatment-section mb-5">
    <Banner :banner="dynamic_header" />
    <TitleDes v-if="dynamic_page.tile_des" :value="dynamic_page.tile_des" />
    <Gallery v-if="dynamic_page.galley" :value="dynamic_page.galley" />
    <TitleFile v-if="dynamic_page.file" :value="dynamic_page.file" />
    <Faq v-if="dynamic_page.faq" :value="dynamic_page.faq" />
    <Profile v-if="dynamic_page.profile" :value="dynamic_page.profile" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../../components/helpers/Banner.vue'
import TitleDes from '../../../components/departmens/resourceResearch/Intro.vue'
import Gallery from '../../../components/departmens/resourceResearch/Gallery.vue'
import TitleFile from '../../../components/departmens/resourceResearch/TitleFile.vue'
import Faq from '../../../components/departmens/resourceResearch/Faq.vue'
import Profile from '../../../components/departmens/resourceResearch/Profile.vue'
export default {
  components: {
    Banner,
    TitleDes,
    Gallery,
    TitleFile,
    Faq,
    Profile,
  },
  layout: 'HomeLayout',

  asyncData({ store, route }) {
    store.dispatch('dynamic/getDynamicHeader', route.params)
    store.dispatch('dynamic/getDynamicPage', route.params)
  },

  computed: {
    ...mapGetters('dynamic', ['dynamic_header', 'dynamic_page']),
  },
}
</script>
