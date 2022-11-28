<template>
  <section class="depEvent">
    <Banner :banner="banner" />
    <Header
      :list="events_section"
      :department="$nuxt.$route.params.department"
      page="events"
    />
    <nuxt-child></nuxt-child>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '~/halpers/Header.vue'
import Banner from '@/components/helpers/Banner.vue'
export default {

  components: {
    Banner,
    Header,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('depEvent/depEventBanner', route.params.department)
  },

  computed: {
    ...mapGetters('depEvent', ['banner', 'events_section']),
  },
  watch: {
    $route(to, from) {
      if (!to.query.id) {
        this.allEventsSection()
      }
    },
  },
  created() {
    this.allEventsSection()
  },
  methods: {
    allEventsSection() {
      this.$store
        .dispatch('depEvent/allEventsSection', this.$route.params.department)
        .then((res) => {
          // eslint-disable-next-line no-console

          if (res.data.length) {
            this.$router.push(
              `/${this.$route.params.department}/events/${res?.data[0]?.slug}?id=${res?.data[0]?.id}`
            )
          }
        })
    },
  },
}
</script>
