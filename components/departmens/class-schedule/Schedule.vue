/* eslint-disable vue/require-default-prop */ /* eslint-disable
vue/require-default-prop */
<template>
  <section id="schedule">
    <div class="container my-5">
      <div class="col-lg-9 text-center mx-auto">
        <div class="shadow-sm">
          <h2>Class Schedule Checker</h2>
          <div class="lists">
            <div class="row">
              <div class="col-md-6">
                <select
                  v-model="semester"
                  class="form-select select-item shadow-sm"
                  @change="getSections($event)"
                >
                  <option disabled value="">Please select semester</option>
                  <option
                    v-for="(item, i) in semesters"
                    :key="i"
                    :value="item.id"
                  >
                    {{ item.semester_category }}
                  </option>
                </select>
              </div>

              <div class="col-md-6">
                <select
                  v-model="section"
                  class="form-select select-item shadow-sm"
                  @change="setSectionId($event)"
                >
                  <option disabled value="">Please select section</option>
                  <option
                    v-for="(item, i) in sections"
                    :key="i"
                    :value="item.id"
                  >
                    {{ item.section }}
                  </option>
                </select>
              </div>
            </div>
            <button @click="getFile">Check</button>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="pdfImage">
                <!-- <img :src="img" alt="" class="w-100 h-100" /> -->
                <a
                  v-show="class_schedule_body.file"
                  class="pink-btn btn"
                  :href="$config.baseURL + class_schedule_body.file"
                  target="_blank"
                >
                  Download <i class="fas fa-download"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    semesters: {
      type: Array,
      require: true,
    },
    // eslint-disable-next-line vue/require-default-prop
  },
  // asyncData({ store, route }) {
  //   store.dispatch('classSchedule/getSections', {
  //     department: route.params.department,
  //   })
  // },
  data() {
    return {
      img: require('@/static/pdf/classpdf.png'),
      semester: '',
      section: '',
      semester_id: '',
      section_id: '',
    }
  },
  computed: {
    ...mapGetters('classSchedule', ['sections', 'class_schedule_body']),
  },
  methods: {
    getSections(event) {
      this.semester_id = event.target.value
      this.$store.dispatch('classSchedule/getSections', {
        department: this.$router,
        id: event.target.value,
      })
    },
    setSectionId(event) {
      this.section_id = event.target.value
    },

    getFile() {
      this.$store.dispatch('classSchedule/getClassScheduleBody', {
        semester: this.semester_id,
        section: this.section_id,
        department: this.$router,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#schedule {
  h2 {
    border-bottom: 2px solid $darkblue;
    padding-top: 27px;
    padding-bottom: 27px;
    background-color: $lightblue;
    margin-bottom: 0px;
    @include title2;
    font-weight: 600;
  }
  .lists {
    padding: 50px;

    background-color: $lightblue;
    button {
      padding: 11px 124px;
      background-color: rgba(18, 102, 241, 0.75);
      border-radius: 5px;
      margin-top: 55px;
      color: $white;
    }
  }
  .pdfImage {
    background-color: $lightblue;
    display: block;
    text-align: center;
    padding-bottom: 100px;
    button {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
