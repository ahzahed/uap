<template>
  <section id="glance">
    <div class="container">
      <div class="row">
        <h1>UAP at a glance</h1>
      </div>

      <!-- Video Section -->
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-10 col-xl-10 col-md-10 col-sm-12 videoSection">
          <video id="myVideo" ref="campustourvideo" autoplay muted loop>
            <source src="@/static/Sequence01a.mp4" type="video/mp4" />
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

      <!-- Vision and Mission section-->
      <div class="row mx-2">
        <div class="col-lg-6 p-0">
          <div class="visionMissionImg">
            <img
              class="img-fluid w-100"
              :src="glance.visionImg"
              alt="vision"
              style="height: 100%"
            />
          </div>
        </div>
        <div class="col-lg-6 order-lg-first p-0 visionMission">
          <div class="h-100">
            <div class="d-flex h-100">
              <div
                class="vissionMissionContent w-100 my-auto px-sm-5 px-3 py-5"
              >
                <h4>Vision</h4>
                <p>
                  {{ glance.visionContent }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mx-2">
        <div class="col-lg-6 p-0">
          <div class="visionMissionImg">
            <img
              class="img-fluid w-100"
              :src="glance.missionImg"
              alt="mission"
              style="height: 100%"
            />
          </div>
        </div>
        <div class="col-lg-6 p-0 visionMission">
          <div class="h-100">
            <div class="d-flex h-100">
              <div
                class="vissionMissionContent w-100 my-auto px-sm-5 px-3 py-5"
              >
                <h4>Mission</h4>
                <p class="mb-0">
                  {{ glance.missionContent }}
                </p>
              </div>
            </div>
          </div>
        </div>
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
      glance: {
        visionImg: require('@/static/Rectangle2189.png'),
        visionContent:
          "UAP holds steadfastly its passion to do better and better in fulfilling our young generation's needs and aspirations for a caring and quality education in casting their future career and become a desirable destination for an identity. UAP holds steadfastly its passion to do better and better in fulfilling our young generation's needs and aspirations for a caring and quality education in casting their future career and become a desirable destination for an identity.",
        missionImg: require('@/static/Rectangle2191.png'),
        missionContent:
          'UAP mission is to offer best possible education to our young generation. Towards the mission, UAP continues to develop a sustained culture of ascending to a top-tier of vibrant academic environment; maintain and foster well qualified faculty, provide adequate research support for cutting-edge research in-house and in collaboration national and international peers; update curricula to keep up with advancing trend in science and technology, use state-of-the-art best practices in teaching-learning and modern facilities in laboratories and libraries; and provide other supports in aid to students becoming competent graduates with their potential fully realized and personality well-developed for joining the global forces in making the future of society in changing world.',
      },
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

<style></style>
