/* eslint-disable no-console */
<template>
  <section id="main-campus">
    <video id="myVideo" ref="campustourvideo" autoplay muted loop>
      <source src="@/static/Sequence01a.mp4" type="video/mp4" />
    </video>
    <div class="overlay"></div>
    <div class="main-campus-content">
      <div class="campus-contant">
        <h2 class="campus-video-title">Our Campus Tour</h2>

        <PlayOnBtn v-if="isPlaying" id="myBtn" class="" @click.native="stop"
          ></PlayOnBtn
        >
        <PlayBtn v-else id="myBtn" class="" @click.native="play"
          ></PlayBtn
        >

        <h3 class="campus-video-subtitle">UNIVERSITY OF ASIA PACIFIC</h3>
      </div>
    </div>
  </section>
</template>

<script>
import PlayBtn from '../helpers/PlayBtn.vue'
import PlayOnBtn from '../helpers/PlayOnBtn.vue'
// eslint-disable-next-line no-var
// var video = document.getElementById('myVideo')

export default {
  components: {
    PlayBtn,
    PlayOnBtn,
  },
  data() {
    return {
      isPlaying: true,
    }
  },

  methods: {
    play() {
      this.$refs.campustourvideo.play()
      this.isPlaying = true
    },
    stop() {
      this.$refs.campustourvideo.pause()
      this.isPlaying = false
    },
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_main.scss';
#main-campus {
  position: relative;
  width: 100%;
  height: 100%;
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    // box-shadow: 0px 16px 40px #00000029;
    // border: 1px solid #707070;
    // border-radius: 5px;
  }

  #myVideo {
   
    min-width: 100%;
    margin-bottom: -7px;
    z-index: 1;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0px 16px 40px #00000029;
    border: 1px solid #707070;
    border-radius: 5px;
    opacity: 0.27;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
  .main-campus-content {
    position: absolute;

    box-sizing: border-box;
    left: 0;
    right: 0;
    text-align: center;
    top: 25%;
    bottom: 30%;
    .campus-contant {
      position: relative;
      .campus-video-title {
        @include title;  
        margin-bottom: 150px;
  

        text-align: center;
      }
      .campus-video-subtitle {
        font-weight: 500;
        font-size: 27px;
        line-height: 40px;
        color: $darkblue;
      }
      #myBtn {
        position: relative;
        margin: 0 auto;
        margin-bottom: 100px;
      }
    }
  }
}
</style>