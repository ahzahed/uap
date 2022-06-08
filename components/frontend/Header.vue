<template>
  <header id="header">
    <TopHeader />
    <div class="header-bottom"  >
      <div class="container"  >
        <div class="row align-items-center">
          <div class="col-lg-3 col-md-9  col-sm-8 col-7 col-xs-12">
            <nuxt-link class="logo" to="/">
              <img src="@/static/logo-big-black.png" />
            </nuxt-link>
          </div>
          <div class="col-lg-9 col-md-3 col-sm-4 col-5 col-xs-12" @mouseleave="hideMegaMenu()">
            <ul class="navbar nav" >
           
              <li v-for="(item, i) in Menu.slice(0, 5)" :key="i" class="nav-item"   @mouseover="mouseEvent($event, 'item', i)">
                <nuxt-link v-if="item.link" class="nav-link" :class="index === i ? 'active' : '' " :to="item.link">{{
                  item.title
                }}</nuxt-link>
                <a v-else class="nav-link" :class="index === i ? 'active' : '' " href="javascript:void(0)">{{
                  item.title
                }}</a>
                    <MegaMenu v-if="showMegaMenu && index === i"  :mega-menu="megamenu"/>
              </li>
              <li class="btn header_icon"  @click.stop="Toggle_SearchBar">
              <i class="fas fa-search"></i>
                <!-- <span class="header_icon_title">Search</span> -->
              </li>
              <li class="btn header_icon" @click.stop="TOGGLE_DRAWER">
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
import { mapState, mapActions, } from 'vuex'
// eslint-disable-next-line import/named
import { Menu } from '../../data/menu.js'
import eventBus from "../../eventBus";
import TopHeader from './TopHeader.vue'
import SearchBar from './SearchBar.vue'
import MegaMenu from "./MegaMenu.vue";
export default {
  components: {
    MegaMenu,
    TopHeader,
    SearchBar
  },
  data() {
    return {
       Menu,
       showMegaMenu: false,
       index:null,
       megamenu: [],
    
    }
  },
  
  computed: {
    ...mapState('sidebar', ['drawer', ]),
 
    DRAWER_STATE: {
      get() {
        return this.drawer
      },
    },
  },
mounted() {
  
    eventBus.$on("hide-mega-menu", () => {
      this.showMegaMenu = false;
    });

     this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          const navbar = document.getElementById("header")
          const navClasses = navbar.classList
          if(document.documentElement.scrollTop >= 150) {
            if (navClasses.contains("shrink") === false) {
              navClasses.toggle("shrink");
            }
          }
          else if (navClasses.contains("shrink") === true) {
              navClasses.toggle("shrink");
            }
        })
      })
  },
  beforeDestroy() {
    eventBus.$off("hide-mega-menu");
  },
  methods: {
     hideMegaMenu() {
      eventBus.$emit('hide-mega-menu')
    },
    mouseEvent(event, source, i) {

      // eslint-disable-next-line no-console
   
   
      if (source === "item") {
        event.stopPropagation();
      // eslint-disable-next-line no-console 
      this.index = i;  
        this.megamenu = Menu[i].subMenus;
      }
      this.showMegaMenu = true;
      
      // eslint-disable-next-line no-self-compare
    },
 
    ...mapActions('sidebar', ['TOGGLE_DRAWER', 'Toggle_SearchBar'], ),
 
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_header.scss';
</style>
