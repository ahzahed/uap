/* eslint-disable no-unused-vars */
<template>
  <section id="committee">
    <Banner :banner="committee_banner" />
    <div class="mambars mt-5">
      <!-- Mambars header Start -->
      <Header :list="committee_section" page="committee" />
      <!-- Mambars header End-->
      <!-- Mambars body Start -->
      <div class="mambars_body">
        <nuxt-child></nuxt-child>
      </div>
      <!-- Mambars body End -->
    </div>
  </section>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { mapActions, mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import Header from '~/halpers/Header.vue'

export default {
  name: 'CademicCouncil',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Banner,
    Header,
  },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('committee/getCommitteeBanner')
  },
  data() {
    return {
      banner: {
        img: require('@/static/comittee.png'),
        title: 'Committee',
        details: 'University of Asia Pacific',
      },
    }
  },

  computed: {
    ...mapGetters('committee', ['committee_section', 'committee_banner']),
  },
  watch: {
    $route(to, from) {
      if (!to.query.id) {
        this.allCommitteeSection()
      }
    },
  },
  created() {
    this.allCommitteeSection()
  },
  methods: {
    allCommitteeSection() {
      this.$store.dispatch('committee/allCommitteeSection').then((res) => {
        if (res.data.length) {
          this.$router.push(
            `/committee/${res?.data[0]?.slug}?id=${res?.data[0]?.id}`
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
