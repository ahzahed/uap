<template>
  <transition  name="slide" appear>
    <div
      v-if="searchbar"
      v-click-outside="Toggle_SearchBar"
      class="search-overlay"
    >
      <div class="container">
        <div class="col-md-11 mx-auto">
          <div class="form-group has-search">
            <input type="text" class="form-control" placeholder="Search" />
          <i class="fas fa-search search-icon"></i>
          </div>
          <div class="row">
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
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState, mapActions } from 'vuex'
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
  },
  methods: {
    ...mapActions('sidebar', ['Toggle_SearchBar']),
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_searchoverly.scss';
.slide-leave-active,
.fade-enter-active {
  transition: all .5s cubic-bezier(.65, .05, .36, 1);
}
.slide-enter-active,
.fade-leave-active {
  transition: all .5s cubic-bezier(.65, .05, .36, 1);
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
</style>
