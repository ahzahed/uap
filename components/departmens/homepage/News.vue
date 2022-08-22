<template>
  <section id="news">
    <div class="container py-5 my-5">
      <div class="row">
        <div class="col-lg-4 col-md-6 main-content pb-3">
          <h2>Latest News</h2>
          <div class="finalResult pt-4">
            <ul v-for="(item, i) in latestInformation" :key="i">
              <li>{{ item.info }}</li>
              <hr />
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 waitingResultContent main-content pb-3">
          <h2>Recent Notice</h2>
          <div class="waitingResult pt-4">
            <ul v-for="(item, i) in recentInformation" :key="i">
              <li>{{ item.info }}</li>
              <hr />
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 waitingResultContent main-content pb-3">
          <h2>Featured Research</h2>
          <div class="waitingResult pt-4">
            <ul v-for="(item, i) in researchInformation" :key="i">
              <li>{{ item.info }}</li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  props: {
    latestInformation: {
      type: Array,
      required: true,
    },
    recentInformation: {
      type: Array,
      required: true,
    },
    researchInformation: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#news {
  background-color: #f2f2f2;
  // padding: 20px;
  margin-bottom: 104px;

  h1 {
    @include title;
    margin-bottom: 38px;
  }
  p {
    @include paragraph;
    margin-bottom: 82px;
  }
  .main-content{
     &:nth-child(n+1){
      --shadowColor:#80daff;
      --bg: #e1f2f9;
      
    }
    &:nth-child(n+2){
      --shadowColor:#42f98b;
      --bg:#e6fff0;
    }
    &:nth-child(n+3){
      --shadowColor:#e7a934;
      --bg:#eae1d0;

    }
 ul {
    padding: 0;
    li {
      padding-left: 25px;
      @include cardPara;
      color: rgba(18, 102, 241, 0.75);
      font-weight: 600;
      @include respond-below(xs) {
        padding-left: 25px;
      }
    }
  }
  hr {
    margin: 0px 20px;
    color: $darkblue;
    @include respond-below(xs) {
      margin: 0px 25px;
    }
  }
  h2 {
    @include title2;
    text-align: center;
    // padding-left: 85px;
    padding-top: 25px;
    padding-bottom: 25px;
    background: var(--bg);
    // border-radius: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-bottom: 0px;
    @include respond-below(xs) {
      text-align: center;
      padding-left: 0px;
    }
  }
  .waitingResultContent {
    @include respond-below(lg) {
      margin-bottom: 20px;
    }
  }
  .finalResult,
  .waitingResult {
    // border-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    height: 280px;
    overflow-y: scroll;
  }
  }
 
}
</style>
