<template>
  <div class="megamenu" @mouseleave="hideMegaMenu()">
    <div class="row">
      <div v-for="(menus, i) in dividemenu" :key="'item' + i" class="col-md-4">
        <ul class="menu-sublist">
          <li v-for="(menu, menu_2) in menus" :key="menu_2" class="menu-item">
            <a v-if="menu.link" :href="menu.link" target="_blank"
              ><i class="fas fa-angle-double-right"></i> {{ menu.title }}</a
            >
            <!-- <nuxt-link v-if="menu.link" :to="'/' + menu.link"
              ><i class="fas fa-angle-double-right"></i>
              {{ menu.title }}</nuxt-link
            > -->
            <nuxt-link
              v-else
              :to="'/' + $nuxt.$route.params.department + '/' + menu.slug"
              ><i class="fas fa-angle-double-right"></i>
              {{ menu.title }}</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '@/eventBus'

export default {
  name: 'MegaMenu',
  props: {
    megaMenu: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeMainCategory: 1,
      lastX: 0,
      lastY: 0,
      direction: '',
      throttle: false,
    }
  },
  computed: {
    dividemenu() {
      const n = 3
      const result = [[], [], []]

      const wordsPerLine = Math.ceil(this.megaMenu.length / 3)

      for (let line = 0; line < n; line++) {
        for (let i = 0; i < wordsPerLine; i++) {
          const value = this.megaMenu[i + line * wordsPerLine]
          if (!value) continue
          result[line].push(value)
        }
      }

      return result
    },
  },
  mounted() {
    window.addEventListener('mousemove', this.mouseDirection)
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.mouseDirection)
  },
  methods: {
    hideMegaMenu() {
      eventBus.$emit('hide-mega-menu')
    },
    isActive(key) {
      return this.activeMainCategory === key
    },
    mouseDirection(e) {
      if (!this.throttle) {
        this.throttle = true
        const theta = Math.abs(
          (180 * Math.atan2(e.pageY - this.lastY, e.pageX - this.lastX)) /
            Math.PI
        )
        this.direction = theta > 75 ? 'vertical' : 'horizontal'
        this.lastX = e.pageX
        this.lastY = e.pageY
        setTimeout(() => {
          this.throttle = false
        }, 50)
      }
    },
    changeMainCategory(index) {
      if (this.direction === 'vertical') {
        this.activeMainCategory = index
      }
    },
  },
}
</script>
