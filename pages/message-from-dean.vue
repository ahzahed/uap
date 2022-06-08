<template>
  <section id="dealMessage">
    <Banner :items="banner" />
    <Message />
  </section>
</template>

<script>
import Banner from '../components/helpers/Banner.vue'
import Message from '../components/messageDean/Message.vue'
export default {
  components: { Banner, Message },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        img: require('@/static/dean.png'),
        title: 'MESSAGE FROM THE DEAN',
        details:
          'School of engineering',
      },
    }
  },
}
</script>

<style></style>
