/* eslint-disable vue/no-v-html */
<template>
  <section id="ListOfAllLab">
    <div class="container mt-5">
      <div class="row">
        <div
          v-for="(item, i) in lab_workshop_list"
          :key="i"
          class="col-lg-4 col-md-6 mb-3"
        >
          <h2>{{ item.department }}</h2>
          <div class="finalResult pt-4 shadow-sm">
            <div v-html="item.all_list"></div>
            <!-- <ul v-for="(item, i) in lab_workshop_list" :key="i">
              <li>{{ item.link }}</li>
              <hr />
            </ul> -->
          </div>
        </div>
        <!-- <div class="col-lg-4 col-md-6 mb-3">
          <h2>Department of Business Administration</h2>
          <div class="waitingResult pt-4 shadow-sm">
            <ul v-for="(item, i) in depositeSlip" :key="i">
              <li>{{ item.link }}</li>
              <hr />
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-3">
          <h2>Department of Civil Engineering</h2>
          <div class="waitingResult pt-4 shadow-sm">
            <ul v-for="(item, i) in depositeSlip" :key="i">
              <li>{{ item.link }}</li>
              <hr />
            </ul>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  asyncData({ store, route }) {
    store.dispatch('resourcesAcademic/getLabWorkshopList')
  },

  data() {
    return {
      session: {
        title: 'For Fall 2020 session',
        details:
          'Following are the <strong>PDFs</strong> containing the official results of Admission tests for different departments. Results are generally published for <strong>WRITTEN test</strong> only (before viva) and then as <strong>FINAL RESULT</strong> after viva session. According to the differences in the exam procedures for each departments, some departments directly publish the FINAL result.  Scroll to find your desired department.',
      },
      feePayment: [
        {
          link: 'Fees Payment Amount for Spring 2020',
        },
        {
          link: 'Revised Payment Schedule, Graduate Program 2020',
        },
        {
          link: 'UAP Fees Payment Options Spring 2020 ',
        },
      ],
      depositeSlip: [
        {
          link: 'Al-Arafah Islami Bank Ltd',
        },
        {
          link: 'Bank Asia Ltd',
        },
        {
          link: 'Bangladesh Commerce Bank Ltd',
        },
        {
          link: 'Social Islami Bank Limited',
        },
        {
          link: 'Southeast Bank Ltd',
        },
        {
          link: 'Standard Bank Ltd',
        },
        {
          link: 'Uttara Bank Ltd',
        },
      ],
    }
  },
  computed: {
    ...mapGetters('resourcesAcademic', ['lab_workshop_list']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#ListOfAllLab {
  margin-bottom: 104px;
  h1 {
    @include title;
    margin-bottom: 38px;
  }
  p {
    @include paragraph;
    margin-bottom: 82px;
  }
  ul {
    padding: 0;
    li {
      padding-left: 50px;
      @include cardPara;
      color: rgba(18, 102, 241, 0.75);

      @include respond-below(xs) {
        padding-left: 15px;
      }
    }
  }
  hr {
    margin: 0px 50px;
    color: $darkblue;
    @include respond-below(xs) {
      margin: 0px 15px;
    }
  }
  h2 {
    @include title3;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: $background-color;
    // border-radius: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-bottom: 0px;
  }

  .finalResult::-webkit-scrollbar {
    width: 10px;
    height: 100px;
    color: red;
  }
  .finalResult::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 60px;
    background-color: #f5f5f5;
  }
  .finalResult::-webkit-scrollbar-thumb {
    border-radius: 60px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: $darkblue;
  }

  .finalResult,
  .waitingResult {
    // border-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    // box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    height: 280px;
    overflow-y: scroll;
  }
}
</style>
