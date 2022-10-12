<template>
  <section id="welcome">
    <div class="container">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-10">
          <h1 class="text-center">Welcome to UAP</h1>
          <p>
            University of Asia Pacific (UAP) was established in 1996 with a
            vision to enhance the opportunity for higher education in
            Bangladesh. The University, under the Private University Act 1992,
            started its operation in 1996 by offering four-year Bachelor Degree
            Program in Computer Science & Technology and Business Administration
            only. Now the UAP offers undergraduate program in four disciplines.
            Its curricula have been approved by the University Grants Commission
            (UGC) and the Government of People’s Republic of Bangladesh.
          </p>
        </div>
        <div class="col-lg-1"></div>
      </div>

      <!-- video section -->
      <div class="row mb-5">
        <div class="col-lg-1"></div>
        <div class="col-lg-10 col-xl-10 col-md-10 col-sm-12 videoSection">
          <video id="myVideo" ref="campustourvideo" autoplay muted loop>
            <source src="@/static/welcome_cropped.mp4" type="video/mp4" />
          </video>

          <div class="main-campus-content">
            <div class="campus-contant">
              <PlayOnBtn
                v-if="isPlaying"
                id="myBtn"
                class=""
                @click.native="stop"
              ></PlayOnBtn>
              <PlayBtn
                v-else
                id="myBtn"
                class=""
                @click.native="play"
              ></PlayBtn>
            </div>
          </div>
        </div>
        <div class="col-lg-1"></div>
      </div>
      <!-- video section -->
    </div>
  </section>
</template>

<script>
import PlayBtn from '../helpers/PlayBtn.vue'
import PlayOnBtn from '../helpers/PlayOnBtn.vue'
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
#welcome {
  margin-top: 80px;
  h1 {
    @include title;
  }
  p {
    margin-top: 42px;
    text-align: justify;
    @include paragraph;
  }
  .videoSection {
    position: relative;
    margin: 0 auto;

 
    border-radius: 5px;
    @include respond-below(xs) {
      height: 400px;
      margin-bottom: 80px;
    }
    video {
      width: 100%;
    }
    .main-campus-content {
      position: absolute;
      box-sizing: border-box;
      left: 0;
      right: 0;
      top: 50%;

      #myBtn {
        position: relative;
        margin: 0 auto;
      }
    }
  }
}
</style>
