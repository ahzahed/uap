/* eslint-disable vue/require-default-prop */
<template>
  <section id="resourseDepartmentBooklet">
    <div class="container">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-10">
          <div id="accordionExample" class="accordion">
            <div
              v-for="(item, i) in value.department_booklets"
              :key="i"
              class="accordion-item"
            >
              <h2 id="headingOne" class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  @click="
                    () => {
                      accoladingSlide(item.id)
                      show = !show
                    }
                  "
                >
                  {{ item.title }}
                </button>
              </h2>

              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                :class="show && item.id == showindex ? 'show' : ''"
              >
                <div class="accordion-body">
                  <!-- <p v-html="item.faq_description"></p> -->
                  <ul v-for="(publicaiton, j) in item.publicaiton" :key="j">
                    <li>
                      <a
                        :href="$config.baseURL + publicaiton.file"
                        target="_blank"
                        class="nav-link"
                        >{{ publicaiton.file_title }}</a
                      >
                    </li>
                    <hr />
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
          title: 'How to apply?',
          desc: '<p>Our application process is very easy:</p><p style="margin-bottom: 0px"><span style="font-size: 1rem;"><b>1. You Apply</b></span><br></p><p>Tell us a little about yourself and we’ll help with the rest. Our convenient online application tool only takes 10 minutes to complete.</p><p style="margin-bottom: 0px"><b><span style="font-size: 1rem;">2. We Connect</span><br></b></p><p>After you submit your application, an admissions representative will contact you and will help you to complete the process.</p><p style="margin-bottom: 0px"><b><span style="font-size: 1rem;">3. You Get Ready</span><br></b></p><p>Once you’ve completed your application and connected with an admissions representative, you’re ready to create your schedule.</p><p>Find our application <a href="http://www.facebook.com" target="_blank">form here</a>.&nbsp;</p>',
        },
        {
          index: 2,
          title: 'How to get financial aid?',
          desc: '<p>Our application process is very easy:</p><p style="margin-bottom: 0px"><span style="font-size: 1rem;"><b>1. You Apply</b></span><br></p><p>Tell us a little about yourself and we’ll help with the rest. Our convenient online application tool only takes 10 minutes to complete.</p><p style="margin-bottom: 0px"><b><span style="font-size: 1rem;">2. We Connect</span><br></b></p><p>After you submit your application, an admissions representative will contact you and will help you to complete the process.</p><p style="margin-bottom: 0px"><b><span style="font-size: 1rem;">3. You Get Ready</span><br></b></p><p>Once you’ve completed your application and connected with an admissions representative, you’re ready to create your schedule.</p><p>Find our application <a href="http://www.facebook.com" target="_blank">form here</a>.&nbsp;</p>',
        },
        {
          index: 3,
          title: 'Can I apply to more than one program?',
          desc: '<p>Our application process is very easy:</p><p style="margin-bottom: 0px"><span style="font-size: 1rem;"><b>1. You Apply</b></span><br></p><p>Tell us a little about yourself and we’ll help with the rest. Our convenient online application tool only takes 10 minutes to complete.</p><p style="margin-bottom: 0px"><b><span style="font-size: 1rem;">2. We Connect</span><br></b></p><p>After you submit your application, an admissions representative will contact you and will help you to complete the process.</p><p style="margin-bottom: 0px"><b><span style="font-size: 1rem;">3. You Get Ready</span><br></b></p><p>Once you’ve completed your application and connected with an admissions representative, you’re ready to create your schedule.</p><p>Find our application <a href="http://www.facebook.com" target="_blank">form here</a>.&nbsp;</p>',
        },
        {
          index: 4,
          title: 'When will I be informed of my admissions decision',
          desc: '<p>Our application process is very easy:</p><p style="margin-bottom: 0px"><span style="font-size: 1rem;"><b>1. You Apply</b></span><br></p><p>Tell us a little about yourself and we’ll help with the rest. Our convenient online application tool only takes 10 minutes to complete.</p><p style="margin-bottom: 0px"><b><span style="font-size: 1rem;">2. We Connect</span><br></b></p><p>After you submit your application, an admissions representative will contact you and will help you to complete the process.</p><p style="margin-bottom: 0px"><b><span style="font-size: 1rem;">3. You Get Ready</span><br></b></p><p>Once you’ve completed your application and connected with an admissions representative, you’re ready to create your schedule.</p><p>Find our application <a href="http://www.facebook.com" target="_blank">form here</a>.&nbsp;</p>',
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
#resourseDepartmentBooklet {
  padding-top: 50px;
  padding-bottom: $section-padding;
  h1 {
    @include title;
    font-weight: bold;
    color: $darkblue;
  }
  button {
    @include title2;
    color: $light-gray;
    background-color: $lightblue;
    padding: 49px 66px;
    @include respond-below(sm) {
      padding: 15px;
    }
  }
  p {
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 98px;
    @include respond-below(sm) {
      padding: 20px;
    }
    @include respond-below(xsl) {
      padding: 10px;
    }
  }
}
</style>
