<template>
  <section id="credit" class="">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 px-0">
          <div class="main-table">
            <div class="text-center creditHead">
              <h3>Credit hours & total cost</h3>
              <p>(without admission fee)</p>
            </div>
            <table class="table table-borderless table-responsive text-center">
              <thead class="headerBackground">
                <tr class="p-0">
                  <th v-for="(creditTitle, i) in creditTitles" :key="i">
                    <p v-if="creditTitle.subtitle">
                      {{ creditTitle.title }}
                      <small
                        v-for="(subtitle, subi) in creditTitle.subtitle"
                        :key="subi"
                        >{{ subtitle.title }}</small
                      >
                    </p>
                    <p v-else>{{ creditTitle.title }}</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(creditCost, i) in creditCosts" :key="i" class="">
                  <td class="programName">{{ creditCost.programsName }}</td>
                  <td class="textSize">{{ creditCost.creditHours }}</td>
                  <td class="textSize">{{ creditCost.totalSemester }}</td>
                  <!-- <td class="textSize">{{ creditCost.totalSemester1 }}</td> -->
                  <td class="textSize">{{ creditCost.semesterFee }}/Course</td>
                  <td class="fee">{{ creditCost.totalSemesterFee }}</td>
                  <td class="fee">{{ creditCost.totalCost }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    creditCosts: {
      type: Array,
      required: true,
    },

    creditTitles: {
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
