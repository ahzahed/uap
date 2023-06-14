/* eslint-disable vue/no-v-html */
<template>
  <section id="ListOfAllLab">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-sl-4 col-lg-8 col-md-6 mb-3">
          <h2>{{top}}</h2>
          <div class="waitingResult pt-4 shadow-sm">
            <ul v-for="(item, i) in data" :key="i">
              <li>
                <a :href="item.pdf" target="_blank" class="nav-link">{{
                  item.pdf_file_title
                }}</a>
              </li>
              <hr />
            </ul>
          </div>
        </div>
        <!-- <div class="col-lg-4 col-md-6 mb-3">
          <h2>Final Result</h2>
          <div class="waitingResult pt-4 shadow-sm">
            <ul v-for="(item, i) in final" :key="i">
              <li>
                <a :href="item.pdf" target="_blank" class="nav-link">{{
                  item.pdf_file_title
                }}</a>
              </li>
              <hr />
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-3">
          <h2>Waiting List</h2>
          <div class="waitingResult pt-4 shadow-sm">
            <ul v-for="(item, i) in waiting" :key="i">
              <li>
                <a :href="item.pdf" target="_blank" class="nav-link">{{
                  item.pdf_file_title
                }}</a>
              </li>
              <hr />
            </ul>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    top: {
      type: String,
      required: true,
    },
    // final: {
    //   type: Array,
    //   required: true,
    // },
    // waiting: {
    //   type: Array,
    //   required: true,
    // },
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
      a {
        padding: 0px;
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

  .waitingResult {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 600px;
    overflow-y: scroll;
  }
  .waitingResult::-webkit-scrollbar {
    width: 10px;
    height: 100px;
    color: red;
  }
  .waitingResult::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 60px;
    background-color: #f5f5f5;
  }
  .waitingResult::-webkit-scrollbar-thumb {
    border-radius: 60px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: $darkblue;
  }
}
</style>
