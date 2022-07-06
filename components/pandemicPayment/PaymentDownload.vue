/* eslint-disable vue/no-v-html */
<template>
  <section id="paymentDownload">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h2>Special Option for Fee Payments</h2>
          <div class="finalResult pt-4">
            <ul v-for="(item, i) in fee" :key="i">
              <li>
                <a :href="$config.baseURL + item.file">{{ item.file_title }}</a>
              </li>
              <hr />
            </ul>
          </div>
        </div>
        <div class="col-lg-6 waitingResultContent">
          <h2>Download Bank Deposit Slip</h2>
          <div class="waitingResult pt-4">
            <ul v-for="(item, i) in deposit" :key="i">
              <li>
                <a :href="$config.baseURL + item.file">{{ item.file_title }}</a>
              </li>
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
  props: {
    fee: {
      type: Array,
      required: true,
    },
    deposit: {
      type: Array,
      required: true,
    },
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
#paymentDownload {
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
      padding-left: 85px;
      @include cardPara;
      color: rgba(18, 102, 241, 0.75);
      font-weight: 600;
      @include respond-below(xs) {
        padding-left: 25px;
      }
    }
  }
  hr {
    margin: 0px 85px;
    color: $darkblue;
    @include respond-below(xs) {
      margin: 0px 25px;
    }
  }
  h2 {
    @include title2;
    padding-left: 85px;
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: $background-color;
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
      margin-top: 20px;
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
</style>
