<template>
  <main class="content">

    <Header />
    <Overlaymenu />
    <Loader v-if="loader"/>

  

    <div v-if="DRAWER_STATE" class="backdrop"></div>
    <div class="main">
      <nuxt></nuxt>
    </div>
    <Footer />
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Loader from '~/halpers/PageLoader.vue'
import Header from '~/components/department/Header.vue'
import Overlaymenu from '~/components/department/Overlaymenu'
import Footer from '~/components/department/Footer'
export default {
  components: { Footer,Loader, Header, Overlaymenu,  },
  computed: {
    ...mapState('sidebar', ['drawer', 'loader']),
    DRAWER_STATE: {
      get() {
        return this.drawer
      },
      set(newValue) {
        if (newValue === this.drawer) return
        this.TOGGLE_DRAWER()
      },
    },
  },
 
  methods: {
    ...mapActions('sidebar', ['TOGGLE_DRAWER']),
  },
}
</script>