/* eslint-disable no-unused-vars */
<template>
  <section id="committee">
    <Banner :banner="committee_banner" />
    <div class="mambars mt-5">
      <!-- Mambars header Start -->
      <Header :list="committee_section" page="committee" />
      <!-- Mambars header End-->
      <!-- Mambars body Start -->
      <div class="mambars_body mt-5">
        <nuxt-child></nuxt-child>
      </div>
      <!-- Mambars body End -->
    </div>
  </section>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
import Header from '~/halpers/Header.vue'

export default {
  // name: 'CademicCouncil',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Banner,
    Header,
  },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('committee/getCommitteeBanner')
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
.mambars {
  background: #f0f0fa;
  .mambars_header {
    border-bottom: 1px solid #cccccc;
    padding: 40px 0;
    .nav-item {
      .nav-link {
        font-size: 17px;
        // font-weight: 500;
        color: $darkblue;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        border: 1px solid transparent;
        transition: all 0.3s ease-in-out;
        &:hover {
          border: 1px solid $darkblue;
        }
        &:first-child {
          margin-right: 10px;
        }
      }
      .nuxt-link-active {
        background-color: $darkblue;
        border: 1px solid $darkblue;
        color: $white;
        font-weight: 500;
      }
    }
  }
  .mambars_body {
    padding: 60px 0;
    .members {
      .card {
        margin-bottom: 20px;
        .card-header {
          background-color: #f0f0fa;
          color: #000;
          font-size: 1.2rem;
          font-weight: 500;
          padding: 10px;
        }
        .card-body {
          padding: 10px;
        }
      }
    }
  }
}
</style>
