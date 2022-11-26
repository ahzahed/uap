<template>
  <header id="header">
    <TopHeader />
    <div class="header-bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-7 col-xs-12 col-sm-9 col-md-9 col-lg-3">
            <nuxt-link class="logo" to="/">
              <img src="@/static/logo-big-black.png" />
            </nuxt-link>
          </div>
          <div class="col-5 col-xs-12 col-sm-3 col-md-3 col-lg-9">
            <ul class="navbar nav" @mouseleave="hideMegaMenu()">
              <!-- <li class="nav-item">
                <nuxt-link class="nav-link" to="/">Home & About</nuxt-link>
              </li> -->
              <li class="nav-item">
                <!-- <a class="nav-link p-0" href="/">Home</a> -->
                <nuxt-link
                  class="nav-link p-0"
                  :to="`/${$route.params.department}`"
                >
                  Home
                </nuxt-link>
              </li>
              <li
                v-for="(item, i) in Menu.slice(0, 4)"
                :key="i"
                class="nav-item"
              >
                <a
                  class="nav-link p-0"
                  :class="index === i ? 'active' : ''"
                  href="javascript:void(0)"
                  @mouseover="mouseEvent($event, 'item', i, item.id)"
                  >{{ item.title }}</a
                >
                <MegaMenu
                  v-if="showMegaMenu && index === i"
                  :mega-menu="megamenu"
                />
              </li>
              <li class="btn header_icon" @click.stop="Toggle_SearchBar">
                <i class="fas fa-search"></i>
                <!-- <span class="header_icon_title">Search</span> -->
              </li>
              <li
                class="btn header_icon"
                @click="getQuickLinks"
                @click.stop="TOGGLE_DRAWER"
              >
                <template v-if="!DRAWER_STATE">
                  <i class="fas fa-bars"></i>
                  <!-- <span class="header_icon_title">Menu </span> -->
                </template>
                <!-- <template v-else>
                  <span class="material-icons"> close </span>
                </template> -->
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <SearchBar />
  </header>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
// eslint-disable-next-line import/named
import { Menu } from '../../data/departmantMenu'
import eventBus from '../../eventBus'
import SearchBar from '../frontend/SearchBar.vue'
import TopHeader from './TopHeader.vue'
import MegaMenu from './MegaMenu.vue'
export default {
  components: {
    MegaMenu,
    TopHeader,
    SearchBar,
  },
  data() {
    return {
      Menu,
      showMegaMenu: false,
      index: null,
      megamenu: [],
    }
  },

  computed: {
    ...mapState('sidebar', ['drawer']),
    ...mapGetters('dynamic', ['dynamic_menu', 'dynamic_submenu']),

    DRAWER_STATE: {
      get() {
        return this.drawer
      },
    },
  },
  mounted() {
    eventBus.$on('hide-mega-menu', () => {
      this.showMegaMenu = false
      this.megamenu = []
    })

    this.$nextTick(function () {
      window.addEventListener('scroll', function () {
        const navbar = document.getElementById('header')
        const navClasses = navbar.classList
        if (document.documentElement.scrollTop >= 150) {
          if (navClasses.contains('shrink') === false) {
            navClasses.toggle('shrink')
          }
        } else if (navClasses.contains('shrink') === true) {
          navClasses.toggle('shrink')
        }
      })
    })
  },
  beforeDestroy() {
    eventBus.$off('hide-mega-menu')
  },
  methods: {
    getQuickLinks() {
      this.$store.dispatch('quickLinks/getLinks')
      this.$store.dispatch(
        'dynamic/getDynamicMenu',
        this.$route.params.department
      )
    },
    hideMegaMenu() {
      eventBus.$emit('hide-mega-menu')
    },
    async mouseEvent(event, source, i, id) {
      const subMenuResponse = await this.$axios.get(
        `submenu/${this.$route.params.department}/${id}`
      )
      if (source === 'item') {
        event.stopPropagation()
        this.index = i
        this.megamenu = [...Menu[i].subMenus, ...subMenuResponse.data]
        if (this.megamenu.length > 0) {
          this.showMegaMenu = true
        } else {
          this.showMegaMenu = false
        }
      }
    },

    ...mapActions('sidebar', ['TOGGLE_DRAWER', 'Toggle_SearchBar']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_header.scss';
</style>
