/* eslint-disable vue/require-default-prop */
<template>
  <section id="glance">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 p-0 visionMissionImg">
          <div style="overflow: hidden; height: 100%">
            <img
              class="img-fluid w-100"
              :src="$config.baseURL + vision.department_vission_image"
              alt="vision"
              style="height: 100%"
            />
          </div>
        </div>
        <div class="col-lg-6 order-lg-first p-0 visionMission">
          <div class="h-100">
            <div class="d-flex h-100">
              <div class="vissionMissionContent w-100 my-auto px-5 py-5">
                <h4>{{ vision.department_vission_title }}</h4>
                <p>
                  {{ vision.department_vission_description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 p-0 visionMissionImg">
          <div style="overflow: hidden; height: 100%">
            <img
              class="img-fluid w-100"
              :src="$config.baseURL + mission.department_mission_image"
              alt="mission"
              style="height: 100%"
            />
          </div>
        </div>
        <div class="col-lg-6 p-0 visionMission">
          <div class="h-100">
            <div class="d-flex h-100">
              <div class="vissionMissionContent w-100 my-auto px-5 py-5">
                <h4>{{ mission.department_mission_title }}</h4>
                <p class="mb-0">
                  {{ mission.department_mission_description }}
                </p>
                <!-- <div style="text-align: right">
                  <button
                    class="primary-btn readmore mt-5"
                    @click="toggle = !toggle"
                  >
                    <span v-if="toggle == false">
                      <span class="plus">+</span> Read More</span
                    >
                    <span v-else> <span class="plus">-</span> Read Less</span>
                  </button>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row video-top">
        <h1>Inside UAP</h1>
      </div>

      <!-- Video Section -->
      <div class="row">
        <div
          id="youtube-container"
          class="col-lg-10 col-xl-10 col-md-10 mx-auto col-sm-12 mx-auto videoSection"
        >
          <youtube
            v-if="insideVideo.videolink"
            ref="youtube"
            :video-id="videoURL"
            @ready="ready"
            @playing="playing"
          ></youtube>

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
                @click.native="playing"
              ></PlayBtn>
            </div>
          </div>
        </div>
      </div>

      <!-- Vision and Mission section-->
    </div>
  </section>
</template>

<script>
import PlayBtn from '../../helpers/PlayBtn.vue'
import PlayOnBtn from '../../helpers/PlayOnBtn.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    PlayBtn,
    // eslint-disable-next-line vue/no-unused-components
    PlayOnBtn,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    vision: {
      type: Object,
      required: true,
    },
    mission: {
      type: Object,
      required: true,
    },
    insideUp: {
      type: Object,
      required: true,
    },
    insideVideo: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isPlaying: false,
      glance: {
        visionImg: require('@/static/Rectangle2189.png'),
        visionContent:
          "UAP holds steadfastly its passion to do better and better in fulfilling our young generation's needs and aspirations for a caring and quality education in casting their future career and become a desirable destination for an identity. UAP holds steadfastly its passion to do better and better in fulfilling our young generation's needs and aspirations for a caring and quality education in casting their future career and become a desirable destination for an identity.",
        missionImg: require('@/static/Rectangle2191.png'),
        missionContent:
          'UAP mission is to offer best possible education to our young generation. Towards the mission, UAP continues to develop a sustained culture of ascending to a top-tier of vibrant academic environment; maintain and foster well qualified faculty, provide adequate research support for cutting-edge research in-house and in collaboration national and international peers; update curricula to keep up with advancing trend in science and technology, use state-of-the-art best practices in teaching-learning and modern facilities in laboratories and libraries; and provide other supports in aid to students becoming competent graduates with their potential fully realized and personality well-developed for joining the global forces in making the future of society in changing world.',
      },
      toggle: false,
    }
  },
  computed: {
    videoURL() {
      const url = this.insideVideo.videolink.replace('https://youtu.be/', '')
      return url
    },
    player() {
      return this.$refs.youtube.player
    },
  },

  methods: {
    ready(event) {
      this.player = event.target
      this.player.playVideo()
    },
    playing() {
      // The player is playing a video.
      this.player.playVideo()
      this.isPlaying = true
    },
    playVideo() {
      this.player.playVideo()
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = 'G8TjC63_p0E'
    },
    stop() {
      this.player.stopVideo()
      this.isPlaying = false
    },
    pause() {
      this.player.pauseVideo()
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
.youtube-container {
  overflow: hidden;
  width: 100%;
  /* Keep it the right aspect-ratio */
  aspect-ratio: 16/9;
  /* No clicking/hover effects */
  pointer-events: none;

  iframe {
    /* Extend it beyond the viewport... */
    width: 300%;
    height: 100%;
    /* ...and bring it back again */
    margin-left: -100%;
  }
}
#glance {
  // padding-top: $section-padding;
  //   padding-bottom: $section-padding;
  @include respond-below(xs) {
    padding-top: 80px;
    // padding-bottom: 80px;
  }
  @include respond-between(xs, md) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  h1 {
    @include title;
    text-align: center;
    padding-bottom: 26px;
  }
  .video-top {
    padding-top: $section-padding;
  }
  .videoSection {
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    height: 526px;
    // margin-bottom: 150px;
    padding-left: 0px;
    border-radius: 5px;
    @include respond-below(xs) {
      height: 400px;
      margin-bottom: 80px;
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
        margin-bottom: 100px;
      }
    }
  }
  .visionMissionImg {
    // max-height: 810px;
  }
  .visionMission {
    background: #f0f0fa;
    min-height: 810px;
    text-align: justify;
    @include respond-below(lg) {
      min-height: 300px;
    }
    h4 {
      @include title;
      color: #1b2055;
    }
    p {
      @include paragraph;
    }
    .readmore {
      border-radius: 5px;
      padding: 11px 22px;
      cursor: pointer;
    }
  }
}
</style>
