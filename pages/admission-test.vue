<template>
  <section id="admissionTestMain">
    <Banner :banner="admission_test_banner" />
    <div class="container my-5">
      <div class="main-table">
        <div class="text-center creditHead">
          <h3>ADMISSION TEST SCHEDULE AND SAMPLE QUESTION</h3>
        </div>
        <div class="table-responsive">
          <table
            class="table table-borderless shadow-sm table-striped table-bordered mb-0"
          >
            <thead>
              <tr>
                <th>Faculty/Department</th>
                <th>Schedule</th>
                <th>Sample Question</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in admissiontestlist" :key="i">
                <td class="data">{{ item.type }}</td>
                <td>
                  <div v-for="(schedule, j) in item.sq_type" :key="j">
                    <a
                      v-if="schedule.sq === 'schedule'"
                      :href="schedule.pdf"
                      target="_blank"
                    >
                      {{ schedule.pdf_file_title }}
                    </a>
                  </div>
                </td>
                <td>
                  <div v-for="(schedule, j) in item.sq_type" :key="j">
                    <a
                      v-if="schedule.sq === 'question'"
                      :href="schedule.pdf"
                      target="_blank"
                    >
                      {{ schedule.pdf_file_title }}
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  <!-- <section id="admissionTest">
    <Banner :banner="admission_test_banner" />
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="table-responsive">
            <table class="table text-center">
              <thead>
                <tr>
                  <th colspan="3" class="heading">
                    ADMISSION TEST SCHEDULE AND SAMPLE QUESTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th v-for="(item, i) in column" :key="i" class="title">
                    {{ item }}
                  </th>
                </tr>
                <tr v-for="(item, i) in admissiontestlist" :key="i">
                  <td class="data">{{ item.department }}</td>
                  <td class="data">{{ item.schedule }}</td>
                  <td class="data">
                    <a :href="item.pdf" download>
                      {{ item.pdf_file_title }}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'

export default {
  components: { Banner },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('admission/admissionTestBanner')
    store.dispatch('admission/admissionTestList')
  },
  data() {
    return {
      column: ['Faculty/Department', 'Schedule', 'Sample Question'],
    }
  },
  computed: {
    ...mapGetters('admission', ['admission_test_banner', 'admissiontestlist']),
    schedules() {
      return this.admissiontestlist.filters((item) => item.sq === 'schedule')
    },
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_main.scss';
#admissionTestMain {
  .main-table {
    border-radius: 5px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  }

  .creditHead {
    padding-top: 42px;
    padding-bottom: 20px;
    background-color: $background-color;
    border-bottom: 1px solid $darkblue;
    color: $darkblue;
    h3 {
      font-size: 27px;
      font-weight: 600;
    }
    p {
      font-size: 14px;
      font-weight: 500;
    }
  }

  table {
    thead {
      background-color: $background-color;

      tr {
        th {
          vertical-align: text-top;
          font-size: 18px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: $darkblue;
          text-align: center;
        }
      }
    }

    tbody {
      tr {
        text-align: center !important;
        td.data {
          font-size: 18px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: $darkblue;
        }
      }
    }
  }
}
</style>
