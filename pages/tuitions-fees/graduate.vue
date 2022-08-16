<template>
  <section id="graduate" class="mt-5">
    <div class="container">
      <div class="main-table">
        <div class="text-center creditHead">
          <h3>Credit hours & total cost</h3>
          <p>(without admission fee)</p>
        </div>
        <div class="table-responsive">
          <table
            class="mb-0 table table-borderless shadow-sm table-striped table-bordered"
          >
            <thead>
              <tr class="">
                <th class="thsame">Programs</th>
                <th class="top text-center credit">Credit Hours</th>

                <th class="text-center totalSemester">Total Semester</th>
                <th class="top text-center thsame">
                  Per Semester/ credit/ course (Tk.)
                </th>

                <th class="top text-center totalSemester">
                  Total Semester Fee (Tk.)
                </th>
                <th class="top text-center last thsame">
                  Total Cost with Admission and Other Fees (Tk.)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in graduateList" :key="i" class="main-text">
                <td class="programText">{{ item.programs }}</td>
                <td class="data sameText">{{ item.credit_hours }}</td>
                <td class="data sameText">{{ item.total_semester }}</td>
                <td class="data sameText">{{ item.per_semester_course }}</td>
                <td class="data">{{ item.total_semester_fees }}</td>
                <td class="data">
                  {{ item.total_cost_with_admission_and_other_fees }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="meritTableFooter p-5">
          <div v-html="graduationNote.notes"></div>
        </div>
      </div>
    </div>
    <!-- <slot></slot> -->
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  asyncData({ store, route }) {
    store.dispatch('tuitions/allGraduate')
    store.dispatch('tuitions/getGraduationNote')
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('tuitions', ['graduateList', 'graduationNote']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
.meritTableFooter {
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;

  color: #000;
  background-color: $violot;
}
</style>
