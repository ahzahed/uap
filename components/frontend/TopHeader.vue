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
              <a
                v-if="item.to.includes('www.') || item.to.includes('http')"
                :href="item.to"
                target="_blank"
                class="nav-link"
              >
                {{ item.text }}</a
              >

              <nuxt-link v-else class="nav-link" :to="item.to">{{
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
              <a
                v-if="item.to.includes('www.') || item.to.includes('http')"
                :href="item.to"
                target="_blank"
                class="nav-link"
              >
                {{ item.text }}</a
              >

              <nuxt-link v-else class="nav-link" :to="item.to">{{
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
          to: 'https://www.ucam.uap-bd.edu/Security/LogIn.aspx',
        },
        {
          text: 'UAP Ranking',
          to: '/our-ranking',
        },
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
          to: 'http://www.library.uap-bd.edu/',
        },
        {
          text: 'Contact',
          to: 'https://www.uap-bd.edu/contactus.php',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_headertop.scss';
</style>
