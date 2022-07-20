<template>
  <div class="top-bar">
    <div class="container">
      <div class="row">     
        <div class="col-md-6 col-sm-6 col-6">         
          <ul class="nav justify-content-sm-start">
            <li
              v-for="(item, i) in leftLinks"
              :key="'left_' + i"
              class="nav-item"
            >
              <nuxt-link class="nav-link" :to="item.to">{{
                item.text
              }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-md-6 col-sm-6 col-6">
          <ul class="nav justify-content-sm-end">
            <li
              v-for="(item, i) in rightLinks"
              :key="'left_' + i"
              class="nav-item"
            >
              <nuxt-link class="nav-link" :to="item.to">{{
                item.text
              }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftLinks: [
        {
          text: 'Alumni',
          to: '/alumni',
        },
        {
          text: 'UCAM Login',
          to: '/',
        },
        // {
        //   text: 'UAP Ranking',
        //   to: '/',
        // },
      ],
      rightLinks: [
        {
          text: 'News',
          to: '/news',
        },
        // {
        //   text: 'Resouces',
        //   to: '/resouces',
        // },
        {
          text: 'Library',
          to: '/',
        },
        {
          text: 'Contact',
          to: '/',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_headertop.scss';
</style>
