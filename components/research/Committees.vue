<template>
  <section id="researchIEERD">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="text_box_one">
            <p v-html="research.research_committee.advisory_council"></p>
          </div>
        </div>
        
      </div>
      <div style="background: #f6f6f6; padding: 15px" class="mt-5">
        <h2 class="p-5 ">Scrutiny Committee (SC)</h2>
        <div
          v-for="(item, i) in research.research_committee_scrutiny_infos"
          :key="i"
        >
          <div class="col-lg-10 mx-auto">
            <div class="card mb-3 shadow-sm">
              <div class="row">
                <div class="col-md-4 col-sm-4 leftSide">
                  <img
                    :src="$config.baseURL + item.image"
                    class="img-fluid w-100 h-100"
                    :alt="item.name"
                  />
                </div>
                <div class="col-md-8 col-sm-8 rightSide">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <p class="card-text">
                      {{ item.position }}
                    </p>
                    <h5 class="card-title">Email</h5>
                    <p class="card-text mb-4">
                      {{ item.email }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 mt-5">
          <div class="text_box_one">
            <p v-html="research.research_committee.working_group"></p>
          </div>
        </div>
      </div>
      <!-- <div class="col-lg-6 mt-5 m-auto">
        <div class="text_box_five">
          <h2>IEERD Forms</h2>
          <ul v-for="(item, i) in research.research_funding_files" :key="i">
            <li>
              <a
                :href="$config.baseURL + item.file"
                target="_blank"
                class="nav-link"
                >{{ item.file_title }}</a
              >
            </li>
            <hr />
          </ul>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  props: {
    research: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      toggle: false,
      
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
@import './styles/_members.scss';
#researchIEERD {
  margin-top: 104px;
  margin-bottom: 104px;
  .heading {
    background-color: $darkblue;
    padding-top: 23px;
    padding-bottom: 23px;
    border-radius: 5px;
    h1 {
      @include title2;
      margin-bottom: 0px;
      color: $white;
    }
    p {
      color: $white;
      @include paragraph;
    }
  }

  .text_box_one {
    background-color: $gray;
    padding: 92px 111px;
    text-align: justify;
    @include respond-below(lg) {
      padding: 80px 70px;
    }
    @include respond-below(sm) {
      padding: 40px 30px;
    }
    @include paragraph;
  }

  .text_box_five {
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    min-height: 380px;

    @include respond-below(lg) {
      margin-top: 20px;
    }
    h2 {
      @include title2;
      padding-left: 85px;
      padding-top: 25px;
      padding-bottom: 25px;
      background-color: $background-color;
      border-radius: 5px;
      @include respond-below(xs) {
        text-align: center;
        padding-left: 0px;
      }
    }
  }
}
</style>
