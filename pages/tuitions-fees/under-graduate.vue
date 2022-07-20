<template>
  <section id="under-graduate">
    <div class="container">
      <div class="main-table">
        <div class="text-center creditHead">
          <h3>Credit hours & total cost</h3>
          <p>(without admission fee)</p>
        </div>
        <table
          class="mb-0 table table-borderless table-responsive shadow-sm table-striped table-bordered"
        >
          <thead>
            <tr class="">
              <th class="">Programs</th>
              <th class="top">Credit Hours</th>

              <th class="top">
                Registration fees<span class="subtitle">(A)</span>
              </th>

              <th class="title">
                Tuition Per Semester
                <div class="categoryPosition">
                  <div class="subtitle">
                    Fees <span class="sub-text">(B)</span>
                  </div>
                  <div class="subtitle subtitle2">
                    Fees <span class="sub-text">(A+B)</span>
                  </div>
                </div>
              </th>
              <th class="top">
                Total Semester Fees<span class="subtitle">(Tk.)</span>
              </th>
              <th class="top" width="15%">
                Total Cost (Tk.)
                <div class="last-text">
                  with Admission fees and Other Common fees
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in underGraduateList" :key="i">
              <td class="programText">
                {{ item.programs }}
              </td>
              <td class="data same-text">
                {{ item.credit_hours }}
              </td>
              <td class="data same-text">
                {{ item.registration_fees }}
              </td>
              <td class="data same-text">
                <span class="categoryPosition">
                  <td class="fee">{{ item.tuition_per_semester_fees_b }}</td>
                  <td>{{ item.tuition_per_semester_fees_a_b }}</td>
                </span>
              </td>

              <td class="data">
                {{ item.total_semester_fees }}
              </td>
              <td class="data">{{ item.total_cost }}</td>
            </tr>
          </tbody>
        </table>
        <div class="meritTableFooter p-5">
          <div v-html="underGraduationNote.notes"></div>
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
    store.dispatch('tuitions/allUnderGraduate')
    store.dispatch('tuitions/getUnderGraduateNote')
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('tuitions', ['underGraduateList', 'underGraduationNote']),
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
