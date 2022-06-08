<template>
  <transition name="slide" appear>
    <div
      v-if="DRAWER_STATE"
      v-click-outside="TOGGLE_DRAWER"
      :class="DRAWER_STATE ? 'sidebar' : ''"
    >
      <div class="sidebar-menu-content">
        <div class="navigation-up">
          <nuxt-link class="home" to="/">
            <span class="material-icons"> home </span>
            <span>Home</span>
          </nuxt-link>
        </div>
        <div class="navigation-tree">
          <ul class="navigation-children">
            <li v-for="(item, i) in menus" :key="i" class="nav-item">
              <nuxt-link :to="item.url" class="nav-link">{{
                item.name
              }}</nuxt-link>
            </li> 
          </ul>
        </div>
        <div class="menu-static-navigation">
          <ul class="multilinks">
            <li v-for="(item, i) in multilinks" :key="i">
              <nuxt-link :to="item.url" class="btn-theme">
                {{ item.name }}
              </nuxt-link>
            </li>
          </ul>
          <ul class="super-list columns first">
            <li v-for="(superitem, key) in superlist" :key="'key_' + key">
              <nuxt-link :to="superitem.url">{{ superitem.name }}</nuxt-link>
            </li>
          </ul>
          <ul class="super-list columns second">
            <li v-for="(secondItem, i) in superlist2" :key="i">
              <nuxt-link :to="secondItem.url">{{ secondItem.name }}</nuxt-link>
            </li>
          </ul>
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
      message: 'Hello Vue!',
      multilinks: [
        { name: 'Majors', url: '/majors' },
        { name: 'Visit', url: '/visit' },
        { name: 'News', url: '/news' },
        { name: 'Events', url: '/events' },
      ],
      superlist: [
        { name: 'Current Students', url: '/majors' },
        { name: 'Faculty & Staff', url: '/visit' },
        { name: 'Family & Visitors', url: '/news' },
        { name: 'Alumni', url: '/events' },
      ],
      superlist2: [
        { name: 'Athletics', url: '/majors' },
        { name: 'Give', url: '/visit' },
        { name: 'Library', url: '/news' },
        { name: 'Round Rock', url: '/events' },
        { name: 'News', url: '/events' },
      ],
      menus: [
        {
          name: 'About',
          url: '/about',
        },
        {
          name: 'Admission',
          url: '/admission',
        },
        {
          name: 'Academic',
          url: '/academic',
        },
        {
          name: 'Student Life',
          url: '/student_life',
        },
        {
          name: 'Research',
          url: '/research',
        },
      ],
    }
  },
  computed: {
    ...mapState('sidebar', ['drawer']),
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
  methods: {
    ...mapActions('sidebar', ['TOGGLE_DRAWER']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_sidebar.scss';

</style>
