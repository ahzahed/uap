<template>
  <section class="authorities-section">
    <Banner :banner="syndicate_banner" />
    <div class="mambars mt-5">
      <!-- Mambars header Start -->
      <!-- <Header :list="syndicate_section" /> -->
      <div class="mambars_header">
        <div class="container">
          <div class="col-md-12 mx-auto text-center">
            <ul class="nav justify-content-center">
              <li
                v-for="(item, i) in syndicate_section"
                :key="'item_' + i"
                class="nav-item"
              >
                <nuxt-link
                  class="nav-link my-3"
                  :to="{
                    path: `/syndicate-academic-council/${item.slug}`,
                    query: { id: item.id },
                  }"
                  >{{ item.section }}</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Mambars header End-->
      <!-- Mambars body Start -->
      <div class="mambars_body">
        <!-- <Members
          v-show="mambarmenu[0].active == true"
          :members="mambarList"
          :chairperson="chairperson"
        />
        <Members
          v-show="mambarmenu[1].active == true"
          :members="mambarList1"
          :chairperson="chairperson1"
        /> -->
        <nuxt-child></nuxt-child>
      </div>
      <!-- Mambars body End -->
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'
// import Header from '../components/helpers/Header.vue'
// import Members from '../components/academicCouncil/Members.vue'

export default {
  name: 'AcademicCouncil',
  components: {
    // Header,
    Banner,
  },
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('syndicate/getSyndicateBanner')
  },
  data() {
    return {
      banner: {
        img: require('@/static/authorities-banner.png'),
        title: 'Syndicate and Academic Council',
        details:
          'MEMBERS OF SYNDICATE OF UNIVERSITY OF ASIA PACIFIC (AS PER PRIVATE UNIVERSITY ACT 2010)',
      },
    }
  },
  computed: {
    ...mapGetters('syndicate', ['syndicate_section', 'syndicate_banner']),
  },
  watch: {
    $route(to, from) {
      this.allSyndicateSection()
    },
  },
  created() {
    this.allSyndicateSection()
  },
  methods: {
    allSyndicateSection() {
      this.$store
        .dispatch('syndicate/allSyndicateSection')
        .then((res) => {
          if (res.data.length && !this.$route.query.id) {
            // eslint-disable-next-line no-console

            this.$router.push(
              `/syndicate-academic-council/${res?.data[0]?.slug}?id=${res?.data[0]?.id}`
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
