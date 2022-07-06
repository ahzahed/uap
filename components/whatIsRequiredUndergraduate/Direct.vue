<template>
  <section id="payment">
    <div class="container mt-5">
      <div v-for="(item, i) in value.DirectAdmission" :key="i" class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-10 text-center">
          <h1
            @click="
              () => {
                accoladingSlide(item.id)
                show = !show
              }
            "
          >
            {{ item.department }}
          </h1>
          <hr />
          <transition name="fade">
            <div v-show="show && item.id == showindex" class="mb-5">
              <div class="mt-4" v-html="item.direct_admission"></div>
              <!-- <h3>{{ item.minRequirements }}</h3>
              <p class="details">
                {{ item.minRequirementsDetails }}
              </p>
              <h3>{{ item.subjectRequirements }}</h3>
              <p class="details mb-5">
                {{ item.subjectRequirementsDetails }}
              </p>
              <nuxt-link to="#" class="primary-btn apply-btn"
                >Apply Now <img src="@/static/Vector.png" alt="Apply Button"
              /></nuxt-link> -->
            </div>
          </transition>
          <hr />
        </div>
        <div class="col-lg-1"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      show: true,
      showindex: 1,
      accolades: [
        {
          index: 1,
          title: 'Bachelor of Architecture',
          minRequirements: 'Minimum GPA requirements',
          minRequirementsDetails:
            'Total GPA in SSC & HSC = 6.00 (with minimum GPA 2.50 in SSC or equivalent and HSC or equivalent) or Total GPA in O & A level = 6.00 (with minimum GPA of 2.50 in five subjects in O level and two subjects in A level).',
          subjectRequirements: 'Subject requirements',
          subjectRequirementsDetails:
            'Applicants must have Science background & skill in free hand drawing.',
        },
        {
          index: 2,
          title: 'B.Sc. in Civil Engineering',
          minRequirements: 'Minimum GPA requirements',
          minRequirementsDetails:
            'Total GPA in SSC & HSC = 6.00 (with minimum GPA 2.50 in SSC or equivalent and HSC or equivalent) or Total GPA in O & A level = 6.00 (with minimum GPA of 2.50 in five subjects in O level and two subjects in A level).',
          subjectRequirements: 'Subject requirements',
          subjectRequirementsDetails:
            'Applicants must have Science background & skill in free hand drawing.',
        },
        {
          index: 3,
          title: 'B.Sc. in CSE',
          minRequirements: 'Minimum GPA requirements',
          minRequirementsDetails:
            'Total GPA in SSC & HSC = 6.00 (with minimum GPA 2.50 in SSC or equivalent and HSC or equivalent) or Total GPA in O & A level = 6.00 (with minimum GPA of 2.50 in five subjects in O level and two subjects in A level).',
          subjectRequirements: 'Subject requirements',
          subjectRequirementsDetails:
            'Applicants must have Science background & skill in free hand drawing.',
        },
        {
          index: 4,
          title: 'B.Sc. in EEE',
          minRequirements: 'Minimum GPA requirements',
          minRequirementsDetails:
            'Total GPA in SSC & HSC = 6.00 (with minimum GPA 2.50 in SSC or equivalent and HSC or equivalent) or Total GPA in O & A level = 6.00 (with minimum GPA of 2.50 in five subjects in O level and two subjects in A level).',
          subjectRequirements: 'Subject requirements',
          subjectRequirementsDetails:
            'Applicants must have Science background & skill in free hand drawing.',
        },
      ],
    }
  },
  methods: {
    accoladingSlide(i) {
      this.showindex = i
      this.show = !this.show
      // setTimeout(() => {
      //   this.show = !this.show
      // }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

.fade-enter-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#payment {
  h1 {
    @include title2;
    color: $deep-primary;
    cursor: pointer;
    margin-bottom: 32px;
  }
  hr {
    color: #2d368e;
    width: 80%;
    margin: 0 auto;
  }
  h3 {
    font-size: 22px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    margin: 43px 0px;
    @include respond-below(md) {
      margin: 25px 0px;
    }
  }
  P {
    @include paragraph;
  }
  .details {
    padding-right: 94px;
    padding-left: 94px;
    @include respond-below(xl) {
      padding-right: 50px;
      padding-left: 50px;
    }
    @include respond-below(md) {
      padding-right: 20px;
      padding-left: 20px;
    }
  }
  .apply-btn {
    padding: 11px 40px;
    background-color: $secondary;
    border-radius: 5px;
    // margin
  }
  img {
    padding-left: 10px;
  }
}
</style>
