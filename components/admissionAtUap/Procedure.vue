<template>
  <section id="procedure">
    <div class="container">
      <h1 class="text-center">Procedure</h1>
      <div class="row">
        <div
          v-for="(item, i) in procedure"
          :key="i"
          class="procedureProcess mb-3 py-5 px-sm-5 px-3"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.details }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      procedure: [
        {
          title: 'Admission application',
          details:
            'Students can apply any time before the scheduling of admission tests. There are options for online application, but students are advised to contact our admission office in person to get the admit card for admission test as well as to submit the necessary original documents.',
        },
        {
          title: 'Admission tests',
          details:
            'Generally there are two tests with a gap of one month in between. Applicants are allowed to appear in one test only (except some reasonable cases, for which the authority will follow a thorough scrutiny). All exams are conducted within the two months window before the semester class starts. Detailed timing is circulated both in daily newspapers and in our website “NOTICE” link.',
        },
        {
          title: 'Admission test mode',
          details:
            'Written and Viva (varies by departments): After admission test: The admission office will guide the students for further procedures for admission. In special cases where ELPC (English Language Proficiency Course) is advised by the department for students having relatively weaker proficiency in English, the applicant has to complete an additional English language course offered by the university before or during the semester.',
        },
        {
          title: 'For transfer students',
          details:
            'Credit transfer students from other universities are also considered for admission, however their application is considered case by case, taking into account their previous results and track record and also must pass the admission test if the department requires. The minimum GPA for a course is “B” to be considered as transferable. A transfer student must complete 50% of required total credit hour in the university to be eligible for a degree from UAP. For student who has a study gap of more than two years prior to her/his application for admission is advised to contact directly to the admission office.',
        },
        {
          title: 'For International Students',
          details:
            'It is necessary for a prospective student from abroad to demonstrate commitment and readiness to operate in a different cultural context. The selection process is relatively similar, with options of submitting the necessary documents online. All documents must be translated in English and attested by legal authorities. The applicant must fulfill if the department asks for some special documents (i/e Portfolio, recommendation letter etc.) or interview (via Skype or telephone). For further information please contact directly to the links below.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#procedure {
  padding-bottom: $section-padding;
  padding-top: $section-padding;
  h1 {
    margin-bottom: 50px;
    @include title;
  }
  h3 {
    font-size: 27px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }
  p {
    @include paragraph;
  }
  .procedureProcess {
    background-color: $lightblue;
    // padding: 43px 76px;
    border-radius: 5px;
    &:nth-of-type(odd) {
      background-color: $background-color;
    }
  }
}
</style>
