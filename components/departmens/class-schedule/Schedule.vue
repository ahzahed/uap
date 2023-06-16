/* eslint-disable vue/require-default-prop */ /* eslint-disable
vue/require-default-prop */
<template>
  <section id="schedule">
    <div class="container my-5">
      <div class="col-lg-9 text-center mx-auto">
        <div class="shadow-sm">
          <h2>Schedule Checker</h2>
          <div class="lists">
            <div class="row">
              <div class="col-md-4 col-12 mt-1">
                <label>Select Program</label>
                <select
                  v-model="program"
                  class="form-select select-item shadow-sm"
                  @change="getSemesters($event)"
                >
                  <option disabled value="">Please select Program</option>
                  <option
                    v-for="(item, i) in programs"
                    :key="i"
                    :value="item.id"
                  >
                    {{ item.program }}
                  </option>
                </select>
              </div>

              <div class="col-md-4 col-12 mt-1">
                <label>Select Semester</label>
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

              <div class="col-md-4 col-12 mt-1">
                <label>Select Section (Optional)</label>
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
                <!-- {{checkFile(class_schedule_body.file)}} -->
                <iframe
                  v-if="
                    class_schedule_body.file &&
                    class_schedule_body.file.includes('.pdf')
                  "
                  v-show="class_schedule_body.file"
                  :src="$config.baseURL + class_schedule_body.file"
                  width="90%"
                  height="700px"
                />
                <img
                  v-else-if="class_schedule_body.file"
                  :src="$config.baseURL + class_schedule_body.file"
                  alt=""
                  class="w-100 h-100 px-2"
                />

                <a
                  v-show="class_schedule_body.file"
                  class="pink-btn btn mt-5"
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
    programs: {
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
      program: '',
      semester: '',
      section: '',
      semester_id: '',
      section_id: '',
      program_id: '',
    }
  },
  computed: {
    ...mapGetters('classSchedule', [
      'semesters',
      'sections',
      'class_schedule_body',
    ]),
  },
  methods: {
    getSemesters(event) {
      this.semester = ''
      this.section = ''
      this.program_id = event.target.value
      this.$store.dispatch('classSchedule/getSemesters', {
        department: this.$router,
        id: event.target.value,
      })
    },

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
        program: this.program_id,
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
      padding: 11px 80px;
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
