/* eslint-disable no-console */

<template>
  <div
    v-if="DRAWER_STATE"
    v-click-outside="TOGGLE_DRAWER"
    class="uap-overlaymenu"
    :class="DRAWER_STATE ? 'overlay-open ' : ''"
  >
    <div class="navigation-top">
      <div class="navigation-top__inner">
        <nuxt-link class="logo" to="/">
          <img width="" src="@/static/logo-big-black.png" />
        </nuxt-link>
        <a href="javascript:void(0)" class="close-icon" @click="TOGGLE_DRAWER">
          <span class="name">Close</span
          ><i class="fas fa-times close-icons"></i>
        </a>
      </div>
    </div>
    <div class="overlay-menu-content">
      <div class="site-nav__inner">
        <nav class="nav-primary">
          <div class="row h-100">
            <div class="col-md-4 col-sm-6 col-lg-3 col-xl-3 h-100">
              <ul v-if="width > 991" class="nav-primary__list">
                <li class="nav-item">
                  <a href="javascript:void(0)" class="nav-link" @click="club()">
                    Club
                  </a>
                </li>

                <li
                  v-for="(item, i) in Menu.slice(5)"
                  :key="i"
                  class="nav-item"
                >
                  <nuxt-link v-if="item.link" :to="item.link" class="nav-link">
                    <p @click="TOGGLE_DRAWER">{{ item.title }}</p>
                  </nuxt-link>
                  <a
                    v-else
                    href="javascript:void(0)"
                    class="nav-link"
                    @click="setCategory(item)"
                  >
                    {{ item.title }}
                  </a>
                </li>
              </ul>
              <ul v-else class="nav-primary__list">
                <li v-for="(item, i) in Menu" :key="i" class="nav-item">
                  <a
                    href="javascript:void(0)"
                    class="nav-link"
                    @click="setCategory(item)"
                  >
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="nav-link"
                    @click="setCategory(item)"
                  >
                    {{ item.title }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 col-lg-3 col-sm-6 col-xl-3 h-100">
              <div class="nav-child">
                <ul v-if="sub_categories.length" class="nav-child__list">
                  <li
                    v-for="(item, i2) in sub_categories"
                    :key="'menu2_' + i2"
                    class="nav-item"
                  >
                    <nuxt-link
                      :to="item.link"
                      class="nav-link"
                      @click.native="subCategory()"
                    >
                      {{ item.title }}
                    </nuxt-link>
                  </li>
                </ul>
                <ul v-if="club_type.length > 0">
                  <li
                    v-for="(item, i3) in club_type"
                    :key="'menu2_' + i3"
                    class="nav-item"
                  >
                    <nuxt-link
                      :to="'/club/' + item.slug"
                      class="nav-link"
                      @click.native="subCategory()"
                    >
                      {{ item.club_name }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <nav
          class="nav-quick-links-nav"
          aria-labelledby="quick_links_nav-label"
        >
          <div class="nav-quick-links-nav__wrapper">
            <strong
              id="quick_links_nav-label"
              class="nav-quick-links-nav__label"
            >
              Quick Links
              <i class="fas fa-chevron-right"></i>
            </strong>
            <ol class="nav-quick-links-nav__list">
              <li
                v-for="(item, i) in nav"
                :key="'item_' + i"
                class="nav-quick-links-nav__item"
              >
                <nuxt-link
                  :to="item.url"
                  class="nav-quick-links-nav__link"
                  data-attribute="find-a-department"
                  >{{ item.title }}</nuxt-link
                >
              </li>
            </ol>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { Menu } from '../../data/menu.js'
import { nav } from '@/data/navfooter'
export default {
  // asyncData({ store }) {
  //   store.dispatch('club/getClubType')
  // },
  data() {
    return {
      nav,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      Menu,
      sub_categories: [],
    }
  },
  computed: {
    ...mapState('sidebar', ['drawer']),
    ...mapGetters('club', ['club_type']),

    DRAWER_STATE: {
      get() {
        return this.drawer
      },
      set(newValue) {
        if (newValue === this.drawer) return
        this.TOGGLE_DRAWER()
      },
    },
  },
  mounted() {
    window.addEventListener('resize', this.getDimensions)
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions)
  },
  methods: {
    getDimensions() {
      this.width = document.documentElement.clientWidth
      this.height = document.documentElement.clientHeight
    },
    setCategory(item) {
      // eslint-disable-next-line no-console
      if (item.subMenus) {
        this.sub_categories = item.subMenus
        this.$store.dispatch('club/getEmptyClubType')
      } else {
        this.sub_categories = []
      }
    },
    club() {
      this.$store.dispatch('club/getClubType')
      this.sub_categories = []
    },
    subCategory() {
      this.sub_categories = []
      this.TOGGLE_DRAWER()
    },

    ...mapActions('sidebar', ['TOGGLE_DRAWER']),
  },
}
</script>

<style lang="scss" scoped src="~/styles/_overlaymenu.scss">
.uap-overlaymenu {
  .nav-primary__list {
    ul {
      list-style-type: none;
      background: red;
    }
  }
}
</style>
