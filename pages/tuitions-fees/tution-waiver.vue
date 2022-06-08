<template>
  <section id="under-graduate" class="mt-5">
    <div class="container">
      <div class="main-table">
        <div class="text-center creditHead">
          <h3>Credit hours & total cost</h3>
          <p>(without admission fee)</p>
        </div>
        <table class="table table-borderless table-responsive">
          <thead>
            <tr class="" style="padding-bottom: 110px">
              <th>SI. No</th>
              <th>GPA of SSC/Equivalent</th>
              <th>Total Semester</th>
              <th class="hsc">
                GPA of HSC/ Equivalent
                <div class="categoryPosition">
                  <span class="subTitle">HSC</span>
                  <span class="subTitle diploma">Diploma</span>
                </div>
              </th>
              <th>Tuition fee Waiver</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in getWaiverList" :key="i">
              <td class="programText">{{ i + 1 }}</td>
              <td class="data">{{ item.gpa_of_ssc_equivalent }}</td>
              <td class="data">
                {{ item.total_semester }}
              </td>

              <td class="data">
                <span class="categoryPosition">
                  <sm class="hscData">{{ item.hsc }}</sm>
                  <sm>{{ item.diploma }}</sm>
                </span>
              </td>
              <!-- <td></td> -->
              <td class="data">{{ item.total_fee_waiver }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <section id="waiver">
      <div class="container">
        <div class="row waiverRow">
          <div class="col-md-6">
            <div class="main-merit">
              <div class="text-center merit creditHead">
                <h3>MERIT WAIVER</h3>
                <p class="meritP">(FROM 2ND SEMESTER ONWARD)</p>
              </div>
              <table
                class="table table-borderless table-responsive text-center"
              >
                <thead>
                  <tr>
                    <th>SI. No</th>
                    <th>Semester GPA</th>
                    <th>Tuition fee Waiver</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in meritWaiverList" :key="i">
                    <td>{{ i + 1 }}</td>
                    <td>{{ item.semester_gpa }}</td>
                    <td>{{ item.tuition_fee_waiver }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="text-center meritTableFooter">
                <p>
                  Top 3% students in each department will be offered 100%
                  tuition fee waiver
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 text-center">
            <div class="card special">
              <span class="logo">
                <img class="w-100" />
              </span>
              <h3 class="special-waiver-text">SPECIAL WAIVER</h3>
              <p class="waiver-text">
                10%-100% VC's special tuition fee waiver for poor but
                meritorious students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  asyncData({ store, route }) {
    store.dispatch('tuitions/getWaiverList')
    store.dispatch('tuitions/meritWaiver')
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('tuitions', ['getWaiverList', 'meritWaiverList']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
.categoryPosition {
  display: flex;
  justify-content: space-evenly;
  span {
    @include subtitle2;
  }
}
</style>
