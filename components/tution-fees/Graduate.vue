<template>
  <section id="graduate" class="mt-5">
    <div class="container">
     
          <div class="main-table">
            <div class="text-center creditHead">
              <h3>Credit hours & total cost</h3>
              <p>(without admission fee)</p>
            </div>
            <table class="table table-borderless table-responsive table-striped table-bordered">
              <thead>
                <tr class="">
                  <th class="thsame">Programs</th>
                  <th class="top text-center credit">Credit Hours</th>

                  <th class="text-center totalSemester">Total Semester</th>
                  <th class="top text-center thsame">
                    Per Semester/ credit/ course (Tk.)
                  </th>

                  <th class="top text-center totalSemester">Total Semester Fee (Tk.)</th>
                  <th class="top text-center last thsame">
                    Total Cost with Admission and Other Fees (Tk.)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(graduateDetail, i) in graduateDetails"
                  :key="i"
                  class="main-text"
                >
                  <td class="programText">{{ graduateDetail.programsName }}</td>
                  <td class="data sameText">{{ graduateDetail.creditHours }}</td>
                  <td class="data sameText">{{ graduateDetail.totalSemester }}</td>
                  <td class="data sameText">{{ graduateDetail.semesterFee }}/Course</td>
                  <td class="data">{{ graduateDetail.totalSemesterFee }}</td>
                  <td class="data">{{ graduateDetail.totalCost }}</td>
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
    graduateDetails: {
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
