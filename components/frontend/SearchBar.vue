<template>
  <transition name="slide" appear>
    <div
      v-if="searchbar"
      v-click-outside="Toggle_SearchBar"
      class="search-overlay"
    >
      <div class="container">
        <div class="col-md-11 mx-auto">
          <div class="form-group has-search">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Search"
            />
            <!-- {{ searchResult }} -->
            <!-- <div v-for="(item, i) in searchResult" :key="i">
              <a :href="item.link">{{ item.title }}</a>
            </div> -->
            <button class="btn primary-btn mt-2" @click="x(search)">
              Search
            </button>
            <i class="fas fa-search search-icon"></i>
          </div>

          <!-- Search Result Start -->
          <div class="row pb-5 x">
            <div
              v-for="(item, key) in searchResult"
              :key="'menu_' + key"
              class="col-md-6 col-sm-12 search-col"
            >
              <div class="col-md-12">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <nuxt-link v-if="item.link" class="nav-link" :to="item.link"
                      >{{ item.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- <div class="row">
            <div
              v-for="(menu, i) in SearchMenus"
              :key="'col_' + i"
              class="col-md-4 col-lg-4 col-6 search-col"
              :class="menu.title == '' ? 'search-flex' : ''"
            >
              <template v-if="menu.title == ''">
                <div class="col-md-12">
                  <h3>{{ menu.title }}</h3>
                  <ul class="navbar-nav">
                    <li
                      v-for="(item, key) in menu.links"
                      :key="'menu_' + key"
                      class="nav-item"
                    >
                      <nuxt-link class="nav-link" :to="item.link"
                        >{{ item.text }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </template>
              <template v-else>
                <h3>{{ menu.title }}</h3>
                <ul class="navbar-nav">
                  <li
                    v-for="(item, key) in menu.links"
                    :key="'menu_' + key"
                    class="nav-item"
                  >
                    <nuxt-link class="nav-link" :to="item.link"
                      >{{ item.text }}
                    </nuxt-link>
                  </li>
                </ul>
              </template>
            </div>
          </div> -->
          <!-- Search Result End -->
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      search: '',
      SearchMenus: [
        {
          title: 'FAQ',
          links: [
            {
              text: 'How to apply?',
              link: '/apply',
            },
            {
              text: 'How much does it cost?',
              link: '/library',
            },
            {
              text: 'Where is it?',
              link: '/our-services',
            },
            {
              text: 'What is the Academic Calendar?',
              link: '/our-clients',
            },
          ],
        },
        {
          title: 'Top Searches:',
          links: [
            {
              text: 'Campus',
              link: '/about-us',
            },
            {
              text: 'Tuition Fees',
              link: '/our-team',
            },
            {
              text: 'Scholarships',
              link: '/our-services',
            },
            {
              text: 'Application',
              link: '/our-clients',
            },
          ],
        },
        {
          title: '',
          links: [
            {
              text: 'Schedule',
              link: '/about-us',
            },
            {
              text: 'Sports',
              link: '/our-team',
            },
            {
              text: 'Graduate',
              link: '/our-services',
            },
            {
              text: 'Programs',
              link: '/our-clients',
            },
          ],
        },
      ],
    }
  },
  computed: {
    ...mapState('sidebar', ['searchbar']),
    ...mapGetters('search', ['searchResult']),
  },
  methods: {
    ...mapActions('sidebar', ['Toggle_SearchBar']),
    x(search) {
      this.$store.dispatch('search/getSearchValue', search)
    },
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_searchoverly.scss';
.slide-leave-active,
.fade-enter-active {
  transition: all 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.slide-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-50%);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
.x {
  max-height: 400px;
  overflow: scroll;
}
</style>
