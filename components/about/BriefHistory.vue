<template>
  <section id="BriefHistory">
    <div class="container">
      <div class="title">
        <h2>UAP brief history</h2>
      </div>
      <flipbook
        ref="flipbook"
        v-slot="flipbook"
        class="flipbook"
        :single-page="false"
        :click-to-zoom="false"
        :drag-to-flip="false"
        :pages="pages"
      >
        <!-- <template #page="{ page }">
          <div class="class">
            {{ page }}
          </div>
        </template> -->

        <button
          class="btn flipbook-btn left"
          :class="{ disabled: !flipbook.canFlipLeft }"
          @click="flipbook.flipLeft"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <button
          class="btn flipbook-btn right"
          :class="{ disabled: !flipbook.canFlipRight }"
          @click="flipbook.flipRight"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </flipbook>
    </div>
  </section>
</template>
<script>
import Flipbook from 'flipbook-vue'
export default {
  components: { Flipbook },

  data() {
    return {
      pages: [
        require('../../static/History/H00.png'),
        require('../../static/History/H001b.jpg'),
        require('../../static/History/H002.jpg'),
        require('../../static/History/H003.jpg'),
        require('../../static/History/H004.jpg'),
        require('../../static/History/H005b.jpg'),
        require('../../static/History/H006.jpg'),
        require('../../static/History/H007.jpg'),
        require('../../static/History/H008.jpg'),
        require('../../static/History/H009.jpg'),
        require('../../static/History/H010.jpg'),
        require('../../static/History/H011.jpg'),
        require('../../static/History/H012.jpg'),
        require('../../static/History/H013.jpg'),
        require('../../static/History/H014.jpg'),
        // require('../../static/History/H015.jpg'),
        require('../../static/History/H016.jpg'),
        require('../../static/History/H017.jpg'),
        require('../../static/History/H018.jpg'),
        require('../../static/History/H020.jpg'),
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#BriefHistory {
  padding-top: 80px;
  position: relative;
  .title {
    h2 {
      @include title;
    }
    color: $text-color;
    text-align: center;
  }

  .flipbook {
    position: relative;
    max-height: 100%;
    height: 70vh;

    .flipbook-btn {
      position: absolute;
      background: $darkblue;
      color: $white;
      top: 50%;
      z-index: 10;
    }
    .flipbook-btn.left {
      left: 20px;
    }
    .flipbook-btn.right {
      right: 20px;
    }
  }
}
</style>
