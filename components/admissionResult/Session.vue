/* eslint-disable vue/no-v-html */
<template>
 <div></div>
</template>

<script>
export default {
  data() {
    return {
      session: {
        title: 'For Fall 2020 session',
        details:
          'Following are the <strong>PDFs</strong> containing the official results of Admission tests for different departments. Results are generally published for <strong>WRITTEN test</strong> only (before viva) and then as <strong>FINAL RESULT</strong> after viva session. According to the differences in the exam procedures for each departments, some departments directly publish the FINAL result.  Scroll to find your desired department.',
      },
      finalResult: [
        {
          link: 'BACHELOR OF CIVIL ENGINEERING (SLOT-3)',
        },
        {
          link: 'MASTER OF CIVIL ENGINEERING',
        },
        {
          link: 'M. PHARM IN PHARMACEUTICAL TECHNOLOGY',
        },
        {
          link: 'BACHELOR OF PHARMACY',
        },
        {
          link: 'BACHELOR OF CIVIL ENGINEERING (SLOT-2)',
        },
        {
          link: 'BACHELOR OF CIVIL ENGINEERING (SLOT-1)',
        },
      ],
      waitingResult: [
        {
          link: 'BACHELOR OF CIVIL ENGINEERING (SLOT-2)',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#session {
  margin-top: 104px;
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
    margin: 0px 95px;
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
    border-radius: 5px;
    @include respond-below(xs) {
      text-align: center;
      padding-left: 0px;
    }
  }
  .finalResult,
  .waitingResult {
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    min-height: 380px;
    @include respond-below(lg) {
      margin-top: 20px;
    }
  }
}
</style>
