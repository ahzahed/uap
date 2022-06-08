<template>
  <section id="administration">
    <Banner :banner="administration_banner" />
    <Header
      v-if="administration_section.length"
      :list="administration_section"
      page="administration"
    />
    <nuxt-child></nuxt-child>
  </section>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapActions, mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'

import Header from '~/halpers/Header.vue'
export default {
  components: {
    Banner,
    Header,
  },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('administration/getAdministrationBanner')
  },
  data() {
    return {
      banner: {
        banner: require('@/static/adminastration.png'),
        title: 'Administration',
        details: 'Campus Administration University of Asia Pacific',
      },
    }
  },
  computed: {
    ...mapGetters('administration', [
      'administration_section',
      'administration_banner',
    ]),
  },
  watch: {
    $route(to, from) {
      if (!to.query.id) {
        this.allAdministrationSection()
      }
    },
  },
  created() {
    this.allAdministrationSection()
  },
  methods: {
    allAdministrationSection() {
      this.$store
        .dispatch('administration/allAdministrationSection')
        .then((res) => {
          if (res.data.length) {
            // eslint-disable-next-line no-console

            this.$router.push(
              `/administration/${res?.data[0]?.slug}?id=${res?.data[0]?.id}`
            )
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
  },
}
</script>

<style></style>
