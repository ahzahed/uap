<template>
  <section class="about-section">
    <Banner :banner="banner" />
    <Cse 
    :informations="Informations"
    />
    
    <General
    :general-informations="generalInformations"
    />
    <GeneralTiming/>
    <Procedure 
    :procedure-information="procedureInformation"
    />
    <AdmissionCriteria
    :criteria-information="criteriaInformation"
    />
    <Special
    :special-information="specialInformation"
    />
    <Contact
    :contact-information="contactInformation"
    />
  </section>
</template>

<script>
import Banner from '../components/helpers/Banner.vue'
import Cse from '../components/admission-info/undergraduate/Cse.vue'
import General from '../components/admission-info/undergraduate/General.vue'
import GeneralTiming from '../components/admission-info/undergraduate/GeneralTiming.vue'
import Procedure from '../components/admission-info/undergraduate/Procedure.vue' 
import AdmissionCriteria from '../components/admission-info/undergraduate/AdmissionCriteria.vue'
import Special from '../components/admission-info/undergraduate/Special.vue'
import Contact from '../components/admission-info/undergraduate/Contact.vue' 

export default {
  components: {
    Banner,
    Cse,
    General,
    GeneralTiming,
    Procedure,
    AdmissionCriteria,
    Special,
    Contact,
  },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        banner: require('@/static/admissiontest.png'),
        title: 'Admission Info',
        details: 'Undergraduate',
      },
      Informations: [
          {
              info: "The Department of CSE is ranked “Very Good” in quality by External Peer Review Team (EPRT), IQAC, UGC."
          },
          {
              info: "Adjunct senior faculty members only from renowned public universities (BUET, Dhaka University and Jahangirnagar University)"
          },
          {
              info: "Student clubs and extracurricular activities are funded and encouraged by the department"
          },
          {
              info: "Industrial training is included in the course curriculum to bridge the gap between study and work"
          },
          {
              info: "Government-funded Lab for Games and Android App development for students"
          },
          {
              info: "Students publish their research work in high impact factor journals and international conferences"
          },
          {
              info: "Students publish their research work in high impact factor journals and international conferences"
          },
      ],

      generalInformations: [
        {
          info: "The admission screening procedure at UAP aims to find the most deserving students for each department. It is also important for students to find out their own skill sets which will suggest and guide them in choosing appropriate career paths. The admission system varies for different departments depending on each department’s requirements, but it is strictly maintained that the procedures are fair and transparent. We value that each student deserves a culture where all the classmates are motivated to pursue higher education and have something to offer in their lateral education. Good admission procedures are here to satisfy that."
        },
      ],
      procedureInformation: [
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
      criteriaInformation: [
        {
          program: "B.Sc. Engg. in CSE",
          gpaReq: "Minimum GPA Requirements",
          ssc: "Total GPA in SSC & HSC = 7.50",
          o: "Total GPA in O & A level=7.50",
          min: "(Candidates with minimum GPA of 2.5 in five subjects in O level and two subjects in A level).",
          subReq: "Subject Requirements",
          must: "Students must have Physics, Mathematics in HSC (or equivalent) and Chemistry either in SSC or HSC (or equivalent).",
          link: "http://"

        }
      ],
      specialInformation: [
        {
          title: "Admit Card",
          dec: "Applicants are requested to come to the UAP admission office to collect the admit card."
        },
        {
          title: "For Diploma Students",
          dec: "Diploma students may apply for admission provided that they have a minimum GPA of 3.0 and they can apply for their respective department only( i.e A diploma student of Copmuter Technology can apply only in CSE department.)"
        }
      ],
      contactInformation: [
        {
          name: "Rabeya Khandoker",
          designation: "Admission Officer",
          email: "rabeyakhandoker@uap-bd.edu",
        }
      ]
    }
  },
}
</script>
