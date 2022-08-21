<template>
  <section id="message">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-12">
          <div class="heading">
            <h1 class="text-center">{{ message.title }}</h1>
          </div>
          <div class="details">
            <!-- <p v-if="toggle == false" v-html="dean.message.slice(0, 300)"></p> -->
            <p v-html="dean.message"></p>
            <!-- <div class="row messageFrom">
              <div class="col-lg-4">
                <img :src="img" alt="x" />
              </div>
              <div class="col-lg-8">
                <p class="text-right">Professor Dr. Muhammad Mizanur Rahaman</p>
              </div>
            </div> -->
            <div style="text-align: right">
              <!-- <button class="primary-btn readmore" @click="toggle = !toggle">
                <span v-if="toggle == false">
                  <span class="plus"><i class="fas fa-plus-circle"></i></span>
                  Read More</span
                >
                <span v-else>
                  <span class="plus"><i class="fas fa-minus-circle"></i></span>
                  Read Less</span
                >
              </button> -->
            </div>
            <div class="messageFrom mt-5">
              <img :src="$config.baseURL + dean.image" :alt="dean.name" />
              <div class="profile mt-2">
                <p>
                  {{ dean.name }}<br />
                  <span>Dean, School of Engineering</span><br />
                  <span>University of Asia Pacific</span>
                </p>
                <p class="email">
                  <img class="icon" :src="require('static/envelope.svg')" />
                  {{ dean.email }}
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
// import s from 'static/envelope.svg'
export default {
  props: {
    dean: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      toggle: false,
      message: {
        title: 'MESSAGE FROM THE DEAN',
        details:
          '<p>All our undergraduate programs are fully accredited by the Board of Accreditation for Engineering and Technical Education (BAETE) that enables our graduates to become the members of the Institution of Engineers, Bangladesh (IEB). Independent peer-review teams comprising national and internal experts formed by UGC under the World Bank financed Higher Education Quality Enhancement Project (HEQEP) for evaluating quality of higher education using eight indicators rated all our three undergraduate engineering degree programs of School of Engineering as “Very Good”.</p><p>At UAP School of Engineering, we are investing our resources to implement outcome based education (OBE) in order to produce need based professionals - who are able to transform information into knowledge to solve real life problems, help achieving sustainable development goals worldwide and able to face the (anticipated and unanticipated) challenges of the 4th industrial revolution using modern smart technologies and communication techniques.</p><p>UAP School of Engineering is continuously striving to attract top-class faculty members having Masters or PhD degrees from internationally renowned universities with considerable research, teaching and technical expertise. At present, School of Engineering has 72 faculty members among which 24 have PhDs from world’s top-ranked universities, mostly from North America, Europe, Australia and Asia. Through our excellent faculty members, we provide innovative education and actively involve our students in cutting-edge research.</p><p>The importance of research is at the heart of a university as this is the place where new knowledge is created. At UAP School of Engineering, we always encourage our students to raise their hunger and thirst for knowledge generation. We aim to promote a multidisciplinary research culture in our classrooms and laboratories and also in the brains and minds of our students that ensures an enabling environment for knowledge creation. Our faculty members regularly publish their research findings in leading peer-reviewed journals that are indexed by ISI Web of Science and Scopus.</p><p>By 2041, UAP School of Engineering wants to be one of the top 100 engineering schools in Asia and among the top 500 engineering schools in the world that is measurable by internationally recognized ranking and accreditation bodies. We acknowledge that, in addition to research and teaching, meaningful collaboration with industries is absolutely vital for achieving our long-term strategic goal that is to become a globally respected knowledge based engineering school. To achieve this strategic goal, all three departments under the School of Engineering formed Industrial Advisory Panels (IAP) that play an important role to update our curriculum, incorporate the needs of industries and integrate our students with professional life.</p><p>21st century is surprising us with stunning and unanticipated technological innovations and unprecedented natural disasters that are changing our lifestyles, professions, cultural and social life so dramatically that we ourselves are changing rapidly without even noticing that or, perhaps, we have no option but to embrace and adapt with these technology oriented changes. Scientists and philosophers predict that by 2050 – the world will be a completely different place than it is today. In that respect, UAP School of Engineering is continuously working to produce world class Engineers who are socially committed, ethical and able to solve the countless problems faced by humanity and the ecosystem in the 21st century and beyond.</p><p>I hope through our website all prospective students, respected guardians, and interested stakeholders will explore what UAP School of Engineering has to offer. Thank you for kindly visiting our website and please kindly let us know if you have any suggestions or need any further information.</p>',
      },
      img: require('@/static/BOD/x.jpg'),
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#message {
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
  .details {
    background-color: $lightblue;
    padding: 92px 111px;
    text-align: justify;
    @include respond-below(lg) {
      padding: 80px 70px;
    }
    @include respond-below(sm) {
      padding: 40px 30px;
    }
    @include paragraph;
    .readmore {
      border-radius: 5px;
      //   text-align: right;
      padding: 11px 22px;
      cursor: pointer;
    }
  }
  .messageFrom {
    display: flex;
    flex-direction: row;
    @include respond-below(xs) {
      flex-direction: column;
      align-items: center;
    }
    .profile {
      margin-left: 20px;
      .email {
        @include paragraph;
        font-weight: 500;
      }
      p {
        @include paragraph;
        font-weight: 600;
        color: $deep-primary;
        text-align: left;

        span {
          @include paragraph;

          font-weight: 300;
        }
      }
    }
    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      @include respond-below(xs) {
        height: 100px;
        width: 100px;
      }
    }
    .icon {
      width: 28px;
      height: 20px;
      border-radius: 0;
      color: red;
      margin-bottom: 0px;
    }
  }
}
</style>
