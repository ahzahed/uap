/* eslint-disable no-unused-vars */
<template>
  <section id="research">
    <Banner :banner="resourse_journal_banner" />
    <div class="mambars mt-5">
      <!-- Mambars header Start -->
      <Header :list="resourse_journal_section" page="resource-journal" />
      <!-- Mambars header End-->
      <!-- Mambars body Start -->

      <nuxt-child></nuxt-child>

      <!-- Mambars body End -->
    </div>
  </section>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import Header from '../components/resourceJournal/Header.vue'
// import Header from '~/halpers/HeaderDaynamic.vue'

export default {
  // name: 'CademicCouncil',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Banner,
    Header,
  },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('resourceJournal/getResourseJournalBanner')
  },
  

  computed: {
    ...mapGetters('resourceJournal', [
      'resourse_journal_banner',
      'resourse_journal_section',
      'resourse_journal_details',
    ]),
  },
  watch: {
    $route(to, from) {
      if (!to.query.id) {
        this.getResourceJournalSection()
      }
    },
  },
  created() {
    this.getResourceJournalSection()
  },

  methods: {
    getResourceJournalSection() {
      this.$store
        .dispatch('resourceJournal/getResourceJournalSection')
        .then((res) => {
          if (res.data.length) {
            this.$router.push(
              `/resource-journal/${res?.data[0]?.slug}?id=${res?.data[0]?.id}`
            )

            this.$store.dispatch(
              'resourceJournal/getRessourceJournalDetailsFirstLoad',
              res?.data[0]?.id
            )
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
.banner-section {
  padding-bottom: 110px;
}
</style>
