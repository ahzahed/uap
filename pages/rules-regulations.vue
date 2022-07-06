<template>
  <section id="administration">
    <Banner :banner="rules_banner" />
    <Header
      v-if="rules_section.length"
      :list="rules_section"
      page="rules-regulations"
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
    store.dispatch('rules/getRulesBanner')
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
    ...mapGetters('rules', ['rules_banner', 'rules_section']),
  },
  watch: {
    $route(to, from) {
      if (!to.query.id) {
        this.allRulesSection()
      }
    },
  },
  created() {
    this.allRulesSection()
  },
  methods: {
    allRulesSection() {
      this.$store
        .dispatch('rules/allRulesSection')
        .then((res) => {
          if (res.data.length) {
            // eslint-disable-next-line no-console

            this.$router.push(
              `/rules-regulations/${res?.data[0]?.slug}?id=${res?.data[0]?.id}`
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
