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
                <tr class="">
                  <th class="">Programs</th>
                  <th class="top">Credit Hours</th>

                  <th class="top">
                    Registration fees<span class="subtitle">(A)</span>
                  </th>

                  <th class="title">
                    Tuition Per Semester
                    <div class="subtitle-div">
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
                    <div class="last-text"
                      >with Admission fees and Other Common fees</div
                    >
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(undergraduateDetail, i) in undergraduateDetails"
                  :key="i"
                  class=""
                >
                  <td class="programText">
                    {{ undergraduateDetail.programsName }}
                  </td>
                  <td class="data same-text">
                    {{ undergraduateDetail.creditHours }}
                  </td>
                  <td class="data same-text">
                    {{ undergraduateDetail.Registrationfees }}
                  </td>
                  <td class="data same-text">
                    <span>
                      <td class="fee">{{ undergraduateDetail.FeesB }}</td>
                      <td>{{ undergraduateDetail.FeesAB }}</td>
                    </span>
                  </td>

                  <td class="data">
                    {{ undergraduateDetail.totalSemesterFee }}
                  </td>
                  <td class="data">{{ undergraduateDetail.totalCost }}</td>
                </tr>
              </tbody>
            </table>
          </div>
       
    </div>
    <!-- <slot></slot> -->
  </section>
</template>

<script>
export default {
  props: {
    undergraduateDetails: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style></style>
